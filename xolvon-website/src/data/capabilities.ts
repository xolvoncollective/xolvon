/**
 * Capabilities data for Xolvon Comprehensive Website
 * Six core capabilities of the Xolvon platform
 */

import type { Capability } from '../types/capability';

export const capabilities: Capability[] = [
  {
    id: 'attention-alert',
    title: 'Attention Alert',
    description: 'Real-time monitoring and alerting system that identifies critical attention patterns and signals across digital channels, enabling rapid response to emerging trends.',
    iconName: 'Bell',
    color: 'purple'
  },
  {
    id: 'real-time-sentiment',
    title: 'Real-Time Sentiment Analysis',
    description: 'Advanced AI-powered sentiment analysis that processes millions of signals monthly to understand audience emotions and reactions in real-time.',
    iconName: 'Heart',
    color: 'blue'
  },
  {
    id: 'cyber-defense',
    title: 'Cyber Defense',
    description: 'Comprehensive security framework protecting digital assets and data integrity through proactive threat detection and automated defense mechanisms.',
    iconName: 'Shield',
    color: 'purple'
  },
  {
    id: 'xolvon-market',
    title: 'Xolvon Market',
    description: 'Integrated marketplace platform connecting businesses with AI-powered solutions, featuring 18 alpha-stage products and automated distribution systems.',
    iconName: 'Store',
    color: 'blue'
  },
  {
    id: 'human-ai-attention-data',
    title: 'Human-AI Attention-Data Insight',
    description: 'Synergistic fusion of human expertise and AI analytics delivering actionable insights from attention data, processing 2.7M+ signals monthly.',
    iconName: 'Brain',
    color: 'purple'
  },
  {
    id: 'attention-boost',
    title: 'Attention Boost',
    description: 'Strategic amplification tools that optimize content visibility and engagement through data-driven attention management and audience targeting.',
    iconName: 'TrendingUp',
    color: 'blue'
  }
];
