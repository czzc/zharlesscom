import React, { memo } from 'react';
import { colors } from '../constants/colors';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const Footer = memo(function Footer({ showSocialLinks = false, showPiLink = false }) {
  return (
    <footer className={`border-t mt-16 relative border-[#CDECCD] ${styles.footerBg}`} role="contentinfo">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-footer">
          © 2025 {personalInfo.name}
        </p>
        
        {showSocialLinks && (
          <nav aria-label="Social media links">
            <SocialLinks links={personalInfo.links} />
            <SocialLinks links={personalInfo.links} isMobile={true} />
          </nav>
        )}
      </div>
      
      {showPiLink && (
        <a
          href="https://www.youtube.com/watch?v=hoWEYBSlctc"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.piLink}
          aria-label="Pi symbol link"
        >
          &pi;
        </a>
      )}
    </footer>
  );
});

export default Footer;