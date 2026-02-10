
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import AgentDetail from './pages/AgentDetail';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Explorer from './pages/Explorer';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import BrandIdentity from './pages/BrandIdentity';
import { AuthProvider } from './context/AuthContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/explorer" element={<Explorer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/brand" element={<BrandIdentity />} />
              <Route path="/category/:catName" element={<CategoryDetail />} />
              <Route path="/agent/:agentId" element={<AgentDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
