/**
 * Metric types and interfaces for Xolvon Comprehensive Website
 */

/**
 * Metric interface representing achievement metrics
 */
export interface Metric {
  /** Unique identifier */
  id: string;
  
  /** Display value (e.g., "45+", "1.4k+", "~38s") */
  value: string;
  
  /** Numeric value for animation */
  numericValue: number;
  
  /** Optional unit (e.g., "mo", "s") */
  unit?: string;
  
  /** Description text */
  label: string;
}
