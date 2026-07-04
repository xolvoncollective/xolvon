# Implementation Plan: Xolvon Comprehensive Marketplace Website

## Overview

This implementation plan converts the design document into actionable coding tasks for building a modern React-based marketplace website showcasing 18 ProjectXolvon projects. The website will be built using React 19, TypeScript, Vite, TailwindCSS 4, and Motion for animations. The implementation follows a component-based architecture with responsive-first design, static data models, and client-side routing.

**Technology Stack**: React 19 + TypeScript + Vite + TailwindCSS 4 + React Router DOM + Motion + Lucide React

**Deployment**: Static site hosting (Cloudflare Pages, Vercel, or Netlify)

## Tasks

- [x] 1. Set up project foundation and development environment
  - Initialize Vite + React + TypeScript project with `npm create vite@latest`
  - Install core dependencies: react, react-dom, react-router-dom, motion, lucide-react
  - Install dev dependencies: @vitejs/plugin-react, typescript, tailwindcss, @tailwindcss/vite
  - Configure TailwindCSS 4 with custom theme (purple, blue, black color palette)
  - Set up project directory structure: components/, pages/, data/, contexts/, hooks/, types/, utils/, styles/
  - Configure Poppins font loading from Google Fonts with weights 400, 500, 600, 700, 800, 900
  - Create design token system in `src/styles/index.css` with CSS variables for colors, typography, spacing
  - Set up Vite configuration for optimized builds and code splitting
  - _Requirements: 19.1-19.7 (Poppins font), 20.1-20.8 (color scheme), 10.1-10.11 (brand identity)_

- [ ] 2. Create TypeScript data models and static data files
  - [ ] 2.1 Define TypeScript interfaces and types
    - Create `src/types/project.ts` with Project, ProjectCategory, ProjectStatus interfaces
    - Create `src/types/team.ts` with TeamMember interface
    - Create `src/types/capability.ts` with Capability interface
    - Create `src/types/pillar.ts` with Pillar interface
    - Create `src/types/metric.ts` with Metric interface
    - Export all types from `src/types/index.ts`
    - _Requirements: Design document data models section_

  - [ ] 2.2 Populate project data for 18 projects
    - Create `src/data/projects.ts` with array of 18 Project objects
    - Include all required fields: id, title, category, shortDescription, longDescription, features, thumbnailUrl, heroImageUrl, ctaText, ctaLink, tags, launchNumber, status
    - Ensure at least these projects: XFarming, KontenMargin, Xclip, AttentionBoost, CafeMargin, and 13 others
    - Short descriptions between 50-150 characters, long descriptions 200+ characters
    - At least 3 features per project
    - _Requirements: 16.7 (project list), 17.1-17.7 (project detail requirements)_

  - [ ] 2.3 Populate team member data
    - Create `src/data/team.ts` with array of 6 TeamMember objects
    - Include members: M. Farsya Hasibuan, Zaidan Daffa Abdillah, Varisha Aira Dalimunthe, Mahathir Abitah Batubara, I Gusti Ayu Laksmi Dewi, Khalifa Ghizzan Moreno
    - Include Instagram-sourced bios with role, expertise, university, and major
    - Bio text between 50-300 characters per member
    - _Requirements: 6.1-6.8 (team section), 18.1-18.7 (Instagram bio integration)_

  - [x] 2.4 Create capabilities, pillars, and metrics data
    - Create `src/data/capabilities.ts` with 6 Capability objects (Attention Alert, Real-Time Sentiment Analysis, Cyber Defense, Xolvon Market, Human-AI Attention-Data Insight, Attention Boost)
    - Create `src/data/pillars.ts` with 3 Pillar objects (Impact-Driven Automation, Human-AI Collaboration, Scalable B2B Solutions)
    - Create `src/data/metrics.ts` with 6 Metric objects (45+ field experiments, 120 playbooks, 1.4k+ automation hours/mo, 2.7M/mo signals, 420+ data assets, ~38s avg response)
    - Each capability and pillar description between 50-300 characters (capabilities) or 100+ characters (pillars)
    - _Requirements: 4.1-4.9 (capabilities), 5.1-5.5 (pillars), 3.1-3.10 (metrics)_

