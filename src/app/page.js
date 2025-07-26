'use client';
import React from 'react';
import { Outfit } from 'next/font/google';

const outfitDisplay = Outfit({ subsets: ['latin'] });

export default function PersonalWebsite() {
  const colors = {
    mainBg: '#EFE7DC',
    footerText: "#EFE7DC",
    headerBg: '#5D6245',
    footerBg: '#3F3A2F',
    accent: "#A66B4F",
    textColor: '#2C2E1F',
    logoBg: '#A66B4F'
  };

  const personalInfo = {
      name: "Zac Harless",
      bio: [
        { one: "Hey, I’m a full-stack developer based out of southwestern Virginia, who lives somewhere between clean design and chaotic late-night debugging sessions. I’ve worked across the stack—building interfaces, wiring up APIs, and coaxing backend services into doing what they’re supposed to." },
        { two: "I like building things that are actually useful—and don’t break when you look at them funny. Whether it’s crafting clean code, untangling spaghetti logic, or pretending semicolons are optional, I’m here for it." },
        { three: "Always learning, always improving—and occasionally Googling the same error for the 47th time."}
      ],
      avatar: "./me.webp",
      logo: "./logo.png",
      links: [
        { name: "GitHub", url: "https://github.com/czzc", icon: "github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/zacharyharless", icon: "linkedin" },
        { name: "Email", url: "mailto:zac@zharless.com", icon: "email" },
      ]
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
              onMouseEnter={(e) => {
                e.target.style.animation = 'shake 0.6s ease-out';
                setTimeout(() => {
                  e.target.style.animation = 'none';
                }, 600);
              }}
            />
            <style jsx>{`
              @keyframes shake {
                0%   { transform: rotate(0deg); }
                25%  { transform: rotate(2deg); }
                50%  { transform: rotate(-2deg); }
                75%  { transform: rotate(1deg); }
                100% { transform: rotate(0deg); }
              }
            `}</style>
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
          
          <nav className="hidden md:flex justify-center space-x-6 mt-4">
            {personalInfo.links.map((link, index) => {
              const getIcon = (iconName) => {
                switch(iconName) {
                  case 'github':
                    return (
                      <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6" />
                    );
                  case 'linkedin':
                    return (
                      <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                    );
                  case 'email':
                    return (
                      <svg className="w-6 h-6" fill="#3F3A2F" stroke="#000000" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  style={{backgroundColor: colors.logoBg}}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              );
            })}
          </nav>
          
          <div className="md:hidden flex flex-col items-center space-y-4 mt-6">
            {personalInfo.links.map((link, index) => {
              const getIcon = (iconName) => {
                switch(iconName) {
                  case 'github':
                    return (
                      <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6 splatter" />
                    );
                  case 'linkedin':
                    return (
                      <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 splatter" />
                    );
                  case 'email':
                    return (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  style={{backgroundColor: colors.logoBg}}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              );
            })}
          </div>
        </div>
        
        <a
          href="https://www.youtube.com/watch?v=hoWEYBSlctc"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute text-2xl font-bold transition-colors duration-200`}
          style={{
            bottom: '10px',
            right: '20px',
            color: '#6ab825',
            textDecoration: 'none',
            fontFamily: `'Outfit'`
          }}
          onMouseEnter={(e) => e.target.style.color = '#5a9e20'}
          onMouseLeave={(e) => e.target.style.color = '#6ab825'}
        >
          &pi;
        </a>
      </footer>
    </div>
  );
}