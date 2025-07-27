'use client';
import { createContext, useContext } from 'react';

const FontContext = createContext();

export function FontProvider({ children }) {
  // Central font configuration - easy to change in one place
  const fonts = {
    // Primary body font
    body: {
      family: 'var(--font-ibm-plex-sans)',
      fallback: 'Arial, Helvetica, sans-serif',
      className: 'font-ibm-plex-sans'
    },
    // Heading font
    heading: {
      family: 'var(--font-space-grotesk)',
      fallback: 'Arial, Helvetica, sans-serif',
      className: 'font-space-grotesk'
    },
    // Alternative fonts for future use
    accent: {
      family: 'var(--font-space-grotesk)',
      fallback: 'Arial, Helvetica, sans-serif',
      className: 'font-space-grotesk'
    }
  };

  // Helper functions to get font styles
  const getBodyFont = () => fonts.body;
  const getHeadingFont = () => fonts.heading;
  const getAccentFont = () => fonts.accent;
  
  // Utility functions for common use cases
  const getH1FontClass = () => `${fonts.heading.className} font-bold`;
  const getH2FontClass = () => `${fonts.heading.className} font-semibold`;
  const getBodyFontClass = () => fonts.body.className;

  return (
    <FontContext.Provider value={{ 
      fonts,
      getBodyFont,
      getHeadingFont,
      getAccentFont,
      getH1FontClass,
      getH2FontClass,
      getBodyFontClass
    }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
}