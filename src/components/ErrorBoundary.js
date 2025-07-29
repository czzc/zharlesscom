'use client';
import React from 'react';
import { buttonStyles, layoutStyles } from '../utils/styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`${layoutStyles.pageContainer} items-center justify-center`}>
          <div className={layoutStyles.centeredText}>
            <h1 className="text-6xl font-bold text-accent-color mb-4">⚠️</h1>
            <h2 className="text-2xl font-bold text-hero mb-4">Something went wrong</h2>
            <p className="text-main mb-6">
              We encountered an unexpected error. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className={buttonStyles.error}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;