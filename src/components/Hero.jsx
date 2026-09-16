import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  MapPin,
  CheckCircle2,
  Zap,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

const roleKeywords = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "React Native Developer",
  "RESTful API Architect",
  "AWS S3 Cloud Specialist"
];

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roleKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00d2ff', '#0070f3', '#38bdf8', '#ffffff']
    });
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Responsive Grid layout for Hero */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <style>{`
            @media (max-width: 992px) {
              .hero-section {
                min-height: auto !important;
                padding-top: 5.5rem !important;
                padding-bottom: 2.5rem !important;
              }
              .hero-grid {
                grid-template-columns: 1fr !important;
                gap: 2.5rem !important;
                text-align: left;
              }
              .hero-photo-wrapper {
                margin-top: 1rem;
                margin-bottom: 2rem;
                display: flex;
                justifyContent: center;
              }
              .hero-photo-card {
                max-width: 290px !important;
              }
              .hero-photo-inner {
                height: 330px !important;
              }
              .hero-floating-badge-1 {
                right: -6px !important;
                top: -10px !important;
              }
              .hero-floating-badge-2 {
                left: -6px !important;
                bottom: -28px !important;
              }
            }
          `}</style>

          {/* Left Column: Headline & Bio & CTAs */}
          <div>
            {/* OriginKit Style Glowing Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '1rem' }}
            >
              <div className="originkit-pill">
                <span className="pulse-dot"></span>
                <span>THE MODERN FULL-STACK ENGINEER</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                fontWeight: '800',
                lineHeight: '1.22',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              <span style={{ display: 'block', color: 'var(--text-primary)' }}>
                Building Scalable Web
              </span>
              <span className="gradient-text" style={{ display: 'block' }}>
                Your Ideas Are Everywhere.
              </span>
              <span style={{ color: 'var(--accent-cyan)', display: 'block' }}>
                Your Code Should Be Flawless.
              </span>
            </motion.h1>

            {/* Rotating Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>Specialized in:</span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  color: 'var(--accent-cyan)',
                  background: 'var(--badge-bg)',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--badge-border)',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}
              >
                {roleKeywords[currentRoleIndex]}
              </motion.span>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.65',
                marginBottom: '1.75rem',
                maxWidth: '540px',
              }}
            >
              {personalData.bio}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.75rem',
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={triggerConfetti}
                style={{ fontSize: '0.92rem', padding: '0.75rem 1.6rem' }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              {/* <button
                onClick={onOpenResume}
                className="btn-secondary"
                style={{ fontSize: '0.92rem', padding: '0.75rem 1.4rem' }}
              >
                <Download size={17} />
                <span>View / Download Resume</span> */}
              {/* </button> */}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>Immediate Joining</span>
              </div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border-color)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--accent-cyan)" />
                <span>{personalData.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Raised Portrait Photo Card with Centered Frame */}
          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Outer Glowing Gradient Ring */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '380px',
                height: '420px',
                borderRadius: '2rem',
                background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.35) 0%, rgba(0, 112, 243, 0.2) 50%, transparent 100%)',
                filter: 'blur(30px)',
                opacity: 0.75,
                zIndex: 1,
              }}
            />

            {/* User Photo Frame Container */}
            <div
              className="glass-panel hero-photo-card"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '340px',
                borderRadius: '1.5rem',
                padding: '0.65rem',
                overflow: 'visible',
              }}
            >
              <div
                className="hero-photo-inner"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '370px',
                  borderRadius: '1.15rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(3, 7, 18, 0.95) 100%)',
                }}
              >
                {/* Real User Photo centered on subject pose */}
                <img
                  src="/prashant_photo.png"
                  alt="Prashant Kumar Singh - Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 46%',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Subtle dark bottom vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 55%, rgba(3, 7, 18, 0.85) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Card Bottom Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    right: '0.75rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 2,
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
                      Prashant Kumar Singh
                    </h4>
                    <p style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', margin: 0 }}>
                      MERN & React Native Dev
                    </p>
                  </div>
                  <div className="pulse-dot" />
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                className="hero-floating-badge-1"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.85rem',
                  padding: '0.5rem 0.85rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  zIndex: 3,
                }}
              >
                <div style={{ background: 'rgba(0, 210, 255, 0.15)', padding: '0.3rem', borderRadius: '0.4rem' }}>
                  <Zap size={15} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    MERN & Expo
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    Production Ready
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Positioned lower to never overlap the name tag */}
              <motion.div
                className="hero-floating-badge-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: '-32px',
                  left: '-12px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.85rem',
                  padding: '0.5rem 0.85rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  zIndex: 4,
                }}
              >
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '0.3rem', borderRadius: '0.4rem' }}>
                  <Sparkles size={15} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    2+ Years Exp
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    Active Engineer
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
