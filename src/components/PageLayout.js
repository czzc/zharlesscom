import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { layoutStyles } from '../utils/styles';

/**
 * Shared page layout component that wraps content with Header and Footer
 * Eliminates duplication between HomePage and NotFoundPage
 */
export default function PageLayout({ 
  children, 
  isHomePage = false, 
  className = "",
  mainClassName = ""
}) {
  return (
    <div className={`${layoutStyles.pageContainer} ${className}`}>
      <Header isHomePage={isHomePage} />
      <main 
        id="main-content" 
        className={`${layoutStyles.mainContent} ${mainClassName}`}
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}