
import { Category, Agent, Contributor } from './types';

export const MOCK_AGENTS: Agent[] = [
  {
    id: '1',
    name: 'WealthWise AI',
    description: 'Autonomous portfolio rebalancing and risk analysis agent.',
    category: Category.FINANCIAL,
    downloads: 12400,
    rating: 4.8,
    author: 'QuantMaster',
    version: '2.1.0',
    icon: '💰',
    releaseDate: '2024-03-15'
  },
  {
    id: '2',
    name: 'Globetrotter GPT',
    description: 'End-to-end travel planner and itinerary optimization',
    category: Category.TRAVEL,
    downloads: 8900,
    rating: 4.5,
    author: 'NomadicDev',
    version: '1.0.4',
    icon: '✈️',
    releaseDate: '2024-01-10'
  },
  {
    id: '3',
    name: 'CollegeCompass',
    description: 'Personalized agent that does leg work like a college consular',
    category: Category.EDUCATION,
    downloads: 15600,
    rating: 4.9,
    author: 'EduBotLabs',
    version: '3.0.1',
    icon: '🎓',
    releaseDate: '2024-02-20'
  },
  {
    id: '4',
    name: 'FocusFlow',
    description: 'Deep work timer and notification suppressor agent.',
    category: Category.PRODUCTIVITY,
    downloads: 21000,
    rating: 4.7,
    author: 'ZenBuilder',
    version: '1.2.0',
    icon: '⚡',
    releaseDate: '2023-12-05'
  },
  {
    id: '5',
    name: 'CartGenie',
    description: 'Dynamic price tracking and automated coupons.',
    category: Category.RETAIL,
    downloads: 5400,
    rating: 4.2,
    author: 'ShopSmart',
    version: '0.9.5',
    icon: '🛒',
    releaseDate: '2024-04-01'
  },
  {
    id: '6',
    name: 'TaxTamer',
    description: 'Real-time tax liability estimator and deduction finder.',
    category: Category.FINANCIAL,
    downloads: 7200,
    rating: 4.6,
    author: 'FiscalFocus',
    version: '1.1.0',
    icon: '📝',
    releaseDate: '2024-02-15'
  }
];

export const MOCK_CONTRIBUTORS: Contributor[] = [
  { id: 'c1', username: 'NeuralNexus', agentsBuilt: 14, totalDownloads: 85000, avatar: 'https://picsum.photos/seed/1/100/100' },
  { id: 'c2', username: 'EduBotLabs', agentsBuilt: 8, totalDownloads: 42000, avatar: 'https://picsum.photos/seed/2/100/100' },
  { id: 'c3', username: 'QuantMaster', agentsBuilt: 5, totalDownloads: 38000, avatar: 'https://picsum.photos/seed/3/100/100' },
  { id: 'c4', username: 'ZenBuilder', agentsBuilt: 12, totalDownloads: 35000, avatar: 'https://picsum.photos/seed/4/100/100' },
  { id: 'c5', username: 'NomadicDev', agentsBuilt: 3, totalDownloads: 29000, avatar: 'https://picsum.photos/seed/5/100/100' },
];
