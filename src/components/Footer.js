import React, { memo } from 'react';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from './SocialLinks';
import { layoutStyles } from '../utils/styles';
import { getCommitHash, getCommitUrl } from '../utils/buildInfo';
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
          © 2025 {personalInfo.name} • {getCommitUrl() ? (
            <a 
              href={getCommitUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs opacity-75 hover:opacity-100 transition-opacity duration-200 underline decoration-dotted underline-offset-2"
              title="View commit on GitHub"
            >
              {getCommitHash()}
            </a>
          ) : (
            <span className="font-mono text-xs opacity-75">{getCommitHash()}</span>
          )}
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