- [ ] 3. Implement routing and navigation infrastructure
  - [ ] 3.1 Set up React Router configuration
    - Create `src/App.tsx` with BrowserRouter, Routes, and Route components
    - Define routes: "/" (HomePage), "/project/:projectId" (ProjectDetailPage), "*" (NotFoundPage)
    - Implement route-based code splitting using React.lazy and Suspense
    - Create loading spinner component for Suspense fallback
    - _Requirements: Design routing section, navigation flow requirements_

  - [ ] 3.2 Create NavigationContext and custom hooks
    - Create `src/contexts/NavigationContext.tsx` with state for isMenuOpen and activeSection
    - Implement toggleMenu, closeMenu, setActiveSection functions
    - Create `src/hooks/useNavigation.ts` custom hook
    - Create `src/hooks/useScrollSpy.ts` for section detection using IntersectionObserver
    - _Requirements: 2.1-2.8 (navigation), state management section_

  - [ ] 3.3 Create ProjectDataContext
    - Create `src/contexts/ProjectDataContext.tsx` importing projects from data file
    - Implement getProjectById and projectsByCategory helper functions
    - Create `src/hooks/useProjects.ts` custom hook
    - Wrap App with NavigationProvider and ProjectDataProvider
    - _Requirements: State management section, data integration patterns_

- [ ] 4. Build common reusable components
  - [ ] 4.1 Create Button component
    - Create `src/components/common/Button.tsx` with variant (primary, secondary, outline) and size (sm, md, lg) props
    - Apply brand colors from palette based on variant
    - Implement hover effects with 200ms transition
    - Ensure minimum 44×44px touch target size
    - Use Poppins font weight 600-700 for button text
    - Support keyboard navigation with focus states
    - _Requirements: 8.1-8.7 (CTA buttons), 15.4 (focus indicators), 9.8 (touch targets)_

  - [ ] 4.2 Create Card component
    - Create `src/components/common/Card.tsx` with flexible container for content
    - Support hover effects (shadow, border, scale)
    - Ensure responsive behavior and proper spacing
    - Apply consistent border radius and padding
    - _Requirements: Component architecture, design patterns_

  - [ ] 4.3 Create Heading, Section, and Image components
    - Create `src/components/common/Heading.tsx` with level prop (1-6) and responsive font sizes
    - Create `src/components/common/Section.tsx` wrapper with padding and max-width constraints
    - Create `src/components/common/Image.tsx` with error handling, lazy loading, alt text support
    - Implement image error handler to display placeholder on load failure
    - _Requirements: 15.1-15.2 (alt text), 11.3 (lazy loading), 11.8 (image error handling)_

- [ ] 5. Implement layout components
  - [ ] 5.1 Create NavigationBar component
    - Create `src/components/layout/NavigationBar.tsx` with responsive navigation
    - Display Xolvon logo/text on left side
    - Render navigation links: Home, Projects, Team, Contact
    - Implement hamburger menu toggle for mobile (<768px)
    - Apply fixed positioning at viewport top
    - Highlight active section based on scroll position
    - Implement smooth scroll to sections on link click
    - Close mobile menu after navigation
    - _Requirements: 2.1-2.8 (navigation), 9.9-9.10 (responsive hamburger)_

  - [ ] 5.2 Create Footer component
    - Create `src/components/layout/Footer.tsx` with copyright, links, and social media
    - Display copyright text with organization name and current year
    - Include links: Privacy Policy, Terms of Service, Contact Us
    - Add Instagram link with href="https://www.instagram.com/projectxolvon", target="_blank", rel="noopener noreferrer"
    - Display Instagram icon (24-48px) using Lucide React or SVG
    - Apply brand colors and typography
    - Ensure keyboard navigation and screen reader accessibility
    - _Requirements: 7.1-7.7 (social media), 12.1-12.8 (footer links)_

  - [ ] 5.3 Create ErrorBoundary component
    - Create `src/components/layout/ErrorBoundary.tsx` using React Error Boundary pattern
    - Display user-friendly error messages with "Return to Home" button
    - Log errors to console for debugging
    - Include fallback UI for component-level errors
    - _Requirements: Error handling section, navigation errors_

