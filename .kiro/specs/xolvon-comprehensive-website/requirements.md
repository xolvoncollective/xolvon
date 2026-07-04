# Requirements Document

## Introduction

Website comprehensive untuk Xolvon adalah platform marketplace digital yang menampilkan berbagai project dan produk dari ekosistem Xolvon. Struktur website mengikuti pola marketplace seperti Tokopedia, dimana halaman utama menampilkan project marketplace, dan setiap project dapat diklik untuk melihat detail lengkapnya.

Website ini akan menyajikan:
- **Marketplace homepage**: Menampilkan grid/katalog dari berbagai project Xolvon (XFarming, KontenMargin, Xclip, AttentionBoost, CafeMargin)
- **Project detail pages**: Setiap project memiliki halaman detail dengan deskripsi lengkap, fitur, dan CTA
- **Team information**: Menampilkan 6 anggota tim dengan bio dari Instagram
- **Modern responsive design**: Menggunakan font Poppins dan color scheme ungu, hitam, dan biru dari xolvontesting.web.app

Website ini mencerminkan brand identity Xolvon sebagai "67 Alpha-stage Digital Production Lab" yang fokus pada Human-AI End-to-End Attention Systems.

## Glossary

- **Website**: Platform marketplace digital untuk ekosistem Project Xolvon
- **Marketplace_Homepage**: Halaman utama yang menampilkan katalog/grid dari berbagai project Xolvon
- **Project_Card**: Card/komponen yang menampilkan preview dari satu project dengan thumbnail, judul, dan deskripsi singkat
- **Project_Detail_Page**: Halaman detail yang menampilkan informasi lengkap tentang satu project tertentu
- **Hero_Section**: Bagian utama halaman yang pertama dilihat visitor dengan headline dan CTA
- **Navigation_Bar**: Menu navigasi website yang memungkinkan user berpindah antar section
- **Team_Section**: Section yang menampilkan informasi tentang 6 anggota tim dengan bio dari Instagram
- **CTA_Button**: Call-to-action button untuk mendorong visitor melakukan action
- **Footer**: Bagian bawah website yang berisi links dan social media integration
- **Responsive_Design**: Design yang dapat menyesuaikan tampilan pada berbagai ukuran device
- **Brand_Identity**: Visual identity Xolvon (warna ungu, hitam, biru; font Poppins)
- **Project_Categories**: Kategori dari project (Content Automation, Distribution Funnel, Consumer Analysis, etc.)

## Requirements

### Requirement 1: Hero Section for Marketplace

**User Story:** As a first-time visitor, I want to immediately understand that this is a marketplace for Xolvon projects, so that I can quickly browse available products and services.

#### Acceptance Criteria

1. THE Hero_Section SHALL render the text "67 Alpha-stage Digital Production Lab" or "Human-AI End-to-End Attention Systems" as the primary headline using heading level 1 (h1) markup
2. THE Hero_Section SHALL render a secondary tagline that includes "Project Xolvon" and describes the marketplace nature (such as "Browse Our Human-AI Solutions")
3. THE Hero_Section SHALL include at least one CTA_Button with text such as "Explore Projects", "View Marketplace", or "Get Started"
4. WHEN a user clicks the CTA_Button in the Hero_Section, THE Website SHALL scroll to the Marketplace_Homepage section or navigate to the project catalog
5. WHEN the viewport width is greater than or equal to 1024 pixels, THE Hero_Section SHALL occupy at least 80 percent of the viewport height
6. WHEN the viewport width is less than 1024 pixels, THE Hero_Section SHALL occupy at least 60 percent of the viewport height
7. WHEN a visitor first loads the homepage, THE Website SHALL render the Hero_Section as the topmost content visible in the viewport before any user scrolling within 3 seconds of page load
8. WHEN the Hero_Section fails to render within 3 seconds, THE Website SHALL display an error message or fallback content indicating loading delay
9. THE Hero_Section SHALL include a brief description text explaining Xolvon as "67 Alpha-stage Digital Production Lab" focused on Human-AI systems

