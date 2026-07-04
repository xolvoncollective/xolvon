# Xolvon Digital Production Lab

A modern React-based premium marketplace website showcasing 18 alpha-stage field systems within the Project Xolvon ecosystem. 
Built with React 19, TypeScript, Vite, and TailwindCSS 4. 

This project incorporates a **Premium Aesthetic** (Glassmorphism, Micro-animations, Animated mesh gradients) and **Punchy Copywriting** to stand out from generic tech templates.

## 🎯 Project Overview

This website positions Xolvon as a "Digital Production Lab" focused on building **Human-Machine Field Systems** that solve complex operational problems through automation and data-driven solutions.

### Key Features
- **Marketplace Homepage**: Grid of 18 project cards showcasing practical solutions.
- **Project Detail Pages**: Comprehensive information, metric tracking, and capabilities for each project.
- **Premium Design System**: Glassmorphism cards, glowing animated orbs, dot-pattern noise backgrounds, and smooth scroll micro-animations.
- **Accessibility**: WCAG AA compliant with semantic HTML, keyboard navigation, and ARIA attributes.
- **Robust Testing**: Configured with Vitest & React Testing Library (Unit) and Playwright (E2E).

## 🛠️ Technology Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8.1
- **Styling**: TailwindCSS 4 (Custom Design Tokens)
- **Routing**: React Router DOM
- **Animation**: Motion (Framer Motion) & Native CSS Keyframes
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library, Playwright

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation & Setup

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

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run oxlint for code quality checks
- `npm run test` - Run unit tests via Vitest
- `npx playwright test` - Run end-to-end integration tests

## 🧪 Testing Infrastructure

**Unit Testing**
We use Vitest and React Testing Library to test individual components like `Button` and `ProjectCard`. 
Run tests with `npm run test`.

**Integration Testing**
We use Playwright to test full user journeys, such as navigating from the homepage to project detail pages. 
Run tests with `npx playwright test`.

## 🎨 Design System

The application utilizes a premium UI token system defined in `src/styles/index.css`:
- **Glassmorphism**: `.glass` and `.glass-dark` utilities providing frosted-glass backgrounds.
- **Background Textures**: `.bg-dot-pattern` for subtle dot grid noise.
- **Gradients**: Custom text clipping gradients (`.text-gradient`).
- **Animations**: Reusable keyframes for `.animate-float` and `.animate-blob` to add organic movement.

## 📦 Build Configuration

The Vite configuration includes:
- Code splitting for optimized bundle sizes (`react-vendor`, `router-vendor`).
- Automatic chunk splitting for route-based lazy loading.

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
