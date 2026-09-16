import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        padding: '4.5rem 0 2rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          .footer-cta-card {
            border-radius: 1.25rem;
            padding: 2.25rem 2.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-glow);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-bottom: 3.5rem;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25);
          }
          .footer-main-grid {
            display: grid;
            grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
            gap: 2.5rem;
            margin-bottom: 3rem;
          }
          .footer-link-item {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.88rem;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
          }
          .footer-link-item:hover {
            color: var(--accent-cyan);
            transform: translateX(3px);
          }
          .footer-social-btn {
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 0.55rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-primary);
            text-decoration: none;
            transition: all 0.2s ease;
          }
          .footer-social-btn:hover {
            border-color: var(--accent-cyan);
            color: var(--accent-cyan);
            transform: translateY(-2px);
          }
          @media (max-width: 992px) {
            .footer-main-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2rem !important;
            }
          }
          @media (max-width: 640px) {
            .footer-cta-card {
              padding: 1.5rem !important;
              flex-direction: column !important;
              text-align: center !important;
            }
            .footer-cta-actions {
              width: 100% !important;
              justify-content: center !important;
            }
            .footer-main-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .footer-bottom-strip {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 1rem !important;
            }
          }
        `}</style>

       

        {/* 4-Column Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Col 1: Brand & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: '0.65rem',
                  background: 'linear-gradient(135deg, #0070f3 0%, #00d2ff 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                }}
              >
                PS
              </div>
              <div>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', display: 'block', lineHeight: '1.2' }}>
                  Prashant <span style={{ color: 'var(--accent-cyan)' }}>Singh</span>
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Full Stack Engineer & MERN Specialist
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.15rem' }}>
              Designing and scaling enterprise web applications, real-time microservices, and secure digital platforms.
            </p>

            {/* Live IST Time Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                fontSize: '0.76rem',
                color: 'var(--text-secondary)',
              }}
            >
              <Clock size={13} color="var(--accent-cyan)" />
              <span>Lucknow, IN: <strong>{time || '12:00 PM'} (IST)</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.1rem', color: 'var(--text-primary)' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="#home" className="footer-link-item">Home Overview</a>
              <a href="#about" className="footer-link-item">Architecture Bento</a>
              <a href="#experience" className="footer-link-item">Work Experience</a>
              <a href="#projects" className="footer-link-item">Featured Projects</a>
              <a href="#skills" className="footer-link-item">Technical Stack</a>
              <a href="#education" className="footer-link-item">Education & Degrees</a>
            </div>
          </div>

          {/* Col 3: Core Engineering Competencies */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.1rem', color: 'var(--text-primary)' }}>
              Core Expertise
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <span className="footer-link-item" style={{ cursor: 'default' }}>MERN Full-Stack</span>
              <span className="footer-link-item" style={{ cursor: 'default' }}>React Native Mobile</span>
              <span className="footer-link-item" style={{ cursor: 'default' }}>RESTful APIs & Microservices</span>
              <span className="footer-link-item" style={{ cursor: 'default' }}>JWT & OTP Security</span>
              <span className="footer-link-item" style={{ cursor: 'default' }}>AWS S3 Cloud Pipelines</span>
              <span className="footer-link-item" style={{ cursor: 'default' }}>Razorpay Payment APIs</span>
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.1rem', color: 'var(--text-primary)' }}>
              Direct Channels
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem', fontSize: '0.86rem' }}>
              <a 
                href={`mailto:${personalData.email}`} 
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Mail size={14} color="var(--accent-cyan)" />
                <span>{personalData.email}</span>
              </a>

              <a 
                href={`tel:${personalData.phones[0]}`}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Phone size={14} color="var(--accent-cyan)" />
                <span>{personalData.phones[0]}</span>
              </a>

              <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={14} color="var(--accent-cyan)" />
                <span>{personalData.location}</span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div style={{ display: 'flex', gap: '0.55rem' }}>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="GitHub Repositories"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={`https://wa.me/${personalData.whatsapp}?text=Hi%20Prashant,%20I%20am%20reaching%20out%20regarding%20an%20engineering%20opportunity.`}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                style={{ color: '#25D366' }}
                title="WhatsApp Direct"
              >
                <WhatsappIcon size={16} />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="footer-social-btn"
                title="Direct Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

