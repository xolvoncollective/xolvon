/**
 * Project-related types and interfaces for Xolvon Comprehensive Website
 */

/**
 * Project categories in the Xolvon ecosystem
 */
export const ProjectCategory = {
  AI_LEARNING: "AI Learning",
  BUSINESS_OPTIMIZATION: "Business Optimization",
  CONTENT_AUTOMATION: "Content Automation",
  DATA_INTELLIGENCE: "Data Intelligence",
  CONSUMER_ANALYSIS: "Consumer Analysis",
  CYBER_DEFENSE: "Cyber Defense",
  UMKM_EMPOWERMENT: "UMKM Empowerment"
} as const;

export type ProjectCategory = typeof ProjectCategory[keyof typeof ProjectCategory];

/**
 * Project development status
 */
export const ProjectStatus = {
  ALPHA: "Alpha",
  PRE_MVP: "Pre-MVP",
  LAUNCHED: "Launched"
} as const;

export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus];

/**
 * Media item for a project (Image or Video)
 */
export interface ProjectMedia {
  url: string;
  type: 'image' | 'video';
}

/**
 * Main project interface representing a Xolvon project
 */
export interface Project {
  /** Kebab-case identifier (e.g., "mulai-ai") */
  id: string;
  
  /** Display name (e.g., "mulai.ai") */
  title: string;
  
  /** Project category */
  category: ProjectCategory;
  
  /** Short description for card display (50-150 characters) */
  shortDescription: string;
  
  /** Long description for detail page (200+ characters) */
  longDescription: string;
  
  /** At least 3 key features */
  features: string[];
  
  /** Array of media files (images/videos) */
  media: ProjectMedia[];
  
  /** CTA button text */
  ctaText: string;
  
  /** External link or demo URL */
  ctaLink: string;
  
  /** Technology tags (e.g., ["AI", "Education", "SaaS"]) */
  tags: string[];
  
  /** Alpha launch order (1-18) */
  launchNumber: number;
  
  /** Current development status */
  status: ProjectStatus;
}
