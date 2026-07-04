import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/layout/ErrorBoundary';
import { NavigationProvider } from './contexts/NavigationContext';
import { ProjectDataProvider } from './contexts/ProjectDataContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <ErrorBoundary>
      <ProjectDataProvider>
        <NavigationProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-white">
              <NavigationBar />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:projectId" element={<ProjectDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </NavigationProvider>
      </ProjectDataProvider>
    </ErrorBoundary>
  );
}

export default App;
