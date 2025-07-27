import React, { memo } from 'react';

const Icon = memo(function Icon({ iconName, className = "w-4 h-4" }) {
  switch(iconName) {
    case 'github':
      return (
        <img src="/github-mark.svg" alt="GitHub" className={className} />
      );
    case 'linkedin':
      return (
        <img src="/linkedin.png" alt="LinkedIn" className={className} />
      );
    case 'email':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
});

export default Icon;