import { colors } from '../constants/colors';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from './SocialLinks';

export default function Footer({ showSocialLinks = false, showPiLink = false }) {
  return (
    <footer className="border-t mt-16 relative border-[#CDECCD]" style={{backgroundColor: colors.footerBg}}>
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm" style={{color: colors.footerText}}>
          © 2025 {personalInfo.name}
        </p>
        
        {showSocialLinks && (
          <>
            <SocialLinks links={personalInfo.links} />
            <SocialLinks links={personalInfo.links} isMobile={true} />
          </>
        )}
      </div>
      
      {showPiLink && (
        <a
          href="https://www.youtube.com/watch?v=hoWEYBSlctc"
          target="_blank"
          rel="noopener noreferrer"
          className="pi-link"
        >
          &pi;
        </a>
      )}
    </footer>
  );
}