- [ ] 6. Build homepage feature components
  - [ ] 6.1 Create HeroSection component
    - Create `src/components/features/HeroSection.tsx` with headline, tagline, description, and CTA
    - Display h1 headline: "67 Alpha-stage Digital Production Lab" or "Human-AI End-to-End Attention Systems"
    - Include secondary tagline describing marketplace (e.g., "Browse Our Human-AI Solutions")
    - Render primary CTA button with text like "Explore Projects" or "View Marketplace"
    - Implement CTA click handler to scroll to marketplace section
    - Occupy 80% viewport height on desktop (≥1024px), 60% on mobile (<1024px)
    - Render within 3 seconds or display loading fallback message
    - _Requirements: 1.1-1.9 (hero section), 11.1 (performance)_

  - [ ] 6.2 Create MetricsDisplay component
    - Create `src/components/features/MetricsDisplay.tsx` displaying 6 achievement metrics
    - Display metrics: "45+ field experiments shipped", "120 reusable playbooks", "1.4k+ automation hours/mo", "2.7M/mo real-time signals", "420+ data assets", "~38s avg response"
    - Implement IntersectionObserver to detect when component enters viewport
    - Animate numeric values from 0 to target over 2 seconds using Motion
    - Continue animation if user scrolls away
    - Display final values without re-animation on scroll back
    - Render all 6 metrics simultaneously in grid layout
    - _Requirements: 3.1-3.10 (metrics), animation requirements_

  - [ ] 6.3 Create ProjectCard component
    - Create `src/components/features/ProjectCard.tsx` displaying project title, thumbnail, and short description
    - Accept project prop and onClick handler
    - Display thumbnail image with error handling and alt text
    - Show short description (50-150 characters)
    - Implement hover effects: shadow increase, border highlight, or scale within 300ms
    - Navigate to project detail page on click
    - Maintain responsive image aspect ratio
    - Ensure keyboard accessibility with tab navigation
    - _Requirements: 16.2 (project card), 16.8 (hover effects), 15.4 (keyboard nav)_

  - [ ] 6.4 Create MarketplaceGrid component
    - Create `src/components/features/MarketplaceGrid.tsx` displaying grid of 18 project cards
    - Accept projects array and onProjectClick handler props
    - Implement responsive grid layout using TailwindCSS: 3 columns (≥1024px), 2 columns (768-1023px), 1 column (<768px)
    - Map over projects and render ProjectCard for each
    - Maintain consistent spacing and alignment
    - _Requirements: 16.1-16.7 (marketplace homepage), 9.1-9.5 (responsive grid)_

  - [ ] 6.5 Create CapabilityCard and CapabilitiesModule components
    - Create `src/components/features/CapabilityCard.tsx` displaying capability icon, title, and description
    - Display icon from Lucide React (32-128px), title, and description (50-300 characters)
    - Implement hover effects: background color change, border style, shadow, or scale within 300ms
    - Ensure keyboard focusable state with visible focus indicator
    - Include alt text for capability icon
    - Create `src/components/features/CapabilitiesModule.tsx` displaying 6 capability cards in grid
    - Apply responsive grid: 2-3 columns (≥1024px), 2 columns (768-1023px), 1 column (<768px)
    - _Requirements: 4.1-4.9 (capabilities module)_

  - [ ] 6.6 Create PillarCard and ThreePillarsSection components
    - Create `src/components/features/PillarCard.tsx` displaying pillar icon, title, and description
    - Display title and description (100+ characters) for each pillar
    - Create `src/components/features/ThreePillarsSection.tsx` with 3 pillars: Impact-Driven Automation, Human-AI Collaboration, Scalable B2B Solutions
    - Apply visual distinction: different background color, visible border, or 40px padding
    - Implement horizontal layout for desktop (>768px), vertical stack for mobile (≤768px)
    - _Requirements: 5.1-5.5 (three pillars)_

  - [ ] 6.7 Create AboutSection component
    - Create `src/components/features/AboutSection.tsx` with heading "About"
    - Explain Project Xolvon's mission covering origin, goals, and Human-AI collaboration approach
    - Describe Human-AI Field Systems with definition and explanation
    - Explain how Xolvon addresses social problems with at least one use case
    - Reference "67 Alpha-stage Digital Production Lab" positioning
    - Include image or icon representing Human-AI collaboration
    - _Requirements: 13.1-13.6 (about section)_

  - [ ] 6.8 Create TargetAudiencesSection component
    - Create `src/components/features/TargetAudiencesSection.tsx` with heading like "For Brands", "For Creators", "For Agencies"
    - Describe at least 2 audience types: brands, creators, or agencies
    - Include 100+ characters explaining 2+ use cases, benefits, or features per audience
    - Implement hover/click visual change within 300ms (background, border, content expansion)
    - Mention at least 4 distinct platform features across all audience descriptions
    - _Requirements: 14.1-14.4 (target audiences)_

  - [ ] 6.9 Create TeamMemberCard and TeamSection components
    - Create `src/components/features/TeamMemberCard.tsx` displaying name, role, profile image, and bio
    - Display bio text (50-300 characters) from Instagram
    - Show placeholder image or initials if image fails to load
    - Display "Bio not available" if bio is missing
    - Ensure responsive typography and proper spacing
    - Create `src/components/features/TeamSection.tsx` with 6 team member cards
    - Apply responsive grid: 2-3 columns (≥1024px), 2 columns (768-1023px), 1 column (<768px)
    - _Requirements: 6.1-6.8 (team section), 18.1-18.7 (Instagram bios)_

