import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { ProjectDataProvider } from './contexts/ProjectDataContext';
import { NavigationProvider } from './contexts/NavigationContext';
import WelcomePopup from './components/features/WelcomePopup';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <ErrorBoundary>
      <ProjectDataProvider>
        <NavigationProvider>
          <Router>
          <div className="min-h-screen relative" style={{ background: 'var(--bg-primary)' }}>
            {/* Ambient background glow */}
            <div className="ambient-glow" />

            {/* Welcome popup */}
            <WelcomePopup />

            {/* Main content */}
            <main className="relative z-10">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/project/:projectId" element={<ProjectDetailPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
          </Router>
        </NavigationProvider>
      </ProjectDataProvider>
    </ErrorBoundary>
  );
}

export default App;
