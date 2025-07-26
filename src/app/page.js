'use client';
import React from 'react';
import { Outfit } from 'next/font/google';
import { colors } from '../constants/colors';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from '../components/SocialLinks';

const outfitDisplay = Outfit({ subsets: ['latin'] });

export default function PersonalWebsite() {
  const handleLogoHover = (e) => {
    e.target.style.animation = 'shake 0.6s ease-out';
    setTimeout(() => {
      e.target.style.animation = 'none';
    }, 600);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: colors.mainBg}}>
      <header className="shadow-sm border-b" style={{backgroundColor: colors.headerBg}}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={personalInfo.logo}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto object-cover hover:animate-pulse transition-all duration-200 cursor-pointer"
              onMouseEnter={handleLogoHover}
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg ring-4"
              style={{color: colors.accent}}
            />
          </div>

          <h1 className={`text-4xl font-bold mb-2 ${outfitDisplay.className}`} style={{color: colors.textColor}}>
            {personalInfo.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {personalInfo.title}
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            {personalInfo.bio.map((item, index) => {
              const key = Object.keys(item)[0];
              return (
                <p key={index} className="leading-relaxed text-lg mb-4" style={{color: colors.textColor, textAlign: 'justify'}}>
                  {item[key]}
                </p>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 relative" style={{backgroundColor: colors.footerBg}}>
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm" style={{color: colors.footerText}}>
            © 2025 {personalInfo.name}
          </p>
          
          <SocialLinks links={personalInfo.links} />
          <SocialLinks links={personalInfo.links} isMobile={true} />
        </div>
        
        <a
          href="https://www.youtube.com/watch?v=hoWEYBSlctc"
          target="_blank"
          rel="noopener noreferrer"
          className="pi-link"
        >
          &pi;
        </a>
      </footer>
    </div>
  );
}