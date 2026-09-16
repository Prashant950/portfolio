import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  FolderGit2,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          background: 'rgba(3, 7, 18, 0.82)',
          backdropFilter: 'blur(12px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '1.35rem',
            padding: '2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.2s ease',
            }}
          >
            <X size={17} />
          </button>

          {/* Top Screenshot Preview if available */}
          {project.image && (
            <div 
              style={{ 
                width: '100%', 
                height: '220px', 
                borderRadius: '0.85rem', 
                overflow: 'hidden', 
                marginBottom: '1.5rem',
                border: '1px solid var(--border-subtle)',
                background: '#0b0f19'
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
              />
            </div>
          )}

          {/* Header */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span 
                style={{ 
                  fontSize: '0.74rem', 
                  fontWeight: '700', 
                  padding: '0.2rem 0.65rem', 
                  borderRadius: '9999px',
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--badge-border)',
                  color: 'var(--badge-text)'
                }}
              >
                {project.badge}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                {project.category}
              </span>
            </div>

            <h2 style={{ fontSize: '1.65rem', fontWeight: '800', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Project Architecture & Metrics Stats */}
          {project.stats && (
            <div style={{ marginBottom: '1.65rem' }}>
              <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Zap size={14} color="var(--accent-cyan)" />
                Key Metrics & Architecture Attributes
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {Object.entries(project.stats).map(([key, value]) => (
                  <span
                    key={key}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(0, 210, 255, 0.08)',
                      border: '1px solid rgba(0, 210, 255, 0.25)',
                      color: 'var(--accent-cyan)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Architectural Features */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '1.65rem' }}>
              <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} color="var(--accent-cyan)" />
                Architectural Highlights & Modules
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {project.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.55' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Code2 size={14} color="var(--accent-cyan)" />
                Technologies & Libraries Applied
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.28rem 0.75rem',
                      borderRadius: '0.45rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ flex: 1, minWidth: '170px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
            >
              <ExternalLink size={15} />
              <span>Open Live Website</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.65rem 1.15rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem' }}
            >
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>

            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