- [ ] 7. Checkpoint - Verify component implementations
  - Ensure all components render correctly with proper props
  - Test responsive layouts at mobile (375px), tablet (768px), and desktop (1280px) viewports
  - Verify brand colors and Poppins font applied consistently
  - Test hover effects and transitions work smoothly
  - Ensure all images have alt text and error handling
  - Ask the user if questions arise.

- [ ] 8. Assemble HomePage
  - [ ] 8.1 Create HomePage component
    - Create `src/pages/HomePage.tsx` importing all feature components
    - Render components in order: NavigationBar, HeroSection, MetricsDisplay, MarketplaceGrid, CapabilitiesModule, ThreePillarsSection, AboutSection, TargetAudiencesSection, TeamSection, Footer
    - Assign section IDs for scroll navigation: #hero, #projects, #capabilities, #pillars, #about, #audiences, #team
    - Implement scroll spy to track active section
    - Pass project data from ProjectDataContext to MarketplaceGrid
    - Implement project card click handler to navigate to detail page
    - _Requirements: All homepage requirements, component hierarchy_

  - [ ] 8.2 Implement smooth scrolling and navigation
    - Create `src/utils/scrollTo.ts` utility function with smooth scroll behavior
    - Configure navigation links to scroll to sections with 300-800ms animation
    - Ensure sections occupy >50% viewport height for active highlighting
    - Handle scroll position tracking with IntersectionObserver
    - _Requirements: 2.4 (smooth scroll), 2.7 (active section highlight)_

- [ ] 9. Build ProjectDetailPage
  - [ ] 9.1 Create ProjectDetailPage component
    - Create `src/pages/ProjectDetailPage.tsx` using useParams to get projectId from route
    - Fetch project data using getProjectById from ProjectDataContext
    - Display NotFoundPage if project doesn't exist
    - Render NavigationBar and Footer
    - _Requirements: 17.1 (unique detail page), routing requirements_

  - [ ] 9.2 Implement project detail sections
    - Display project name as h1 heading
    - Create project hero section with banner/hero image
    - Display detailed description (200+ characters) in dedicated section
    - Show at least 3 key features in list or grid format
    - Include CTA button with project's ctaText linking to ctaLink (external link or demo)
    - Implement back button with "← Back to Projects" text navigating to homepage
    - _Requirements: 17.2-17.7 (project detail page requirements)_

  - [ ] 9.3 Add project metadata and tags
    - Display project category badge or tag
    - Show project status (Alpha, Pre-MVP, Launched)
    - Display technology tags in chip/badge format
    - Include launch number information
    - Apply consistent styling with brand colors
    - _Requirements: Project data model, design patterns_

- [ ] 10. Create NotFoundPage
  - Create `src/pages/NotFoundPage.tsx` for 404 errors
  - Display user-friendly "Page Not Found" message
  - Include "Return to Home" button linking to "/"
  - Render NavigationBar and Footer for consistent layout
  - _Requirements: Error handling, navigation errors section_

