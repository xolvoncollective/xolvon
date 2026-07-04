/**
 * Capability types and interfaces for Xolvon Comprehensive Website
 */

/**
 * Capability interface representing core Xolvon capabilities
 */
export interface Capability {
  /** Unique identifier */
  id: string;
  
  /** Capability title (e.g., "Attention Alert", "Real-Time Sentiment Analysis") */
  title: string;
  
  /** Description (50-300 characters) */
  description: string;
  
  /** Lucide icon name */
  iconName: string;
  
  /** Brand color (purple/blue) */
  color: string;
}
