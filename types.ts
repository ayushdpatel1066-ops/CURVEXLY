export enum PricingModel {
  Free = 'Free',
  Freemium = 'Freemium',
  Paid = 'Paid',
  OpenSource = 'Open Source'
}

export enum Category {
  Text = 'Text & Writing',
  Image = 'Image Generation',
  Video = 'Video & Animation',
  Audio = 'Audio & Speech',
  Coding = 'Coding & Dev',
  Productivity = 'Productivity',
  Business = 'Business & Marketing',
  Research = 'Research & Data',
  ThreeD = '3D & Design'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  pricing: PricingModel;
  url: string;
  iconUrl: string; // Using picsum for placeholders or specific logos if available (mocked)
  popular: boolean;
  tags: string[];
}

export interface FilterState {
  search: string;
  category: Category | 'All';
  pricing: PricingModel | 'All';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