- [ ] 11. Implement responsive design refinements
  - [ ] 11.1 Verify mobile layout (<768px)
    - Test hamburger menu functionality (toggle, close on link click)
    - Ensure all grids display as single column stacks
    - Verify Hero Section occupies 60% viewport height
    - Check font sizes scaled appropriately (h1: 32px)
    - Confirm touch targets minimum 44×44px
    - Test images display full width with optimized resolution
    - _Requirements: 9.1 (mobile layout), responsive design strategy_

  - [ ] 11.2 Verify tablet layout (768-1023px)
    - Test navigation links visible horizontally
    - Ensure grids display as 2 columns
    - Verify Hero Section occupies 70% viewport height
    - Check medium font scale (h1: 40px)
    - Test increased spacing and padding
    - _Requirements: 9.2 (tablet layout), responsive design strategy_

  - [ ] 11.3 Verify desktop layout (≥1024px)
    - Test full horizontal navigation menu with logo
    - Ensure marketplace grid displays 3 columns
    - Verify Hero Section occupies 80% viewport height
    - Check full font scale (h1: 48px)
    - Test hover effects enabled for cards and buttons
    - Verify container max-width 1440px
    - _Requirements: 9.3-9.5 (desktop layout), responsive design strategy_

- [ ] 12. Implement accessibility features
  - [ ] 12.1 Add semantic HTML structure
    - Use proper heading hierarchy (h1-h6) without skipping levels
    - Implement landmark regions: header, nav, main, footer with appropriate roles
    - Ensure each page has exactly one h1 element
    - Structure sections with proper article/section tags
    - _Requirements: 15.8 (heading hierarchy), 15.9 (landmark regions)_

  - [ ] 12.2 Implement keyboard navigation
    - Test Tab key navigation through all interactive elements
    - Verify focus indicators visible for all focusable elements
    - Implement Escape key to close hamburger menu
    - Ensure tab order follows visual reading flow (left-to-right, top-to-bottom)
    - Test keyboard users can move focus away from any element
    - _Requirements: 15.4-15.6 (keyboard navigation)_

  - [ ] 12.3 Add ARIA attributes
    - Add aria-label to hamburger menu button with aria-expanded state
    - Include ARIA labels for custom components (cards, modals, dropdowns)
    - Add aria-labelledby to sections referencing heading IDs
    - Ensure screen readers announce interactive elements with role, state, and name
    - _Requirements: 15.7 (ARIA labels), 15.10 (screen reader announcements)_

  - [ ] 12.4 Ensure alt text and color contrast
    - Add descriptive alt text for all non-decorative images
    - Use empty alt="" for decorative images
    - Verify color contrast ratios: 4.5:1 for normal text, 3:1 for large text
    - Test color combinations meet WCAG AA standards
    - Test with color blindness simulators
    - _Requirements: 15.1-15.3 (alt text and contrast), 20.8 (contrast requirements)_

  - [ ] 12.5 Implement text scaling support
    - Test browser zoom to 200%
    - Verify no horizontal scrolling at 1280px width
    - Check no content overlap or clipping at increased zoom
    - Ensure all content remains readable and accessible
    - _Requirements: 15.11 (text scaling)_

- [ ] 13. Optimize performance
  - [ ] 13.1 Implement image optimization
    - Convert images to WebP format with PNG/JPEG fallbacks
    - Create responsive image sizes using srcSet (400w, 800w, 1200w)
    - Apply lazy loading to below-fold images using loading="lazy"
    - Ensure image file sizes: max 500KB for photos, max 100KB for icons/logos
    - Specify width and height attributes to prevent CLS
    - _Requirements: 11.3-11.5 (image optimization), 11.2 (layout shift prevention)_

  - [ ] 13.2 Configure code splitting and bundling
    - Implement route-based code splitting with React.lazy
    - Configure manual chunks in vite.config.ts: react-vendor, ui-vendor
    - Optimize bundle sizes with tree-shaking
    - Set up production build with minification
    - _Requirements: Performance optimization section, code splitting strategy_

  - [ ] 13.3 Optimize font loading
    - Add preconnect links for Google Fonts in index.html
    - Use font-display: swap for Poppins font
    - Configure fallback font stack: Poppins, system-ui, sans-serif
    - _Requirements: 19.3 (font fallback), performance optimization_

- [ ] 14. Add animations and transitions
  - [ ] 14.1 Implement scroll animations
    - Add fade-in animations for sections entering viewport using Motion
    - Implement stagger animations for grid items
    - Add smooth transitions for hover effects (200-300ms)
    - Respect prefers-reduced-motion for accessibility
    - _Requirements: Animation requirements, Motion integration_

  - [ ] 14.2 Add navigation transitions
    - Implement smooth scroll behavior for anchor links (300-800ms)
    - Add slide-in animation for mobile menu
    - Include fade transitions for page navigation
    - Add loading spinner with fade animation
    - _Requirements: 2.4 (smooth scroll), navigation flow_

