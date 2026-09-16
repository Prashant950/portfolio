import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen,
  Sparkles,
  Zap,
  ExternalLink
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function CertificationsEducation() {
  return (
    <section id="education" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <style>{`
          .edu-responsive-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 1140px;
            margin: 0 auto;
          }
          .edu-item-card {
            border-radius: 1.15rem;
            padding: 1.65rem 1.75rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .edu-item-card:hover {
            transform: translateY(-3px);
            border-color: var(--accent-cyan);
            box-shadow: 0 12px 28px rgba(0, 210, 255, 0.1);
          }
          @media (max-width: 900px) {
            .edu-responsive-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .edu-item-card {
              padding: 1.35rem 1.25rem !important;
            }
          }
        `}</style>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="originkit-pill"
            style={{ marginBottom: '0.85rem' }}
          >
            <GraduationCap size={14} />
            <span>BACKGROUND & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: '800', marginBottom: '0.65rem' }}
          >
            Education & <span className="gradient-text">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '0.94rem', lineHeight: '1.6' }}
          >
            Strong academic computer science foundation complemented with hands-on professional certifications.
          </motion.p>
        </div>

        <div className="edu-responsive-grid">
          {/* Left Column: Academic Degrees */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.35rem' }}>
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '0.65rem',
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--badge-border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                <BookOpen size={18} />
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0, color: 'var(--text-primary)' }}>
                Academic Degrees
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {educationData.map((edu, index) => {
                const isBTech = index === 0;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="glass-panel edu-item-card"
                    style={{
                      borderColor: isBTech ? 'var(--border-glow)' : 'var(--border-color)',
                      boxShadow: isBTech ? '0 8px 24px rgba(0, 210, 255, 0.08)' : 'none',
                    }}
                  >
                    {/* Top Accent Line for B.Tech */}
                    {isBTech && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'var(--accent-gradient)',
                        }}
                      />
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.55rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span
                        style={{
                          padding: '0.22rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'var(--badge-bg)',
                          border: '1px solid var(--badge-border)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <Zap size={12} />
                        {edu.score}
                      </span>

                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.35rem', color: 'var(--text-primary)', lineHeight: '1.35' }}>
                      {edu.degree}
                    </h4>

                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
                      {edu.institution}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                      <MapPin size={13} /> {edu.location}
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                      {edu.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Professional Certifications & Continuous Upskilling */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.35rem' }}>
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '0.65rem',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <Award size={18} />
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: 0, color: 'var(--text-primary)' }}>
                Professional Certifications
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certificationsData.map((cert, index) => {
                const isOngoing = cert.status === 'ongoing';
                const accentColor = isOngoing ? '#f59e0b' : '#10b981';
                const borderColor = isOngoing ? 'rgba(245, 158, 11, 0.35)' : 'rgba(16, 185, 129, 0.35)';
                const glowColor = isOngoing ? 'rgba(245, 158, 11, 0.08)' : 'rgba(16, 185, 129, 0.08)';

                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="glass-panel edu-item-card"
                    style={{
                      borderColor: borderColor,
                      boxShadow: `0 8px 24px ${glowColor}`,
                    }}
                  >
                    {/* Top Accent Strip */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: isOngoing
                          ? 'linear-gradient(90deg, #f59e0b 0%, #ff6b00 100%)'
                          : 'linear-gradient(90deg, #10b981 0%, #00d2ff 100%)',
                      }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span
                        style={{
                          padding: '0.22rem 0.65rem',
                          borderRadius: '9999px',
                          background: isOngoing ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                          border: `1px solid ${borderColor}`,
                          color: accentColor,
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        {isOngoing ? (
                          <>
                            <span 
                              style={{ 
                                width: '7px', 
                                height: '7px', 
                                borderRadius: '50%', 
                                backgroundColor: '#f59e0b', 
                                display: 'inline-block',
                                boxShadow: '0 0 8px #f59e0b'
                              }} 
                            />
                            {cert.badge}
                          </>
                        ) : (
                          <>
                            <ShieldCheck size={13} /> {cert.badge}
                          </>
                        )}
                      </span>

                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        {cert.issuer} • {cert.date}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                      {cert.title}
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.65rem' }}>
                      {cert.highlights.map((highlight, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                          <div style={{ marginTop: '3px', flexShrink: 0 }}>
                            <CheckCircle2 size={15} color={accentColor} />
                          </div>
                          <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags & Credential Link */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        flexWrap: 'wrap', 
                        gap: '0.75rem', 
                        marginTop: '1.15rem', 
                        paddingTop: '0.85rem', 
                        borderTop: '1px solid var(--border-subtle)' 
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: '600',
                              padding: '0.18rem 0.55rem',
                              borderRadius: '0.4rem',
                              background: 'var(--badge-bg)',
                              border: '1px solid var(--badge-border)',
                              color: 'var(--accent-cyan)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* External Credential Link Button if available */}
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            background: 'rgba(16, 185, 129, 0.12)',
                            border: '1px solid rgba(16, 185, 129, 0.35)',
                            color: '#10b981',
                            fontSize: '0.78rem',
                            fontWeight: '700',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#10b981';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.12)';
                            e.currentTarget.style.color = '#10b981';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <span>Verify Credential</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

