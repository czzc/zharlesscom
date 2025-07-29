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