- [ ] 15. Checkpoint - Test complete user journeys
  - Test Discovery Journey: Homepage load → Hero section → Scroll to marketplace → Browse 18 cards
  - Test Exploration Journey: Click project card → Navigate to detail page → Review features → Click CTA
  - Test Navigation: Use navbar to jump between sections → Test hamburger menu on mobile
  - Test Responsive: Resize browser from 375px → 768px → 1280px and verify layouts
  - Test Instagram link opens in new tab with correct URL
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. Prepare production assets
  - [ ] 16.1 Gather and optimize project images
    - Collect 18 project thumbnail images (for cards)
    - Collect 18 project hero images (for detail pages)
    - Optimize all images: compress, resize, convert to WebP
    - Place images in public/images/projects/ directory
    - Create placeholder image for error states
    - _Requirements: 11.4-11.5 (image optimization), project data requirements_

  - [ ] 16.2 Gather and prepare team photos
    - Collect 6 team member profile photos
    - Optimize photos: square crop, consistent size, WebP format
    - Place images in public/images/team/ directory
    - Create fallback placeholder with initials
    - _Requirements: 6.4 (image fallback), team section requirements_

  - [ ] 16.3 Create icons and logo assets
    - Create or source Xolvon logo in SVG format
    - Prepare capability icons using Lucide React icon names
    - Create favicon.ico and related app icons
    - Place logo in public/images/ directory
    - _Requirements: 2.8 (logo display), 10.6-10.7 (logo in nav and footer)_

