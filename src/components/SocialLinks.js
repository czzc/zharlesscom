import React, { memo } from 'react';
import Icon from './Icon';
import { colors } from '../constants/colors';

const SocialLinks = memo(function SocialLinks({ links = [], isMobile = false }) {
  const containerClass = isMobile 
    ? "md:hidden flex flex-col items-center space-y-4 mt-6"
    : "hidden md:flex justify-center space-x-6 mt-4";

  return (
    <nav className={containerClass}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          title={link.name}
        >
          <Icon iconName={link.icon} />
        </a>
      ))}
    </nav>
  );
});

export default SocialLinks;