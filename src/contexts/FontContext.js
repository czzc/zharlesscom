'use client';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const FontContext = createContext();

export function FontProvider({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    const checkFontsLoaded = async () => {
      try {
        await document.fonts.ready;
        setFontsLoaded(true);
      } catch (error) {
        // Fallback - assume fonts are loaded after a delay
        setTimeout(() => setFontsLoaded(true), 1000);
      }
    };
    
    checkFontsLoaded();
  }, []);

  // Central font configuration - easy to change in one place
  const fonts = useMemo(() => ({
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
  }), []);

  // Helper functions to get font styles
  const getBodyFont = () => fonts.body;
  const getHeadingFont = () => fonts.heading;
  const getAccentFont = () => fonts.accent;
  
  // Utility functions for common use cases
  const getH1FontClass = () => `${fonts.heading.className} font-bold`;
  const getH2FontClass = () => `${fonts.heading.className} font-semibold`;
  const getBodyFontClass = () => fonts.body.className;

  const contextValue = useMemo(() => ({
    fonts,
    fontsLoaded,
    getBodyFont,
    getHeadingFont,
    getAccentFont,
    getH1FontClass,
    getH2FontClass,
    getBodyFontClass
  }), [fonts, fontsLoaded]);

  return (
    <FontContext.Provider value={contextValue}>
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