- [ ] 17. Configure deployment
  - [ ] 17.1 Set up build configuration
    - Configure vite.config.ts for production optimizations
    - Set up environment variables if needed (.env.example)
    - Configure base URL and public path
    - Test production build locally with `npm run build` and `npm run preview`
    - _Requirements: Deployment configuration section_

  - [ ] 17.2 Deploy to hosting platform
    - Choose hosting platform: Cloudflare Pages, Vercel, or Netlify
    - Configure build settings: Build command: `npm run build`, Output directory: `dist`
    - Set up custom domain configuration if available
    - Configure redirects for client-side routing (/* → /index.html)
    - Verify HTTPS enabled by default
    - _Requirements: Deployment configuration, hosting requirements_

  - [ ] 17.3 Set up CI/CD pipeline (optional)
    - Create GitHub Actions workflow for automated deployment
    - Configure automatic builds on push to main branch
    - Add build and test steps to CI pipeline
    - Set up environment secrets for deployment tokens
    - _Requirements: CI/CD section, deployment automation_

- [ ] 18. Testing and quality assurance
  - [ ]* 18.1 Write unit tests for components
    - Set up Vitest and React Testing Library
    - Write tests for Button component (variants, sizes, onClick)
    - Write tests for ProjectCard (rendering, click handler, image error)
    - Write tests for NavigationBar (menu toggle, link clicks)
    - Write tests for MetricsDisplay (animation trigger)
    - Write tests for custom hooks (useNavigation, useProjects, useScrollSpy)
    - Aim for ≥70% component logic coverage
    - _Requirements: Testing strategy, unit testing section_

  - [ ]* 18.2 Write integration tests
    - Set up Playwright for end-to-end testing
    - Write test for Discovery Journey (load homepage → verify sections → browse cards)
    - Write test for Navigation Flow (click card → detail page → back button → homepage)
    - Write test for Responsive Behavior (test at 375px, 768px, 1280px viewports)
    - Write test for hamburger menu toggle on mobile
    - Write test for Instagram link opens in new tab
    - _Requirements: Integration testing section, test scenarios_

  - [ ]* 18.3 Perform accessibility testing
    - Install axe DevTools browser extension
    - Run accessibility audit on all pages
    - Test keyboard navigation manually (Tab through all elements)
    - Test with screen reader (NVDA on Windows or VoiceOver on Mac)
    - Verify color contrast with WAVE extension
    - Test text scaling to 200% zoom
    - Fix any issues found and re-test
    - _Requirements: 15.1-15.11 (accessibility requirements), accessibility testing section_

  - [ ]* 18.4 Run performance testing
    - Run Lighthouse audit on homepage and project detail page
    - Target Lighthouse score ≥90 for Performance, Accessibility, Best Practices, SEO
    - Verify First Contentful Paint (FCP) <1.8s, Largest Contentful Paint (LCP) <2.5s
    - Check Hero Section renders within 3 seconds on 5 Mbps connection
    - Verify no Cumulative Layout Shift (CLS) <0.1
    - Test lazy loading works for below-fold images
    - Optimize and fix any performance issues
    - _Requirements: 11.1-11.8 (performance), performance testing section_

  - [ ]* 18.5 Cross-browser and device testing
    - Test on Chrome, Firefox, Safari, Edge (latest 2 versions)
    - Test on mobile devices: iOS Safari, Android Chrome
    - Test on tablet: iPad Safari
    - Verify consistent rendering across browsers
    - Test hover effects work on desktop, touch interactions on mobile
    - Identify and fix any browser-specific issues
    - _Requirements: Browser & device compatibility section_

- [ ] 19. Final polish and documentation
  - [ ] 19.1 Review and refine UI details
    - Review all spacing, padding, margins for consistency
    - Verify typography hierarchy and font sizes
    - Check color application matches brand palette throughout
    - Ensure all hover effects smooth and consistent
    - Polish animations and transitions
    - _Requirements: Brand identity, design consistency_

  - [ ] 19.2 Create project documentation
    - Write comprehensive README.md with project overview, tech stack, setup instructions
    - Document component architecture and file structure
    - Add installation steps: `npm install`, `npm run dev`, `npm run build`
    - Include deployment instructions
    - Document environment variables if any
    - Add license information
    - _Requirements: Project documentation, developer handoff_

  - [ ] 19.3 Prepare launch checklist
    - Verify all 18 project detail pages accessible
    - Confirm all 6 team members displayed with correct information
    - Check all external links work (Instagram, project CTAs)
    - Verify contact information and footer links
    - Test form submissions if contact form implemented
    - Ensure analytics configured if using (optional)
    - Review SEO: meta tags, Open Graph tags, sitemap
    - _Requirements: All requirements, launch readiness_

- [ ] 20. Final checkpoint and handoff
  - Run complete test suite one final time
  - Verify production deployment is live and accessible
  - Confirm all Lighthouse scores meet targets (≥90)
  - Test all user journeys end-to-end on production
  - Verify responsive design works across all breakpoints
  - Ensure accessibility standards met (WCAG AA)
  - Confirm performance metrics within requirements
  - Ask the user if questions arise before considering complete.

## Notes

- Tasks marked with `*` are optional testing tasks that can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- The implementation uses React 19 + TypeScript for type safety and modern patterns
- TailwindCSS 4 provides utility-first responsive design matching requirements
- Motion (Framer Motion) handles all animations and transitions
- Static data approach (no backend) simplifies deployment and reduces complexity
- All 18 projects must be included with complete data (thumbnails, descriptions, features)
- Accessibility compliance (WCAG AA) is built in from the start, not added later
- Performance optimization is integrated throughout (lazy loading, code splitting, image optimization)
- Testing tasks are marked optional but highly recommended for production quality

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.3", "2.4"] },
    { "id": 2, "tasks": ["3.1", "3.2", "3.3", "4.1", "4.2", "4.3"] },
    { "id": 3, "tasks": ["5.1", "5.2", "5.3", "6.1", "6.2", "6.3"] },
    { "id": 4, "tasks": ["6.4", "6.5", "6.6", "6.7", "6.8", "6.9"] },
    { "id": 5, "tasks": ["8.1", "8.2"] },
    { "id": 6, "tasks": ["9.1"] },
    { "id": 7, "tasks": ["9.2", "9.3", "10"] },
    { "id": 8, "tasks": ["11.1", "11.2", "11.3"] },
    { "id": 9, "tasks": ["12.1", "12.2", "12.3", "12.4", "12.5"] },
    { "id": 10, "tasks": ["13.1", "13.2", "13.3", "14.1", "14.2"] },
    { "id": 11, "tasks": ["16.1", "16.2", "16.3"] },
    { "id": 12, "tasks": ["17.1"] },
    { "id": 13, "tasks": ["17.2", "17.3"] },
    { "id": 14, "tasks": ["18.1", "18.2", "18.3", "18.4", "18.5"] },
    { "id": 15, "tasks": ["19.1", "19.2", "19.3"] }
  ]
}
```
