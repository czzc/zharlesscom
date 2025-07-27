'use client';
import React from 'react';
import { Outfit } from 'next/font/google';
import { colors } from '../../constants/colors';
import { personalInfo } from '../../data/personalInfo';
import Header from '../Header';
import Footer from '../Footer';

const outfitDisplay = Outfit({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: colors.mainBg}}>
      <Header isHomePage={true} />

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

          <h1
            className={`text-4xl font-bold mb-2 pb-5 ${outfitDisplay.className}`}
            style={{color: colors.heroColor}}>
            {personalInfo.name}
          </h1>

          <div className="max-w-2xl mx-auto mb-12 border-t border-[#CDECCD] pt-5">
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

      <Footer showSocialLinks={true} showPiLink={true} />
    </div>
  );
}