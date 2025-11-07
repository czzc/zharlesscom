'use client';
import React, { useState, useEffect, useRef } from 'react';
import { colors } from '../../constants/colors';
import { personalInfo } from '../../data/personalInfo';
import Header from '../Header';
import Footer from '../Footer';
import { useFont } from '../../contexts/FontContext';
import styles from './HomePage.module.css';

export default function HomePage() {
  const { getH1FontClass } = useFont();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const avatarRef = useRef(null);
  const mainRef = useRef(null);

  // Mouse follow effect for background gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D tilt effect for avatar
  const handleAvatarMouseMove = (e) => {
    if (!avatarRef.current) return;

    const rect = avatarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    avatarRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleAvatarMouseLeave = () => {
    if (!avatarRef.current) return;
    avatarRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div className="page-container" style={{
      background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(205, 236, 205, 0.08), transparent 80%)`
    }}>
      {/* Floating background shapes */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <Header isHomePage={true} />

      <main
        id="main-content"
        className="main-content"
        role="main"
        ref={mainRef}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <section className="hero-section">
          <div
            className={`avatar-container ${styles.avatarWrapper}`}
            style={{
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            <div
              ref={avatarRef}
              className={styles.avatarTilt}
              onMouseMove={handleAvatarMouseMove}
              onMouseLeave={handleAvatarMouseLeave}
            >
              <img
                src={personalInfo.avatar}
                alt={`${personalInfo.name} profile picture`}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg ring-4 ring-accent"
                loading="eager"
              />
            </div>
          </div>

          <h1
            className={`text-4xl font-bold mb-2 pb-5 text-hero ${getH1FontClass()} ${styles.nameTitle}`}
            style={{
              transform: `translateY(${scrollY * -0.15}px)`
            }}
          >
            {personalInfo.name}
          </h1>

          <div className={`bio-section ${styles.bioContainer}`}>
            {personalInfo.bio.map((paragraph, index) => (
              <div
                key={index}
                className={`${styles.bioCard} ${styles[`bioCard${index + 1}`]}`}
                style={{
                  transform: `translateY(${scrollY * (0.05 * (index + 1))}px)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <p className="bio-paragraph">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer showSocialLinks={true} showPiLink={true} />
    </div>
  );
}