### Requirement 2: Responsive Navigation System

**User Story:** As a visitor, I want to navigate between different sections of the website easily, so that I can find specific information quickly.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL include links to major sections: Home, Projects (or Marketplace), Team, and Contact
2. WHEN the viewport width is less than 768 pixels, THE Navigation_Bar SHALL display the hamburger menu icon
3. WHEN the viewport width is less than 768 pixels AND a user taps or clicks the hamburger menu icon, THE Navigation_Bar SHALL toggle the visibility of navigation links
4. WHEN a user clicks on a Navigation_Bar link, THE Website SHALL scroll to the target section with animation duration between 300 and 800 milliseconds OR navigate to the target page
5. WHEN a Navigation_Bar link target does not exist, THE Website SHALL display an error message to the user or handle gracefully with fallback
6. WHILE the user scrolls vertically, THE Navigation_Bar SHALL remain fixed at the top of the viewport
7. WHEN a section occupies more than 50 percent of the viewport height, THE Navigation_Bar SHALL apply a visual distinction to the corresponding link (such as a highlight color, underline, or border)
8. THE Navigation_Bar SHALL display the Xolvon logo or "Project Xolvon" text prominently on the left side

### Requirement 3: Display Achievement Metrics

**User Story:** As a potential customer, I want to see concrete metrics of Xolvon's achievements, so that I can evaluate the platform's track record.

#### Acceptance Criteria

1. THE Metrics_Display SHALL display the text "45+ field experiments shipped" as one metric
2. THE Metrics_Display SHALL display the text "120 reusable playbooks" as one metric
3. THE Metrics_Display SHALL display the text "1.4k+ automation hours/mo" as one metric
4. THE Metrics_Display SHALL display the text "2.7M/mo real-time signals" as one metric
5. THE Metrics_Display SHALL display the text "420+ data assets" as one metric
6. THE Metrics_Display SHALL display the text "~38s avg response" as one metric
7. WHEN the top edge of the Metrics_Display enters the viewport, THE Website SHALL animate each numeric value from 0 to its target value over 2 seconds using integer increments
8. WHEN a user scrolls away before the animation completes, THE animation SHALL continue running
9. WHEN a user scrolls back to the Metrics_Display after the animation has completed, THE Metrics_Display SHALL display the final target values without re-animating
10. THE Metrics_Display SHALL display all 6 metrics simultaneously in the same section

### Requirement 4: Showcase Six Core Capabilities

**User Story:** As a potential partner, I want to understand Xolvon's modular capabilities, so that I can identify which modules are relevant for my business needs.

#### Acceptance Criteria

1. THE Capabilities_Module SHALL display all 6 capability entries where each entry includes a title from this set: Attention Alert, Real-Time Sentiment Analysis, Cyber Defense, Xolvon Market, Human-AI Attention-Data Insight, Attention Boost
2. FOR EACH capability entry, THE Capabilities_Module SHALL display a title text and a description text between 50 and 300 characters
3. FOR EACH capability entry, THE Capabilities_Module SHALL display an icon image or SVG graphic with width and height between 32 and 128 pixels
4. WHEN a user hovers the cursor over a capability card, THE capability card SHALL apply at least one of the following visual changes within 300 milliseconds: change background color, change border style, increase shadow depth, or scale the card size
5. WHEN the viewport width is greater than or equal to 1024 pixels, THE Capabilities_Module SHALL display capability cards in a grid layout with exactly 2 or exactly 3 columns
6. WHEN the viewport width is less than 768 pixels, THE Capabilities_Module SHALL display capability cards in a single column stack
7. WHEN the viewport width is greater than or equal to 768 pixels AND less than 1024 pixels, THE Capabilities_Module SHALL display capability cards in a grid layout with exactly 2 columns
8. FOR EACH capability entry, THE capability card SHALL have a focusable state for keyboard navigation
9. FOR EACH capability entry, THE capability icon SHALL include alt text describing the capability

