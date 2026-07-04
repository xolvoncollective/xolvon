/**
 * Team member types and interfaces for Xolvon Comprehensive Website
 */

/**
 * Team member interface with Instagram bio integration
 */
export interface TeamMember {
  /** Unique identifier */
  id: string;
  
  /** Full name */
  name: string;
  
  /** Primary role title */
  role: string;
  
  /** Instagram bio (50-300 characters) */
  bio: string;
  
  /** Expertise area from Instagram */
  expertise: string;
  
  /** University abbreviation */
  university: string;
  
  /** Study major */
  major: string;
  
  /** Profile photo URL */
  profileImageUrl: string;
  
  /** Optional Instagram username */
  instagramHandle?: string;
}
