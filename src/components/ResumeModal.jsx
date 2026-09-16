import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData, workExperience, projects, skillsData, educationData, certificationsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 110,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          background: 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(16px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6)',
            overflow: 'hidden',
          }}
        >
          {/* Modal Header Bar */}
          <div
            style={{
              padding: '1.25rem 2rem',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="pulse-dot" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>
                Prashant Kumar Singh — Professional CV
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handleDownload}
                className="btn-primary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              >
                <Download size={15} />
                <span>Save / Print PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close"
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
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div
            id="printable-resume"
            style={{
              padding: '2.5rem',
              overflowY: 'auto',
              color: 'var(--text-primary)',
              lineHeight: '1.6',
            }}
          >
            {/* Resume Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
              <h1 style={{ fontSize: '2.2rem', fontWeight: '900', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                PRASHANT KUMAR SINGH
              </h1>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                MERN Stack Developer | Full Stack Engineer
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span><strong>Email:</strong> {personalData.email}</span>
                <span>•</span>
                <span><strong>Phone:</strong> {personalData.phones.join(', ')}</span>
                <span>•</span>
                <span><strong>Location:</strong> {personalData.location}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--accent-cyan)' }}>
                <a href={personalData.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>LinkedIn Profile</a>
                <a href={personalData.github} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>GitHub Profile</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Professional Summary
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
                {personalData.bio}
              </p>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Technical Skills
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li><strong>Frontend Technologies:</strong> React.js, React Native (Expo), HTML5, CSS3, Bootstrap 5, Tailwind CSS, jQuery</li>
                <li><strong>Backend Technologies:</strong> Node.js, Express.js, Python, Flask, RESTful APIs</li>
                <li><strong>Databases:</strong> MongoDB, PostgreSQL, Mongoose</li>
                <li><strong>Tools & Concepts:</strong> RESTful APIs, JWT Authentication, OTP Verification, Git, GitHub, AWS S3, Razorpay API</li>
                <li><strong>Soft Skills:</strong> Problem-Solving, Debugging, Time Management, Agile Adaptability</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Work Experience
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {workExperience.map((exp) => (
                  <div key={exp.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '800', fontSize: '1rem' }}>{exp.role}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>{exp.period}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      <em>{exp.company} | {exp.location}</em>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {projects.slice(0, 2).map((proj) => (
                  <div key={proj.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: '800', fontSize: '0.98rem' }}>{proj.title}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{proj.techStack.join(', ')}</span>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      {proj.features.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.35rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Education & Certifications
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <div>
                  <strong>B.Tech in Computer Science & Engineering</strong> — Rameshwaram Institute of Technology and Management, Lucknow (2019 – 2023) | CGPA: 7.1
                </div>
                <div>
                  <strong>Certified Web Developer</strong> — Edureka (Mastered React, Node, Express, AWS S3)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
