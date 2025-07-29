/**
 * Shared CSS class utilities to reduce duplication
 */

/**
 * Common button/link styling patterns
 */
export const buttonStyles = {
  // Base focus styles used across buttons and links
  focus: "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  
  // Primary button style (accent background)
  primary: "bg-accent text-header-bg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  
  // Social link/icon button style
  socialIcon: "p-1 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  
  // Error page button style
  error: "px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
};

/**
 * Common layout patterns
 */
export const layoutStyles = {
  // Standard page container
  pageContainer: "page-container flex flex-col",
  
  // Centered main content area
  mainContent: "flex-1 flex items-center justify-center px-6",
  
  // Standard max-width container
  container: "max-w-4xl mx-auto",
  
  // Header/Footer consistent width container
  headerFooterContainer: "max-w-4xl mx-auto px-6",
  
  // Centered text container
  centeredText: "text-center",
  
  // Large centered content (like 404 page)
  centeredContent: "text-center max-w-2xl"
};

/**
 * Utility function to combine multiple CSS classes
 * @param  {...string} classes - CSS class strings to combine
 * @returns {string} Combined CSS classes
 */
export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};