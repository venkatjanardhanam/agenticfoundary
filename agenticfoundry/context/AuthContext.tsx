
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  resetPassword: (email: string, newPassword: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_DB_KEY = 'af_database_users';
const SESSION_KEY = 'af_user_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedSession = localStorage.getItem(SESSION_KEY);
    if (savedSession) {
      setUser(JSON.parse(savedSession));
    }
    setIsLoading(false);
  }, []);

  const getDatabase = (): StoredUser[] => {
    const data = localStorage.getItem(USERS_DB_KEY);
    return data ? JSON.parse(data) : [];
  };

  const saveToDatabase = (users: StoredUser[]) => {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const db = getDatabase();
    const foundUser = db.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (!foundUser) {
      setIsLoading(false);
      throw new Error('Invalid email or password');
    }
    
    const { password: _, ...userSession } = foundUser;
    setUser(userSession);
    localStorage.setItem(SESSION_KEY, JSON.stringify(userSession));
    setIsLoading(false);
  };

  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const db = getDatabase();
    if (db.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      setIsLoading(false);
      throw new Error('User already exists with this email');
    }

    const newUser: StoredUser = {
      id: Math.random().toString(36).substring(7),
      email,
      username,
      password,
      avatar: `https://picsum.photos/seed/${username}/100/100`
    };
    
    db.push(newUser);
    saveToDatabase(db);
    setIsLoading(false);
  };

  const resetPassword = async (email: string, newPassword: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const db = getDatabase();
    const userIndex = db.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (userIndex === -1) {
      setIsLoading(false);
      throw new Error('User not found');
    }

    db[userIndex].password = newPassword;
    saveToDatabase(db);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, resetPassword, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
