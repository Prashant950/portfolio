import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Sparkles, 
  ArrowUpRight,
  ChevronRight,
  PhoneCall,
  Mail,
  Home,
  Layers,
  Briefcase,
  FolderGit2,
  Zap,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', icon: <Home size={18} /> },
    { label: 'About', href: '#about', icon: <Layers size={18} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
    { label: 'Projects', href: '#projects', icon: <FolderGit2 size={18} /> },
    { label: 'Skills', href: '#skills', icon: <Zap size={18} /> },
    { label: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
    { label: 'Contact', href: '#contact', icon: <MessageSquare size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detector
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          width: '100%',
          padding: isScrolled ? '0.65rem 0' : '1.1rem 0',
          backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div 
          className="container"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Logo */}
          <a 
            href="#home" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', color: 'inherit', flexShrink: 0 }}
          >
            <div 
              style={{
                width: '2.4rem',
                height: '2.4rem',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0070f3 0%, #00d2ff 100%)',
                color: '#ffffff',
                boxShadow: '0 0 15px rgba(0, 210, 255, 0.4)',
                fontWeight: '800',
                fontSize: '0.95rem'
              }}
            >
              <span>PS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '800', fontSize: '1rem', lineHeight: '1.2' }}>
                Prashant <span style={{ color: 'var(--accent-cyan)' }}>Singh</span>
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="pulse-dot"></span> MERN Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.6rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <style>{`
              @media (min-width: 992px) {
                .desktop-nav { display: flex !important; }
                .desktop-cta-btn { display: inline-flex !important; }
                .mobile-toggle-btn { display: none !important; }
              }
            `}</style>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--badge-bg)' : 'transparent',
                    border: isActive ? '1px solid var(--badge-border)' : '1px solid transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                width: '2.4rem',
                height: '2.4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              {theme === 'dark' ? (
                <Sun size={17} color="#00d2ff" />
              ) : (
                <Moon size={17} color="#00264d" />
              )}
            </button>

            {/* Desktop-only Let's Talk Button */}
            <a
              href="#contact"
              className="btn-primary desktop-cta-btn"
              style={{
                display: 'none',
                padding: '0.55rem 1.25rem',
                fontSize: '0.875rem',
                flexShrink: 0
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                width: '2.4rem',
                height: '2.4rem',
                borderRadius: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-Over Navigation Drawer (Right to Left) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 999,
              }}
            />

            {/* Right Sliding Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(330px, 85vw)',
                height: '100vh',
                background: 'var(--bg-secondary)',
                borderLeft: '1px solid var(--border-color)',
                boxShadow: '-15px 0 35px rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                overflowY: 'auto',
              }}
            >
              {/* Drawer Top Bar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div 
                      style={{
                        width: '2.2rem',
                        height: '2.2rem',
                        borderRadius: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #0070f3 0%, #00d2ff 100%)',
                        color: '#ffffff',
                        fontWeight: '800',
                        fontSize: '0.9rem'
                      }}
                    >
                      PS
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: '800', margin: 0 }}>
                        Prashant Singh
                      </h3>
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>
                        Navigation Menu
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close Navigation Menu"
                    style={{
                      width: '2.2rem',
                      height: '2.2rem',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.75rem',
                          fontSize: '0.95rem',
                          fontWeight: '600',
                          color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                          background: isActive ? 'var(--badge-bg)' : 'transparent',
                          border: isActive ? '1px solid var(--badge-border)' : '1px solid transparent',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                            {link.icon}
                          </span>
                          <span>{link.label}</span>
                        </div>
                        <ChevronRight size={16} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom CTAs & Socials */}
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.95rem',
                    justifyContent: 'center'
                  }}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    fontSize: '0.9rem',
                    justifyContent: 'center'
                  }}
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </button>

                {/* Direct Social Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: '0.5rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <LinkedinIcon size={16} />
                  </a>

                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: '0.5rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <GithubIcon size={16} />
                  </a>

                  <a
                    href={`https://wa.me/${personalData.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: '0.5rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <PhoneCall size={16} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
