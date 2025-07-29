import React, { memo } from 'react';
import Icon from './Icon';
import { buttonStyles } from '../utils/styles';

const SocialLinks = memo(function SocialLinks({ links = [], isMobile = false }) {
  const containerClass = isMobile 
    ? "md:hidden flex justify-center space-x-4"
    : "hidden md:flex justify-center space-x-6";

  return (
    <nav className={containerClass}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.socialIcon}
          title={link.name}
        >
          <Icon iconName={link.icon} />
        </a>
      ))}
    </nav>
  );
});

export default SocialLinks;