/**
 * Pillar types and interfaces for Xolvon Comprehensive Website
 */

/**
 * Pillar interface representing the three strategic pillars
 */
export interface Pillar {
  /** Unique identifier */
  id: string;
  
  /** Pillar title (e.g., "Impact-Driven Automation", "Human-AI Collaboration", "Scalable B2B Solutions") */
  title: string;
  
  /** Description (at least 100 characters) */
  description: string;
  
  /** Lucide icon name */
  iconName: string;
}
