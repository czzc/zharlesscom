import Link from 'next/link';
import { colors } from '../constants/colors';
import { personalInfo } from '../data/personalInfo';

export default function Header({ isHomePage = false }) {
  const handleLogoHover = (e) => {
    e.target.style.animation = 'shake 0.6s ease-out';
    setTimeout(() => {
      e.target.style.animation = 'none';
    }, 600);
  };

  const logoContent = (
    <img
      src={personalInfo.logo}
      alt={personalInfo.name}
      className={`${isHomePage ? 'w-32 h-32' : 'w-16 h-16'} rounded-full object-cover hover:animate-pulse transition-all duration-200 cursor-pointer`}
      onMouseEnter={handleLogoHover}
    />
  );

  return (
    <header className="shadow-sm border-b" style={{backgroundColor: colors.headerBg}}>
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {isHomePage ? logoContent : <Link href="/">{logoContent}</Link>}
        </div>
      </div>
    </header>
  );
}