### Requirement 5: Display Three Pillars Framework

**User Story:** As a decision-maker, I want to understand Xolvon's strategic framework, so that I can assess alignment with my organization's values.

#### Acceptance Criteria

1. THE Website SHALL render a section containing exactly 3 pillar entries with titles: "Impact-Driven Automation", "Human-AI Collaboration", and "Scalable B2B Solutions"
2. FOR EACH pillar entry, THE Website SHALL render a title and a description text of at least 100 characters
3. THE three pillars section SHALL have at least one of the following visual distinctions from adjacent sections: a different background color, a visible border, or padding of at least 40 pixels on top and bottom
4. WHEN the viewport width is greater than 768 pixels, THE Website SHALL display the three pillar entries in a horizontal layout (side-by-side in a single row)
5. WHEN the viewport width is less than or equal to 768 pixels, THE Website SHALL display the three pillar entries in a vertical layout (stacked)

### Requirement 6: Team Information Presentation

**User Story:** As a stakeholder, I want to see the team behind Xolvon, so that I can understand the expertise and people driving the project.

#### Acceptance Criteria

1. THE Team_Section SHALL display entries for exactly 6 team members with names: M. Farsya Hasibuan, Zaidan Daffa Abdillah, Varisha Aira Dalimunthe, Mahathir Abitah Batubara, I Gusti Ayu Laksmi Dewi, and Khalifa Ghizzan Moreno
2. FOR EACH team member entry, THE Team_Section SHALL display the member's name, role, and a profile image
3. FOR EACH team member entry, THE Team_Section SHALL display a bio or expertise description text between 50 and 300 characters
4. WHEN a team member profile image fails to load, THE Team_Section SHALL display a placeholder image or initials
5. WHEN a team member's bio is missing, THE Team_Section SHALL display the text "Bio not available" or leave the bio field empty
6. WHEN the viewport width is greater than or equal to 1024 pixels, THE Team_Section SHALL display team member entries in a grid layout with exactly 2 or exactly 3 columns
7. WHEN the viewport width is less than 768 pixels, THE Team_Section SHALL display team member entries in a single column stack
8. WHEN the viewport width is greater than or equal to 768 pixels AND less than 1024 pixels, THE Team_Section SHALL display team member entries in a grid layout with exactly 2 columns

### Requirement 7: Social Media Integration

**User Story:** As a visitor, I want to access Xolvon's social media presence, so that I can follow updates and engage with the community.

#### Acceptance Criteria

