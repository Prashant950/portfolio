import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Layers,
  Globe2,
  Terminal,
  Cpu
} from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  const getCompanyIcon = (id) => {
    switch (id) {
      case 'aiviqone':
        return <Globe2 size={17} />;
      case 'snow-fountain':
        return <Layers size={17} />;
      case 'pin-point':
        return <Cpu size={17} />;
      default:
        return <Terminal size={17} />;
    }
  };

  return (
    <section id="experience" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        <style>{`
          .exp-grid-2x2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            max-width: 1140px;
            margin: 0 auto;
          }
          .exp-grid-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.65rem 1.75rem;
            border-radius: 1.15rem;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .exp-grid-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-cyan);
            box-shadow: 0 12px 30px rgba(0, 210, 255, 0.12);
          }
          .exp-grid-card.current-job {
            border-color: var(--border-glow);
            box-shadow: 0 8px 24px rgba(0, 210, 255, 0.08);
          }
          @media (max-width: 860px) {
            .exp-grid-2x2 {
              grid-template-columns: 1fr !important;
              gap: 1.25rem !important;
            }
            .exp-grid-card {
              padding: 1.35rem 1.25rem !important;
            }
          }
        `}</style>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="originkit-pill"
            style={{ marginBottom: '0.85rem' }}
          >
            <Sparkles size={14} />
            <span>CAREER TRAJECTORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: '800', marginBottom: '0.65rem' }}
          >
            Work <span className="gradient-text">Experience</span> & Roles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '0.94rem', lineHeight: '1.6' }}
          >
            Hands-on engineering contributions delivering enterprise features, microservices, and modern UI systems.
          </motion.p>
        </div>

        {/* 2x2 Grid (2 Top, 2 Bottom) */}
        <div className="exp-grid-2x2">
          {workExperience.map((exp, idx) => {
            const isCurrent = exp.isCurrent;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`glass-panel exp-grid-card ${isCurrent ? 'current-job' : ''}`}
              >
                {/* Decorative Top Accent Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isCurrent ? '3px' : '2px',
                    background: isCurrent 
                      ? 'var(--accent-gradient)' 
                      : 'linear-gradient(90deg, rgba(56, 189, 248, 0.4), transparent)',
                  }}
                />

                {/* Top: Header Info */}
                <div>
                  {/* Badges Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '0.5rem',
                          background: isCurrent ? 'rgba(0, 210, 255, 0.15)' : 'var(--badge-bg)',
                          border: '1px solid var(--badge-border)',
                          color: 'var(--accent-cyan)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getCompanyIcon(exp.id)}
                      </span>
                      <span
                        style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          background: 'var(--badge-bg)',
                          border: '1px solid var(--badge-border)',
                          color: 'var(--badge-text)',
                          fontSize: '0.74rem',
                          fontWeight: '700',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Timeline Badge */}
                    {isCurrent ? (
                      <span 
                        className="originkit-pill"
                        style={{ 
                          padding: '0.22rem 0.65rem', 
                          fontSize: '0.74rem',
                          background: 'rgba(16, 185, 129, 0.12)',
                          borderColor: 'rgba(16, 185, 129, 0.3)',
                          color: '#10b981',
                        }}
                      >
                        <span className="pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                        {exp.period}
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.22rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'var(--badge-bg)',
                          border: '1px solid var(--badge-border)',
                          color: 'var(--badge-text)',
                          fontSize: '0.74rem',
                          fontWeight: '600',
                        }}
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {exp.role}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Building2 size={14} />
                      {exp.company}
                    </span>
                    <span style={{ color: 'var(--border-color)' }}>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List (3 concise points) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                    {exp.highlights.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                        <div style={{ marginTop: '3px', flexShrink: 0 }}>
                          <CheckCircle2 size={14} color="var(--accent-cyan)" />
                        </div>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tech Stack Ribbon */}
                <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.18rem 0.55rem',
                        borderRadius: '0.4rem',
                        background: 'var(--badge-bg)',
                        border: '1px solid var(--badge-border)',
                        color: 'var(--accent-cyan)',
                        fontSize: '0.72rem',
                        fontWeight: '600',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


