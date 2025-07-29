'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/personalInfo';
import { useLightAnimationsEnabled, useHeavyAnimationsEnabled } from '../utils/performance';
import { layoutStyles } from '../utils/styles';
import styles from './Header.module.css';

export default function Header({ isHomePage = false }) {
  const [isCrtOn, setIsCrtOn] = useState(true);
  const autoTurnOnTimer = useRef(null);
  const lightAnimationsEnabled = useLightAnimationsEnabled();
  const heavyAnimationsEnabled = useHeavyAnimationsEnabled();

  const handleLogoHover = useCallback((e) => {
    e.target.classList.add(styles.logoShake);
    setTimeout(() => {
      e.target.classList.remove(styles.logoShake);
    }, 600);
  }, []);

  const toggleCrt = useCallback(() => {
    setIsCrtOn(!isCrtOn);
    
    // Track LED click in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'led_click', {
        event_category: 'engagement',
        event_label: isCrtOn ? 'led_turn_off' : 'led_turn_on'
      });
    }
  }, [isCrtOn]);

  useEffect(() => {
    // Clear any existing timer
    if (autoTurnOnTimer.current) {
      clearTimeout(autoTurnOnTimer.current);
      autoTurnOnTimer.current = null;
    }

    // Set timer only when CRT is off
    if (!isCrtOn) {
      autoTurnOnTimer.current = setTimeout(() => {
        setIsCrtOn(true);
      }, 4000);
    }

    // Cleanup function
    return () => {
      if (autoTurnOnTimer.current) {
        clearTimeout(autoTurnOnTimer.current);
        autoTurnOnTimer.current = null;
      }
    };
  }, [isCrtOn]);

  const logoContent = useMemo(() => (
    <div className={`${styles.crtMonitor} ${isCrtOn ? styles.crtOn : styles.crtOff}`}>
      <span className={`${styles.led} ${isCrtOn ? styles.ledOn : styles.ledOff}`} onClick={toggleCrt}></span>
      <div className={styles.crtScreen}>
        <div className={`${styles.crtLogo} ${heavyAnimationsEnabled ? styles.flicker : ''}`}>
          <img
            src={personalInfo.logo}
            alt={personalInfo.name}
            className={`${isHomePage ? 'w-32 h-32' : 'w-16 h-16'}`}
            onMouseEnter={handleLogoHover}
          />
          {lightAnimationsEnabled && <div className={`absolute inset-0 z-0 opacity-10 pointer-events-none ${styles.scanlines}`}></div>}
        </div>
      </div>
    </div>
  ), [isCrtOn, isHomePage, toggleCrt, handleLogoHover, lightAnimationsEnabled, heavyAnimationsEnabled]);

  return (
    <header className={`relative border-b border-[#CDECCD] h-[150px] ${styles.headerBg}`} role="banner">
      <div className={`relative ${layoutStyles.container} flex center-align items-center h-full`}>
          {isHomePage ? logoContent : <Link href="/" aria-label="Return to home page">{logoContent}</Link>}
      </div>
    </header>
  );
}