1. THE Footer SHALL include a link element with the href attribute set to "https://www.instagram.com/projectxolvon" and visible text or icon representing Instagram
2. THE Instagram link SHALL include the attribute target="_blank" and rel="noopener noreferrer"
3. WHEN a user clicks the Instagram link, THE Website SHALL open the URL "https://www.instagram.com/projectxolvon" in a new browser tab
4. THE Footer SHALL display at least one social media icon image or SVG with width and height between 24 and 48 pixels
5. THE social media icon SHALL use recognizable Instagram brand colors (gradient of #f09433, #e6683c, #dc2743, #cc2366, #bc1888) or the official Instagram logo
6. WHEN the Instagram URL is unreachable (network error or HTTP error status), THE link SHALL remain visible and functional for future attempts
7. THE Footer SHALL display social media links in the same position and style on all pages of the Website

### Requirement 8: Call-to-Action for Engagement

**User Story:** As an interested prospect, I want clear ways to engage with Xolvon, so that I can take the next step in partnership or customer journey.

#### Acceptance Criteria

1. THE Website SHALL include at least 2 CTA_Button elements positioned in at least 2 of the following sections: Hero_Section, Capabilities_Module, Three Pillars section, Team_Section, or About section
2. EACH CTA_Button SHALL have visible text of 10 to 30 characters indicating an action such as "Get Started", "Contact Us", "Request Demo", "Learn More", or "Start Now"
3. THE Website SHALL designate one CTA_Button as the primary CTA using a visually distinct style (such as a brighter background color, larger size, or bolder typography) compared to secondary CTAs
4. WHEN a user clicks the primary CTA_Button, THE Website SHALL navigate to a contact form page or section that includes input fields for at minimum: name and email
5. THE Website SHALL include a contact form page or section with input fields for at minimum: name, email, and message or inquiry text
6. WHEN a user hovers the cursor over a CTA_Button, THE CTA_Button SHALL apply at least one visual change within 200 milliseconds (such as background color change, border change, or shadow effect)
7. EACH CTA_Button SHALL use colors from the Brand_Identity color palette and have a visual distinction from surrounding text (such as a background fill, border, or contrasting text color)

### Requirement 9: Responsive Design Across Devices

**User Story:** As a mobile user, I want the website to work seamlessly on my device, so that I can access information anywhere.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768 pixels (exclusive), THE Website SHALL display all multi-column layouts as single-column stacks
2. WHEN the viewport width is greater than or equal to 768 pixels AND less than 1024 pixels (exclusive), THE Website SHALL apply tablet-specific layouts where grid-based sections use exactly 2 columns
3. WHEN the viewport width is greater than or equal to 1024 pixels, THE Website SHALL apply desktop-specific layouts where grid-based sections may use 2 or 3 columns
4. AT viewport width exactly 768 pixels, THE Website SHALL apply the tablet layout (criterion 2)
5. AT viewport width exactly 1024 pixels, THE Website SHALL apply the desktop layout (criterion 3)
6. FOR ALL viewport widths, THE Website SHALL render body text with a minimum font size of 16 pixels and ensure no content requires horizontal scrolling
7. FOR ALL viewport widths, THE Website SHALL scale images proportionally using CSS properties that maintain aspect ratio (such as max-width: 100% and height: auto)
8. FOR ALL viewport widths, THE Website SHALL ensure interactive elements (buttons, links, form inputs) have a minimum touch target size of 44 pixels width by 44 pixels height
9. WHEN the viewport width is less than 768 pixels, THE Navigation_Bar links SHALL be hidden by default and revealed via a hamburger menu toggle
10. WHEN the viewport width is greater than or equal to 768 pixels, THE Navigation_Bar links SHALL be visible without requiring a hamburger menu toggle

### Requirement 10: Brand Identity Consistency

**User Story:** As a brand manager, I want the website to reflect Xolvon's brand identity consistently, so that we maintain professional and recognizable presence.

#### Acceptance Criteria

1. THE Website SHALL define a color palette of at minimum 3 distinct colors identified by hex codes or RGB values
2. THE Website SHALL apply colors from the defined color palette consistently across all sections for backgrounds, text, buttons, and borders
3. THE Website SHALL define typography rules specifying font families for headings, body text, and buttons
4. THE Website SHALL apply the defined font families consistently across all sections
5. THE Website SHALL ensure heading font sizes are larger than body text font sizes with a minimum ratio of 1.5:1
6. THE Website SHALL display the Xolvon logo image in the Navigation_Bar
7. THE Website SHALL display the Xolvon logo image or name in the Footer
8. THE Website SHALL display the mission statement headline ("Solving Society's Conundrums with Human-AI Field Systems") with a minimum font size of 32 pixels on desktop viewports (width ≥ 1024 pixels)
9. THE Website SHALL display the tagline ("The Human-AI Data Companion for Attention-Driven Decisions") with a minimum font size of 18 pixels on desktop viewports (width ≥ 1024 pixels)
10. THE Website SHALL position the mission statement headline above or before the tagline in the visual reading flow
11. THE Website SHALL position headings above or before their associated body content in the visual reading flow

### Requirement 11: Performance and Loading Experience

**User Story:** As a visitor, I want the website to load quickly and smoothly, so that I don't waste time waiting.

#### Acceptance Criteria

1. WHEN a user first accesses the Website on a connection with bandwidth of at least 5 Mbps and latency of at most 50 milliseconds, THE Website SHALL render the Hero_Section with all text and primary CTA_Button visible and interactive within 3 seconds of the initial HTTP request
2. WHEN images in the Hero_Section are loading, THE Website SHALL display solid color placeholder rectangles matching the final image dimensions to prevent layout shift
3. THE Website SHALL apply lazy loading attributes (such as loading="lazy") to all images positioned below the initial viewport (below the fold)
4. THE Website SHALL serve images with file sizes not exceeding 500 KB per image for photographs and 100 KB per image for icons or logos
5. THE Website SHALL compress or optimize images such that visual quality degradation is not perceivable to a typical user viewing the image at its rendered size
6. WHEN the Website loads, THE Website SHALL deliver HTML, CSS, and JavaScript for the Hero_Section (above-the-fold content) before delivering resources for below-the-fold sections
7. WHEN the Hero_Section fails to render within 3 seconds of the initial HTTP request, THE Website SHALL display a text message such as "Content is loading, please wait" or "Slow connection detected"
8. WHEN an image fails to load due to network error or invalid URL, THE Website SHALL display an alt text or a placeholder indicating the image is unavailable

### Requirement 12: Footer with Essential Links

**User Story:** As a visitor, I want to access important links and information in the footer, so that I can find legal, contact, or additional resources.

#### Acceptance Criteria

1. THE Footer SHALL display copyright text including the organization name and current year
2. THE Footer SHALL include clickable links labeled "Privacy Policy" and "Terms of Service"
3. WHEN a visitor clicks a footer link, THE Footer link SHALL navigate to the corresponding page
4. THE Footer SHALL display at least one contact method: email address, phone number, or link labeled "Contact Us"
5. THE Footer SHALL be visible at the bottom of all pages
6. THE Footer SHALL use colors and typography defined in Brand_Identity
7. THE Footer links SHALL be keyboard navigable using Tab key
8. THE Footer links SHALL be announced by screen readers with their link text

### Requirement 13: About Section for Project Context

**User Story:** As a researcher or journalist, I want detailed information about Project Xolvon's background and mission, so that I can understand the project's origin and goals.

#### Acceptance Criteria

1. THE About section SHALL include content explaining Project Xolvon's mission that covers at minimum the project's origin, primary goals, and approach to Human-AI collaboration
2. THE About section SHALL describe the concept of Human-AI Field Systems including at minimum a definition and explanation of how human capabilities and AI capabilities are combined
3. THE About section SHALL explain how Xolvon addresses complex social problems including at minimum one concrete example or use case
4. THE About section SHALL include a text reference to the "67 Alpha-stage Digital Production Lab" positioning that identifies Xolvon's development stage and lab nature
5. WHEN the About section is displayed, THE Website SHALL include at least one image or icon representing Human-AI collaboration
6. THE About section SHALL be identifiable by a visible heading containing the word "About"

### Requirement 14: Platform Features for Target Audiences

**User Story:** As a brand, creator, or agency, I want to understand which platform features are relevant to my role, so that I can evaluate Xolvon's fit for my needs.

#### Acceptance Criteria

1. THE Website SHALL include a section with a visible heading containing text such as "For Brands", "For Creators", "For Agencies", or "Target Audiences" that describes at least 2 of the following audience types: brands, creators, agencies
2. FOR EACH audience type described, THE Website SHALL include content of at least 100 characters explaining at least 2 use cases, benefits, or relevant features for that audience
3. WHEN a visitor hovers the cursor over or clicks on an audience type element, THE Website SHALL apply at least one visual change within 300 milliseconds (such as background color change, border highlight, or content expansion) to emphasize that audience type
4. THE audience section SHALL display at least 4 distinct platform features or capabilities mentioned across all audience descriptions

### Requirement 15: Accessibility Compliance

**User Story:** As a user with disabilities, I want the website to be accessible, so that I can navigate and understand content using assistive technologies.

#### Acceptance Criteria

1. THE Website SHALL include alt text for all non-decorative images that conveys the image purpose or content
2. THE Website SHALL include empty alt attributes (alt="") for decorative images
3. THE Website SHALL maintain color contrast ratios of at least 4.5:1 for normal text (smaller than 24 pixels or 18.66 pixels bold) and at least 3:1 for large text (24 pixels or larger, or 18.66 pixels or larger bold) between text and backgrounds
4. THE Website SHALL provide visible focus indicators for all interactive elements during keyboard navigation
5. WHEN a user navigates using keyboard only, THE Website SHALL allow access to all interactive elements in a tab order that follows the visual reading flow (left-to-right, top-to-bottom)
6. WHEN a user navigates using keyboard only, THE Website SHALL allow the user to move focus away from any interactive element using standard keyboard commands (Tab, Shift+Tab, or Escape)
7. THE Website SHALL include ARIA labels, roles, or descriptions for custom interactive components (including but not limited to: hamburger menus, carousels, modals, custom dropdowns, tabs, accordions)
8. THE Website SHALL structure content using proper heading hierarchy (h1 through h6) without skipping levels
9. THE Website SHALL define landmark regions using semantic HTML elements or ARIA landmarks (header, navigation, main content, footer)
10. WHEN using a screen reader, THE Website SHALL announce interactive elements with their role, state, and accessible name
11. WHEN a user resizes text up to 200 percent using browser zoom or text-only zoom, THE Website SHALL display all content and interactive elements without requiring horizontal scrolling on viewports of 1280 pixels width or larger and without content overlapping or being clipped

### Requirement 16: Marketplace Homepage Structure

**User Story:** As a visitor, I want to see a catalog of Xolvon projects on the homepage, so that I can browse and select projects that interest me.

#### Acceptance Criteria

1. THE Marketplace_Homepage SHALL display a grid of at least 5 Project_Card elements representing different Xolvon projects
2. EACH Project_Card SHALL display a project title, thumbnail image, and short description text between 50 and 150 characters
3. WHEN a user clicks on a Project_Card, THE Website SHALL navigate to the corresponding Project_Detail_Page for that project
4. WHEN the viewport width is greater than or equal to 1024 pixels, THE Marketplace_Homepage SHALL display Project_Card elements in a grid of exactly 3 columns
5. WHEN the viewport width is greater than or equal to 768 pixels AND less than 1024 pixels, THE Marketplace_Homepage SHALL display Project_Card elements in a grid of exactly 2 columns
6. WHEN the viewport width is less than 768 pixels, THE Marketplace_Homepage SHALL display Project_Card elements in a single column stack
7. THE Marketplace_Homepage SHALL include Project_Card elements for at minimum the following projects: XFarming, KontenMargin, Xclip, AttentionBoost, and CafeMargin
8. EACH Project_Card SHALL have hover effects that apply at least one visual change within 300 milliseconds (such as shadow increase, border highlight, or scale transformation)

### Requirement 17: Project Detail Pages

**User Story:** As a potential customer, I want to view detailed information about a specific project, so that I can understand its features and decide whether to use it.

#### Acceptance Criteria

1. THE Website SHALL provide a unique Project_Detail_Page for each project displayed on the Marketplace_Homepage
2. EACH Project_Detail_Page SHALL display the project name as a heading level 1 (h1)
3. EACH Project_Detail_Page SHALL include a detailed description section of at least 200 characters explaining the project's purpose and benefits
4. EACH Project_Detail_Page SHALL display at least 3 key features or benefits of the project in a list or grid format
5. EACH Project_Detail_Page SHALL include at least one CTA_Button linking to the project's live demo, purchase link, or contact form
6. EACH Project_Detail_Page SHALL display a hero image or banner image relevant to the project
7. WHEN a user clicks a back button or navigation element, THE Website SHALL navigate from the Project_Detail_Page back to the Marketplace_Homepage

### Requirement 18: Instagram Bio Integration for Team Members

**User Story:** As a visitor, I want to see authentic team information sourced from social media, so that I can trust the people behind Xolvon projects.

#### Acceptance Criteria

1. THE Team_Section SHALL display bio text for M. Farsya Hasibuan that includes "Founder & Project Lead" and "Finance, Data Science & Cyber - UPNVJ | Data Science"
2. THE Team_Section SHALL display bio text for Zaidan Daffa Abdillah that includes "Head of Tech & Experience" and "Web Dev & Experience - Tel-U | Informatics Engineering"
3. THE Team_Section SHALL display bio text for Varisha Aira Dalimunthe that includes "Head of Community Ops" and "Ops & Legal - UPNVJ | Information System"
4. THE Team_Section SHALL display bio text for Mahathir Abitah Batubara that includes "Head of Business Dev" and "Product & BizDev - UNESA | Digital Business"
5. THE Team_Section SHALL display bio text for I Gusti Ayu Laksmi Dewi that includes "Head of Attention Strategist" and "Social Media Specialist - UMN | Marketing Communication"
6. THE Team_Section SHALL display bio text for Khalifa Ghizzan Moreno that includes "Head of Brand Strategist" and "PR & Communication - Tel-U | Communication Science"
7. EACH team member entry SHALL display their Instagram-sourced bio verbatim or with minimal formatting adjustments for readability

### Requirement 19: Poppins Font Typography

**User Story:** As a visitor, I want to experience consistent and modern typography, so that the website feels professional and easy to read.

#### Acceptance Criteria

1. THE Website SHALL load the Poppins font family from Google Fonts or a local source with weights 400, 500, 600, 700, 800, and 900
2. THE Website SHALL apply Poppins as the primary font family for all text content including headings, body text, buttons, and navigation links
3. WHEN the Poppins font fails to load, THE Website SHALL fall back to a system sans-serif font such as ui-sans-serif or system-ui
4. THE Website SHALL use Poppins font weight 700 or 800 or 900 for all heading level 1 (h1) elements
5. THE Website SHALL use Poppins font weight 600 or 700 for all heading level 2 (h2) and heading level 3 (h3) elements
6. THE Website SHALL use Poppins font weight 400 or 500 for body text and paragraph content
7. THE Website SHALL use Poppins font weight 600 or 700 for button text and CTA_Button elements

### Requirement 20: Purple, Black, and Blue Color Scheme

**User Story:** As a brand manager, I want the website to use Xolvon's brand colors consistently, so that the visual identity matches the xolvontesting.web.app design.

#### Acceptance Criteria

1. THE Website SHALL define a primary purple color in the color palette with hex value in the range #6B21A8 to #9333EA (purple spectrum)
2. THE Website SHALL define a primary blue color in the color palette with hex value in the range #0EA5E9 to #3B82F6 (blue spectrum)
3. THE Website SHALL define a black color in the color palette with hex value #000000 or a dark gray in the range #111827 to #1F2937
4. THE Website SHALL apply the purple color for primary CTA_Button backgrounds, important headings, or accent elements
5. THE Website SHALL apply the blue color for secondary interactive elements, links, or informational highlights
6. THE Website SHALL apply the black or dark gray color for body text, Navigation_Bar background, or Footer background
7. THE Website SHALL use white (#FFFFFF) or light gray (#F9FAFB to #F3F4F6) for background sections to provide contrast with purple, blue, and black elements
8. THE Website SHALL ensure all color combinations meet WCAG AA contrast ratio requirements as specified in Requirement 15 criterion 3
