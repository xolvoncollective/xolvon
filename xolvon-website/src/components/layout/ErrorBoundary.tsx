import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import Button from '../common/Button';
import Heading from '../common/Heading';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReturnHome = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[var(--gray-100)]">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full text-center">
            <Heading level={2} className="mb-4 text-red-600">Something went wrong</Heading>
            <p className="text-[var(--gray-500)] mb-8 font-poppins">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <Button onClick={this.handleReturnHome} variant="primary" size="md">
              Return to Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
