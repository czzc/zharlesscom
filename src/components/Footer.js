import React, { memo } from 'react';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from './SocialLinks';
import { layoutStyles } from '../utils/styles';
import styles from './Footer.module.css';

const Footer = memo(function Footer({ showSocialLinks = false, showPiLink = false }) {
  return (
    <footer className={`border-t mt-16 relative border-[#CDECCD] ${styles.footerBg}`} role="contentinfo">
      <div className={`${layoutStyles.headerFooterContainer} py-8 ${layoutStyles.centeredText}`}>
        {showSocialLinks && (
          <nav aria-label="Social media links" style={{ marginBottom: '20px' }}>
            <SocialLinks links={personalInfo.links} />
            <SocialLinks links={personalInfo.links} isMobile={true} />
          </nav>
        )}
        
        <p className="text-sm text-footer">
          © 2025 {personalInfo.name}
        </p>
      </div>
      
      {showPiLink && (
        <a
          href="https://www.youtube.com/watch?v=hoWEYBSlctc"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.piLink}
          aria-label="Pi symbol link"
          onClick={() => {
            // Track Pi symbol click in Google Analytics
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'pi_symbol_click', {
                event_category: 'engagement',
                event_label: 'pi_link'
              });
            }
          }}
        >
          &pi;
        </a>
      )}
    </footer>
  );
});

export default Footer;