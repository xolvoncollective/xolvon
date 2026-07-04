# Xolvon Comprehensive Marketplace Website

> 67 Alpha-stage Digital Production Lab - Browse Our Human-AI Solutions

A modern React-based marketplace website showcasing 18 projects within the ProjectXolvon ecosystem. Built with React 19, TypeScript, Vite, and TailwindCSS 4.

## 🎯 Project Overview

This website positions Xolvon as a "67 Alpha-stage Digital Production Lab" focused on "Human-AI End-to-End Attention Systems" that solve society's complex problems through data-driven solutions.

### Key Features

- **Marketplace Homepage**: Grid of 18 project cards showcasing Human-AI solutions
- **Project Detail Pages**: Comprehensive information for each project
- **Team Section**: 6 team members with Instagram-sourced bios
- **Achievement Metrics**: Animated display of key accomplishments
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Accessibility**: WCAG AA compliant with semantic HTML and ARIA attributes

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8.1
- **Styling**: TailwindCSS 4
- **Routing**: React Router DOM
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Typography**: Poppins font (Google Fonts) - weights 400, 500, 600, 700, 800, 900

## 📁 Project Structure

```
xolvon-website/
├── public/               # Static assets
│   ├── images/          # Project thumbnails, hero images, team photos
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/      # Reusable React components
│   │   ├── common/     # Button, Card, Heading, Section, Image
│   │   ├── layout/     # NavigationBar, Footer, ErrorBoundary
│   │   └── features/   # HeroSection, ProjectCard, TeamSection, etc.
│   ├── pages/          # Page components (HomePage, ProjectDetailPage)
│   ├── data/           # Static data files (projects, team, metrics)
│   ├── contexts/       # React Context providers
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles and design tokens
│   │   └── index.css  # Design token system with CSS variables
│   ├── App.tsx         # Root component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template with Poppins font preconnect
├── vite.config.ts      # Vite configuration with code splitting
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## 🎨 Design System

### Color Palette (Requirements 20.1-20.8)

**Purple Colors**:
- Primary: `#6B21A8` (Purple 800) - Primary CTAs, headings
- Secondary: `#9333EA` (Purple 600) - Accents, hover states
- Light: `#C084FC` (Purple 400) - Highlights

**Blue Colors**:
- Primary: `#0EA5E9` (Sky 500) - Secondary CTAs, links
- Secondary: `#3B82F6` (Blue 500) - Info elements
- Light: `#60A5FA` (Blue 400) - Hover states

**Neutral Colors**:
- Black: `#000000` - Body text, nav background
- Gray 800: `#1F2937` - Dark sections, footer
- Gray 500: `#6B7280` - Secondary text
- Gray 100: `#F3F4F6` - Light backgrounds
- White: `#FFFFFF` - Primary backgrounds

### Typography (Requirements 19.1-19.7)

**Font Family**: Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif

**Font Weights**:
- Regular: 400 (body text)
- Medium: 500 (emphasized body text)
- Semibold: 600 (subheadings, buttons)
- Bold: 700 (h2, h3, buttons)
- Extrabold: 800 (h1, hero headlines)
- Black: 900 (special emphasis)

**Font Sizes** (Desktop ≥1024px):
- H1: 48px (3rem)
- H2: 36px (2.25rem)
- H3: 28px (1.75rem)
- Body: 16px (1rem) - minimum for accessibility
- Body Large: 18px (1.125rem)
- Button: 16px (1rem)
- Small: 14px (0.875rem)

### Responsive Breakpoints

- **Mobile**: 0-767px (single column layouts, 32px h1)
- **Tablet**: 768-1023px (2 column grids, 40px h1)
- **Desktop**: ≥1024px (3 column grids, 48px h1)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd xolvon-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run oxlint for code quality checks

## 📦 Build Configuration

The Vite configuration includes:
- TailwindCSS 4 plugin integration
- Code splitting for optimized bundle sizes:
  - `react-vendor.js` - React and ReactDOM
  - `router-vendor.js` - React Router DOM
- Automatic chunk splitting for route-based code splitting

## 🎯 Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.7.2",
    "motion": "^12.2.0",
    "lucide-react": "^0.496.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.3",
    "typescript": "~6.0.2",
    "tailwindcss": "^4.1.5",
    "@tailwindcss/vite": "^4.1.5",
    "vite": "^8.1.1"
  }
}
```

## 🎨 CSS Variables (Design Tokens)

The design token system is defined in `src/styles/index.css` and includes:
- Color palette variables (`--purple-primary`, `--blue-primary`, etc.)
- Typography variables (`--font-family-base`, font weights, sizes)
- Spacing system (`--spacing-xs` through `--spacing-3xl`)
- Transition durations (`--transition-fast`, `--transition-normal`, `--transition-slow`)

Access variables in components:
```tsx
<h1 style={{ color: 'var(--purple-primary)' }}>Heading</h1>
```

Or use TailwindCSS utility classes that reference the design tokens.

## ♿ Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- WCAG AA color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Keyboard navigation support with visible focus indicators
- Screen reader friendly with ARIA labels and roles
- Minimum 44×44px touch targets for interactive elements
- Responsive text scaling support (up to 200% zoom)
- Reduced motion support via CSS media queries

## 📱 Responsive Design

The website follows a mobile-first approach:
- Single column layouts on mobile (<768px)
- 2-column grids on tablet (768-1023px)
- 3-column grids on desktop (≥1024px)
- Hamburger menu for mobile navigation
- Optimized touch targets and spacing for mobile devices

## 🏗️ Next Steps

This is Task 1 (Foundation Setup) complete. Upcoming tasks include:
- Task 2: Create TypeScript data models and static data files
- Task 3: Implement routing and navigation infrastructure
- Task 4: Build common reusable components
- Task 5: Implement layout components
- And more...

See `tasks.md` in the spec directory for the complete implementation plan.

## 📄 License

[To be added]

## 👥 Team

**Project Xolvon Team**:
- M. Farsya Hasibuan - Founder & Project Lead
- Zaidan Daffa Abdillah - Head of Tech & Experience
- Varisha Aira Dalimunthe - Head of Community Ops
- Mahathir Abitah Batubara - Head of Business Dev
- I Gusti Ayu Laksmi Dewi - Head of Attention Strategist
- Khalifa Ghizzan Moreno - Head of Brand Strategist

## 🔗 Links

- Instagram: [@projectxolvon](https://www.instagram.com/projectxolvon)
- Website: [To be deployed]

---

**Built with ❤️ by the Xolvon Team**
