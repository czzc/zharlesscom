'use client';
import React from 'react';
import { colors } from '../../constants/colors';
import { personalInfo } from '../../data/personalInfo';
import Header from '../Header';
import Footer from '../Footer';
import { useFont } from '../../contexts/FontContext';

export default function HomePage() {
  const { getH1FontClass } = useFont();

  return (
    <div className="page-container">
      <Header isHomePage={true} />

      <main id="main-content" className="main-content" role="main">
        <section className="hero-section">
          <div className="avatar-container">
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} profile picture`}
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg ring-4 ring-accent"
              loading="eager"
            />
          </div>

          <h1 className={`text-4xl font-bold mb-2 pb-5 text-hero ${getH1FontClass()}`}>
            {personalInfo.name}
          </h1>

          <div className="bio-section">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="bio-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </main>

      <Footer showSocialLinks={true} showPiLink={true} />
    </div>
  );
}