
export enum Category {
  FINANCIAL = 'Financial',
  TRAVEL = 'Travel',
  EDUCATION = 'Education',
  PRODUCTIVITY = 'Productivity',
  RETAIL = 'Retail'
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: Category;
  downloads: number;
  rating: number;
  author: string;
  version: string;
  icon: string;
  releaseDate: string;
}

export interface Contributor {
  id: string;
  username: string;
  agentsBuilt: number;
  totalDownloads: number;
  avatar: string;
}