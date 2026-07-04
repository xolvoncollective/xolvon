/**
 * Project data for Xolvon Comprehensive Marketplace Website
 * Contains all 18 ProjectXolvon alpha launch projects
 */

import type { Project } from '../types/project';
import { ProjectCategory, ProjectStatus } from '../types/project';

export const projects: Project[] = [
  {
    id: 'mulai-ai',
    title: 'mulai.ai',
    category: ProjectCategory.AI_LEARNING,
    shortDescription: 'AI-assisted learning system with integrated curriculum for students and professionals.',
    longDescription: 'Mulai.ai is an AI-assisted learning system designed to transform education through Human-AI Collaboration. It provides structured, adaptive, and contextual learning experiences with integrated curriculum systems, adaptive quizzes, and structured prompting frameworks. The platform helps students choose majors, courses, and specific topics while AI adjusts evaluation and guidance based on understanding levels.',
    features: [
      'Integrated Curriculum System with major and course selection',
      'Adaptive Quiz & Evaluation based on user understanding',
      'Contextual AI Learning connected to case studies and industry applications',
      'Structured Prompting Framework for deep, concise, or quiz-based learning'
    ],
    thumbnailUrl: '/images/projects/mulai-ai-thumb.webp',
    heroImageUrl: '/images/projects/mulai-ai-hero.webp',
    ctaText: 'Start Learning',
    ctaLink: 'https://mulai-ai.pages.dev',
    tags: ['AI', 'Education', 'Machine Learning', 'SaaS'],
    launchNumber: 12,
    status: ProjectStatus.LAUNCHED
  },
  {
    id: 'cafe-margin',
    title: 'CafeMargin',
    category: ProjectCategory.BUSINESS_OPTIMIZATION,
    shortDescription: 'Business intelligence platform protecting cafe margins and capturing hidden opportunities.',
    longDescription: 'CafeMargin protects margins and captures opportunities that are almost gained but often lost without awareness. Built for cafes that look busy but leak value through repeated small decisions. The platform provides clarity over complexity, helping business owners see where opportunities emerge, where decisions weaken margins, and when businesses work hard without optimal results through operational experience and analytical thinking.',
    features: [
      'Margin protection and opportunity capture analytics',
      'Decision impact analysis for operational improvements',
      'Clarity over complexity approach to business optimization',
      'Real-time monitoring of value leakage and missed opportunities'
    ],
    thumbnailUrl: '/images/projects/cafe-margin-thumb.webp',
    heroImageUrl: '/images/projects/cafe-margin-hero.webp',
    ctaText: 'Optimize Your Cafe',
    ctaLink: 'https://cafemargin.com',
    tags: ['Business Intelligence', 'Analytics', 'SaaS', 'F&B'],
    launchNumber: 2,
    status: ProjectStatus.PRE_MVP
  },
  {
    id: 'xclip',
    title: 'Xclip',
    category: ProjectCategory.CONTENT_AUTOMATION,
    shortDescription: 'Automated video clipping tool that transforms long videos into hundreds of engaging short clips.',
    longDescription: 'Xclip by Xolvon.ai is an automated clipping solution that transforms long-form videos like podcasts or webinars into hundreds of engaging short clips within minutes. Create Shorts, Reels, and TikTok clips easily and efficiently without spending hours manually cutting videos. This practical Human-AI End-to-End solution empowers content creators to scale their content production effortlessly.',
    features: [
      'Automated video clipping from long-form content',
      'Create Shorts, Reels, and TikTok clips in minutes',
      'AI-powered scene detection and editing',
      'Batch processing for multiple videos simultaneously'
    ],
    thumbnailUrl: '/images/projects/xclip-thumb.webp',
    heroImageUrl: '/images/projects/xclip-hero.webp',
    ctaText: 'Start Clipping',
    ctaLink: 'https://lynk.id/mulai.ai/8zk8494xmvml',
    tags: ['Video Editing', 'AI', 'Content Creation', 'Automation'],
    launchNumber: 10,
    status: ProjectStatus.LAUNCHED
  },
  {
    id: 'attention-boost',
    title: 'AttentionBoost',
    category: ProjectCategory.CONSUMER_ANALYSIS,
    shortDescription: 'Consumer sentiment analysis examining news tone impact on 20 unique Indonesian consumer segments.',
    longDescription: 'AttentionBoost dissects the impact of daily news tone on 20 unique Indonesian consumer characters. Through the Consumer Signal Lab feature, you can see Attention Index specifically, Tone Mapping (Neutral/Positive/Negative), and Buying Power & Trend Direction per segment. This is not just assumptions, but real implementation results from tested data, SOPs, and systems. Currently in Pre-MVP phase, the engine is already warming up.',
    features: [
      'Consumer Signal Lab analyzing 20 unique Indonesian segments',
      'Attention Index tracking and measurement',
      'Tone Mapping analysis (Neutral/Positive/Negative)',
      'Buying Power and Trend Direction per consumer segment'
    ],
    thumbnailUrl: '/images/projects/attention-boost-thumb.webp',
    heroImageUrl: '/images/projects/attention-boost-hero.webp',
    ctaText: 'Explore Consumer Insights',
    ctaLink: 'https://attentionboost.pages.dev',
    tags: ['Consumer Analysis', 'Sentiment Analysis', 'Market Intelligence', 'Data Science'],
    launchNumber: 8,
    status: ProjectStatus.PRE_MVP
  },
  {
    id: 'konten-margin',
    title: 'KontenMargin',
    category: ProjectCategory.CONTENT_AUTOMATION,
    shortDescription: 'Distribution funnel engine combining human intelligence and AI efficiency for viral content.',
    longDescription: 'KontenMargin is a distribution funnel engine that combines human intelligence and AI efficiency to help navigate Indonesian consumer behavior. It provides Creator Hub with 60+ proven hook templates, Live Variable Customization Engine to tailor content to specific audiences instantly, and in-depth analysis from consumer behavior to market trends in one dashboard. Lead trends with valid data instead of just following them.',
    features: [
      'Creator Hub & Hooks Library with 60+ proven templates',
      'Live Variable Customization Engine for audience targeting',
      'In-depth consumer behavior and market trend analysis',
      'Integrated dashboard for content strategy optimization'
    ],
    thumbnailUrl: '/images/projects/konten-margin-thumb.webp',
    heroImageUrl: '/images/projects/konten-margin-hero.webp',
    ctaText: 'Start Creating',
    ctaLink: 'https://kontenmargin.pages.dev',
    tags: ['Content Strategy', 'AI', 'Creator Economy', 'Marketing'],
    launchNumber: 16,
    status: ProjectStatus.LAUNCHED
  },
  {
    id: 'life-margin',
    title: 'LifeMargin',
    category: ProjectCategory.BUSINESS_OPTIMIZATION,
    shortDescription: 'One-tap prompting platform expanding success margins in life, study, and career with AI.',
    longDescription: 'LifeMargin Web is a One-Tap Prompting platform helping expand success margins in life, study, and career. Using structured Prompt Engineering methodology (Context → Task → Constraint → Format), users get more relevant, clear, and ready-to-use AI output in one click. Features include Mindset & Self-Check tools, Money & Monetization Tools, 1700+ study materials, and Secret Tools for faster leveling up through Human-AI Collaboration.',
    features: [
      'One-Tap Prompting with structured engineering methodology',
      'Mindset & Self-Check personal development tools',
      'Money & Monetization strategic frameworks',
      '1700+ study materials and learning resources'
    ],
    thumbnailUrl: '/images/projects/life-margin-thumb.webp',
    heroImageUrl: '/images/projects/life-margin-hero.webp',
    ctaText: 'Expand Your Margin',
    ctaLink: 'https://lifemargin.co',
    tags: ['Personal Development', 'AI', 'Productivity', 'Education'],
    launchNumber: 11,
    status: ProjectStatus.LAUNCHED
  },
  {
    id: 'live-margin',
    title: 'LiveMargin',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Platform transforming public data into explorable, understandable, and actionable insights.',
    longDescription: 'LiveMargin transforms public data into accessible and actionable insights. The platform provides interactive intelligence dashboards, economic, social, digital, and employment insights, content pipeline based on data-driven opportunities, raw datasets for advanced exploration, and foundation towards automation and AI-powered intelligence system. Infrastructure transforms Data → Insight → Distribution → Ecosystem.',
    features: [
      'Interactive intelligence dashboards for data exploration',
      'Economic, social, digital, and employment insights',
      'Data-driven content pipeline and opportunities',
      'Raw datasets access for advanced analysis'
    ],
    thumbnailUrl: '/images/projects/live-margin-thumb.webp',
    heroImageUrl: '/images/projects/live-margin-hero.webp',
    ctaText: 'Explore Data',
    ctaLink: 'https://livemargin.pages.dev',
    tags: ['Data Intelligence', 'Analytics', 'Public Data', 'Dashboard'],
    launchNumber: 4,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'data-pulse',
    title: 'DataPulse',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Real-time intelligence dashboard for market monitoring, news, and content discovery integration.',
    longDescription: 'DataPulse is a real-time intelligence dashboard designed to automatically collect and process data from various sources, from crypto data, forex, technical indicators, to current news and trends, presenting it in one integrated dashboard. It helps users monitor information faster, reduces scattered data across many sources, and transforms raw data into more usable insights for traders, investors, and content creators.',
    features: [
      'Real-time market data (crypto, forex, technical indicators)',
      'Integrated news and trend monitoring',
      'Content discovery and trend identification tools',
      'Automated scraping, scheduling, and diagnostics monitoring'
    ],
    thumbnailUrl: '/images/projects/data-pulse-thumb.webp',
    heroImageUrl: '/images/projects/data-pulse-hero.webp',
    ctaText: 'Monitor Markets',
    ctaLink: 'https://datapulse.pages.dev',
    tags: ['Market Intelligence', 'Real-time Data', 'Trading', 'Analytics'],
    launchNumber: 5,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'n2nd',
    title: 'N2ND',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Global and Indonesia real-time intelligence dashboard with AI-powered data querying capabilities.',
    longDescription: 'N2ND by Xolvon.ai is an all-in-one intelligence dashboard providing real-time market data (BTC, IHSG, USD/IDR), live media streaming, crypto & forex tracking, custom news with AI insights, trending topics, course material visualization, and data from BPS, BI, OJK, IMF, World Bank. Fully customizable, allowing users to build their own dashboard and data pipeline while querying all data directly with AI for instant insights and decisions.',
    features: [
      'Real-time global and Indonesia market tracking',
      'AI-powered data querying for instant insights',
      'Fully customizable dashboard builder',
      'Integration with BPS, BI, OJK, IMF, World Bank data sources'
    ],
    thumbnailUrl: '/images/projects/n2nd-thumb.webp',
    heroImageUrl: '/images/projects/n2nd-hero.webp',
    ctaText: 'Build Your Dashboard',
    ctaLink: 'https://n2nd.pages.dev',
    tags: ['Intelligence Dashboard', 'AI', 'Data Visualization', 'Real-time'],
    launchNumber: 6,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'vixual',
    title: 'Vixual',
    category: ProjectCategory.CONTENT_AUTOMATION,
    shortDescription: 'AI-powered video editor with auto-cut, keyword-based B-roll, and ultra-fast transcription.',
    longDescription: 'Vixual revolutionizes social media content creation, making it 3x faster with intelligent AI. Features include Auto-Cut Dead Air & Freeze to instantly eliminate silence and downtime, Popup Images Based on Keywords that automatically triggers relevant Pexels AI B-roll visuals, and Groq Whisper Super Fast Transcription providing transcripts in seconds. Results show +47% Watch Time keeping audience engagement longer.',
    features: [
      'Auto-Cut Dead Air & Freeze for instant editing',
      'Keyword-based popup images with Pexels AI B-roll',
      'Groq Whisper ultra-fast transcription engine',
      'Optimized for TikTok, Reels, and Shorts with +47% watch time'
    ],
    thumbnailUrl: '/images/projects/vixual-thumb.webp',
    heroImageUrl: '/images/projects/vixual-hero.webp',
    ctaText: 'Try Vixual',
    ctaLink: 'https://vixual.pages.dev',
    tags: ['Video Editing', 'AI', 'Content Creation', 'Automation'],
    launchNumber: 9,
    status: ProjectStatus.LAUNCHED
  },
  {
    id: 'xfarming',
    title: 'XFarming',
    category: ProjectCategory.CONTENT_AUTOMATION,
    shortDescription: 'Content automation engine producing hero videos, trendline animations, and bulk carousels at scale.',
    longDescription: 'XFarming is a content automation engine from Xolvon.ai designed to produce quality content at scale. In the attention economy era, consistency is key. XFarming transforms creative processes from manual to 100% automated, creating Hero Video narratives, Trendline Animation for financial education, and Bulk Carousel automated news. Focus on strategy while AI produces the results.',
    features: [
      'Hero Video narrative creation with AI automation',
      'Trendline Animation for financial education content',
      'Bulk Carousel automated news generation',
      '100% automated content production at scale'
    ],
    thumbnailUrl: '/images/projects/xfarming-thumb.webp',
    heroImageUrl: '/images/projects/xfarming-hero.webp',
    ctaText: 'Automate Content',
    ctaLink: 'https://xfarm-ehd.pages.dev',
    tags: ['Content Automation', 'AI', 'Video Generation', 'Marketing'],
    launchNumber: 17,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'umkm-boost',
    title: 'UMKM Boost',
    category: ProjectCategory.UMKM_EMPOWERMENT,
    shortDescription: 'UMKM empowerment platform with website creation, SEO, and competitor analysis services.',
    longDescription: 'UMKM Boost empowers small and medium enterprises through data and proven strategies. Based on in-depth analysis of 88 real problems faced by business owners, it provides mandatory modules and service packages from website creation, Google My Business SEO, to competitor data analysis designed for effectiveness and repeatable business growth. Results-driven approach, not assumptions, strengthening the pillars of prosperous society.',
    features: [
      'Analysis of 88 real UMKM problems and solutions',
      'Website creation and development services',
      'Google My Business SEO optimization',
      'Competitor data analysis for strategic growth'
    ],
    thumbnailUrl: '/images/projects/umkm-boost-thumb.webp',
    heroImageUrl: '/images/projects/umkm-boost-hero.webp',
    ctaText: 'Boost Your Business',
    ctaLink: 'https://umkmboost.pages.dev',
    tags: ['UMKM', 'Business Development', 'SEO', 'Digital Marketing'],
    launchNumber: 18,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'selangkah-mulai',
    title: 'Selangkah Mulai',
    category: ProjectCategory.AI_LEARNING,
    shortDescription: 'IT awareness project helping students understand real-world tech through basic Web, ML, AI projects.',
    longDescription: 'Selangkah Mulai is the first Alpha Project from @projectxolvon focusing on building awareness about IT readiness and overview through basic Web, ML, AI, and Data Science projects. These projects are not intended as final products, but as initial spaces for students to understand how IT projects work in the real world, from thinking processes, workflows, to industry expectations, providing realistic perspectives before stepping further into college, work, and technology contribution.',
    features: [
      'Basic Web, ML, AI, and Data Science project experiences',
      'Real-world IT project workflow and thinking processes',
      'Industry expectation awareness for students',
      'Realistic college and career preparation guidance'
    ],
    thumbnailUrl: '/images/projects/selangkah-mulai-thumb.webp',
    heroImageUrl: '/images/projects/selangkah-mulai-hero.webp',
    ctaText: 'Start Your Journey',
    ctaLink: 'https://selangkahmulai.pages.dev',
    tags: ['Education', 'IT Awareness', 'Career Prep', 'Student Development'],
    launchNumber: 1,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'attention-alert',
    title: 'Attention Alert',
    category: ProjectCategory.CONSUMER_ANALYSIS,
    shortDescription: 'Data-driven attention monitoring system tracking consumer behavior and market signals.',
    longDescription: 'Attention Alert is a data-driven attention monitoring system that tracks consumer behavior patterns and market signals in real-time. The platform provides early warning indicators for shifts in consumer attention, helping businesses and creators anticipate market movements before they become obvious. Built on Human-AI collaboration, it processes multiple data streams to identify emerging trends and attention patterns across Indonesian consumer segments.',
    features: [
      'Real-time consumer attention tracking and monitoring',
      'Early warning indicators for market shifts',
      'Multi-stream data processing for trend identification',
      'Indonesian consumer segment pattern analysis'
    ],
    thumbnailUrl: '/images/projects/attention-alert-thumb.webp',
    heroImageUrl: '/images/projects/attention-alert-hero.webp',
    ctaText: 'Monitor Attention',
    ctaLink: 'https://attentionalert.pages.dev',
    tags: ['Consumer Analysis', 'Market Intelligence', 'Data Analytics', 'Early Warning'],
    launchNumber: 13,
    status: ProjectStatus.PRE_MVP
  },
  {
    id: 'defense-narrative',
    title: 'Defense Narrative System',
    category: ProjectCategory.CONSUMER_ANALYSIS,
    shortDescription: 'Consumer sentiment analysis system examining narrative impact on market perceptions.',
    longDescription: 'Defense Narrative System analyzes consumer sentiment by examining how narratives and stories impact market perceptions and decision-making. The platform tracks narrative spread across media channels, measures sentiment intensity, and identifies potential reputation risks before they escalate. Using advanced NLP and sentiment analysis, it provides actionable insights for brands and organizations to protect their narrative positioning in the market.',
    features: [
      'Narrative spread tracking across multiple media channels',
      'Sentiment intensity measurement and analysis',
      'Reputation risk identification and early detection',
      'Advanced NLP for narrative positioning insights'
    ],
    thumbnailUrl: '/images/projects/defense-narrative-thumb.webp',
    heroImageUrl: '/images/projects/defense-narrative-hero.webp',
    ctaText: 'Protect Your Narrative',
    ctaLink: 'https://defensenarratives.pages.dev',
    tags: ['Sentiment Analysis', 'NLP', 'Brand Protection', 'Market Intelligence'],
    launchNumber: 14,
    status: ProjectStatus.PRE_MVP
  },
  {
    id: 'cyber-reputation-defense',
    title: 'Cyber Reputation Defense',
    category: ProjectCategory.CYBER_DEFENSE,
    shortDescription: 'Comprehensive cyber defense system protecting digital reputation and online brand presence.',
    longDescription: 'Cyber Reputation Defense is a comprehensive cyber defense system designed to protect digital reputation and online brand presence. The platform monitors potential threats across digital channels, identifies malicious activities targeting brand reputation, and provides rapid response mechanisms to mitigate damage. Combining cybersecurity expertise with reputation management, it offers proactive defense strategies for organizations facing digital threats.',
    features: [
      'Digital threat monitoring across multiple channels',
      'Malicious activity detection and identification',
      'Rapid response mechanisms for damage mitigation',
      'Proactive defense strategies for reputation protection'
    ],
    thumbnailUrl: '/images/projects/cyber-reputation-thumb.webp',
    heroImageUrl: '/images/projects/cyber-reputation-hero.webp',
    ctaText: 'Secure Your Reputation',
    ctaLink: 'https://cyberdefense.pages.dev',
    tags: ['Cyber Security', 'Reputation Management', 'Threat Detection', 'Brand Protection'],
    launchNumber: 15,
    status: ProjectStatus.PRE_MVP
  },
  {
    id: 'xolvon-market',
    title: 'Xolvon Market',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Integrated marketplace intelligence platform for data-driven business decision making.',
    longDescription: 'Xolvon Market is an integrated marketplace intelligence platform providing comprehensive data-driven insights for business decision making. The platform aggregates market data from multiple sources, processes it through AI-powered analytics, and delivers actionable intelligence for strategic planning. It serves as the central hub for understanding market dynamics, competitive positioning, and emerging opportunities across various industry segments.',
    features: [
      'Multi-source market data aggregation and processing',
      'AI-powered analytics for strategic insights',
      'Competitive positioning and benchmarking tools',
      'Emerging opportunity identification across industries'
    ],
    thumbnailUrl: '/images/projects/xolvon-market-thumb.webp',
    heroImageUrl: '/images/projects/xolvon-market-hero.webp',
    ctaText: 'Explore Market Intelligence',
    ctaLink: 'https://xolvonmarket.pages.dev',
    tags: ['Market Intelligence', 'Business Analytics', 'Competitive Analysis', 'AI'],
    launchNumber: 7,
    status: ProjectStatus.ALPHA
  },
  {
    id: 'human-ai-insight',
    title: 'Human-AI Attention-Data Insight',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Advanced analytics platform combining human expertise with AI for attention-driven data insights.',
    longDescription: 'Human-AI Attention-Data Insight is an advanced analytics platform that combines human expertise with artificial intelligence to generate attention-driven data insights. The platform analyzes how attention flows through data ecosystems, identifies key attention drivers, and provides predictive models for attention allocation. It bridges the gap between raw data and actionable insights through Human-AI collaboration methodologies.',
    features: [
      'Attention flow analysis through data ecosystems',
      'Key attention driver identification and tracking',
      'Predictive models for attention allocation',
      'Human-AI collaboration methodology for insight generation'
    ],
    thumbnailUrl: '/images/projects/human-ai-insight-thumb.webp',
    heroImageUrl: '/images/projects/human-ai-insight-hero.webp',
    ctaText: 'Discover Insights',
    ctaLink: 'https://humanaiinsight.pages.dev',
    tags: ['Data Analytics', 'AI', 'Attention Economy', 'Predictive Modeling'],
    launchNumber: 3,
    status: ProjectStatus.ALPHA
  }
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

/**
 * Get projects by launch number range
 */
export const getProjectsByLaunchRange = (min: number, max: number): Project[] => {
  return projects.filter(project => project.launchNumber >= min && project.launchNumber <= max);
};

/**
 * Search projects by keyword (searches in title, shortDescription, longDescription, and tags)
 */
export const searchProjects = (keyword: string): Project[] => {
  const lowerKeyword = keyword.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerKeyword) ||
    project.shortDescription.toLowerCase().includes(lowerKeyword) ||
    project.longDescription.toLowerCase().includes(lowerKeyword) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};
