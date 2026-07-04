import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { ProjectDataProvider } from './contexts/ProjectDataContext';
import WelcomePopup from './components/features/WelcomePopup';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <ErrorBoundary>
      <ProjectDataProvider>
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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/project/:projectId" element={<ProjectDetailPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </ProjectDataProvider>
    </ErrorBoundary>
  );
}

export default App;
