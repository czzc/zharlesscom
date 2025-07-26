'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Outfit } from 'next/font/google';
import { colors } from '../constants/colors';
import { not_found_messages } from '../constants/not_found_messages';
import { personalInfo } from '../data/personalInfo';

const outfitDisplay = Outfit({ subsets: ['latin'] });

export default function NotFound() {
  const [message, setMessage] = useState('');
  const [isGlitchy, setIsGlitchy] = useState(false);

  useEffect(() => {
    const selectedMessage = not_found_messages[Math.floor(Math.random() * not_found_messages.length)];
    setMessage(selectedMessage);
    const shouldBeGlitchy = selectedMessage.includes('Praetorian');
    if(shouldBeGlitchy) {
      console.log(`includes Praetorian's , should be glitchy!`)
      setIsGlitchy(true);
    }
    console.log(`isGlitchy > ${shouldBeGlitchy}      message > ${selectedMessage}`);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.mainBg}}>
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 
              className={`text-9xl font-bold mb-4 ${outfitDisplay.className} ${isGlitchy ? 'glitch' : ''}`} 
              style={{color: colors.accent}}
              data-text="404"
            >
              404
            </h1>
          </div>

          <p className="text-xl mb-8 leading-relaxed" style={{color: colors.textColor}}>
            {message}
          </p>

          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{backgroundColor: colors.accent}}
            >
              Take Me Back!
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t mt-8" style={{backgroundColor: colors.footerBg}}>
        <div className="max-w-4xl mx-auto px-6 py-4 text-center">
          <p className="text-sm" style={{color: colors.footerText}}>
            © 2025 {personalInfo.name}
          </p>
        </div>
      </footer>
    </div>
  );
}