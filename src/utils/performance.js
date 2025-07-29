/**
 * Utility functions for performance detection and optimization
 */

/**
 * Detects if the current device is low-end and may struggle with animations
 * @returns {boolean} True if device is considered low-end
 */
export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') {
    return false; // Server-side rendering
  }

  const hardwareConcurrency = navigator.hardwareConcurrency || 2;
  const deviceMemory = navigator.deviceMemory || 2;
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  
  return hardwareConcurrency <= 2 || deviceMemory <= 2 || (isIOS && isSafari);
};

/**
 * Hook for managing animation enablement based on device performance
 * @returns {boolean} Whether animations should be enabled
 */
export const useAnimationsEnabled = () => {
  if (typeof window === 'undefined') {
    return true; // Server-side rendering default
  }
  
  return !isLowEndDevice();
};

/**
 * More conservative performance check for very heavy animations only
 * @returns {boolean} True if device should avoid intensive animations
 */
export const isVeryLowEndDevice = () => {
  if (typeof navigator === 'undefined') {
    return false; // Server-side rendering
  }

  const hardwareConcurrency = navigator.hardwareConcurrency || 2;
  const deviceMemory = navigator.deviceMemory || 2;
  
  // Only disable heavy animations on truly constrained devices
  return hardwareConcurrency <= 1 || deviceMemory <= 1;
};

/**
 * Hook for managing light animations (like scanlines)
 * @returns {boolean} Whether light animations should be enabled
 */
export const useLightAnimationsEnabled = () => {
  if (typeof window === 'undefined') {
    return true; // Server-side rendering default
  }
  
  return !isVeryLowEndDevice();
};

/**
 * Hook for managing heavy animations (like glitch effects)
 * @returns {boolean} Whether heavy animations should be enabled
 */
export const useHeavyAnimationsEnabled = () => {
  if (typeof window === 'undefined') {
    return true; // Server-side rendering default
  }
  
  return !isLowEndDevice();
};