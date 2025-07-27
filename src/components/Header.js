'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { colors } from '../constants/colors';
import { personalInfo } from '../data/personalInfo';

export default function Header({ isHomePage = false }) {
  const [isCrtOn, setIsCrtOn] = useState(true);
  const autoTurnOnTimer = useRef(null);
  const handleLogoHover = (e) => {
    e.target.style.animation = 'shake 0.6s ease-out';
    setTimeout(() => {
      e.target.style.animation = 'none';
    }, 600);
  };

  const toggleCrt = () => {
    setIsCrtOn(!isCrtOn);
  };

  useEffect(() => {
    if (!isCrtOn) {
      // Set timer to auto turn on after 4 seconds
      autoTurnOnTimer.current = setTimeout(() => {
        setIsCrtOn(true);
      }, 4000);
    } else {
      // Clear timer if manually turned on
      if (autoTurnOnTimer.current) {
        clearTimeout(autoTurnOnTimer.current);
        autoTurnOnTimer.current = null;
      }
    }

    // Cleanup timer on unmount
    return () => {
      if (autoTurnOnTimer.current) {
        clearTimeout(autoTurnOnTimer.current);
      }
    };
  }, [isCrtOn]);

  const logoContent = (
    <div className={`crt-monitor ${isCrtOn ? 'crt-on' : 'crt-off'}`}>
      <span className={`led ${isCrtOn ? 'led-on' : 'led-off'}`} onClick={toggleCrt}></span>
      <div className="crt-screen">
        <div className={`crt-logo flicker`}>
          <img
            src={personalInfo.logo}
            alt={personalInfo.name}
            className={`${isHomePage ? 'w-32 h-32' : 'w-16 h-16'}`}
            onMouseEnter={handleLogoHover}
          />
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none scanlines"></div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative border-b border-[#CDECCD] h-[150px]" style={{backgroundColor: colors.headerBg}}>
      <div className="relative max-w-4xl mx-auto flex center-align items-center h-full">
          {isHomePage ? logoContent : <Link href="/">{logoContent}</Link>}
      </div>
    </header>
  );
}