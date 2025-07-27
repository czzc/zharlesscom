'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors } from '../../constants/colors';
import { not_found_messages } from '../../constants/not_found_messages';
import Header from '../Header';
import Footer from '../Footer';
import { useFont } from '../../contexts/FontContext';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const [message, setMessage] = useState('');
  const [isGlitchy, setIsGlitchy] = useState(false);
  const { getH1FontClass } = useFont();

  useEffect(() => {
    const selectedMessage = not_found_messages[Math.floor(Math.random() * not_found_messages.length)];
    setMessage(selectedMessage);
    const shouldBeGlitchy = selectedMessage.includes('Praetorian');
    if(shouldBeGlitchy) {
      setIsGlitchy(true);
    }
  }, []);

  return (
    <div className="page-container flex flex-col">
      <main id="main-content" className="flex-1 flex items-center justify-center px-6" role="main">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 
              className={`text-9xl font-bold mb-4 text-accent-color ${getH1FontClass()} ${isGlitchy ? styles.glitch : ''}`} 
              data-text="404"
              aria-label="Error 404 - Page not found"
            >
              404
            </h1>
          </div>

          <p className="text-xl mb-8 leading-relaxed text-main">
            {message}
          </p>

          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-header-bg bg-accent transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Return to home page"
            >
              Take Me Back!
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}