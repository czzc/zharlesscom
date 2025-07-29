'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { not_found_messages } from '../../constants/not_found_messages';
import PageLayout from '../PageLayout';
import { useFont } from '../../contexts/FontContext';
import { useAnimationsEnabled } from '../../utils/performance';
import { buttonStyles, layoutStyles } from '../../utils/styles';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const [message, setMessage] = useState('');
  const [isGlitchy, setIsGlitchy] = useState(false);
  const { getH1FontClass } = useFont();
  const animationsEnabled = useAnimationsEnabled();

  useEffect(() => {
    const selectedMessage = not_found_messages[Math.floor(Math.random() * not_found_messages.length)];
    setMessage(selectedMessage);
    const shouldBeGlitchy = selectedMessage.includes('Praetorian');
    
    if(shouldBeGlitchy && animationsEnabled) {
      setIsGlitchy(true);
    }
  }, [animationsEnabled]);

  return (
    <PageLayout>
      <div className={layoutStyles.centeredContent}>
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
            className={`inline-block px-8 py-3 ${buttonStyles.primary}`}
            aria-label="Return to home page"
          >
            Take Me Back!
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}