import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Code2,
  Clock
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="project-modal-overlay"
        onClick={onClose}
      >
        <style>{`
          .project-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.25rem;
            background: rgba(3, 7, 18, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .project-modal-card {
            position: relative;
            width: 100%;
            max-width: 760px;
            max-height: 88vh;
            overflow-y: auto;
            border-radius: 1.25rem;
            padding: 1.85rem;
            background: var(--bg-card);
            border: 1px solid var(--border-glow);
            box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7);
            -webkit-overflow-scrolling: touch;
          }
          .project-modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 20;
            backdrop-filter: blur(8px);
            transition: all 0.2s ease;
          }
          .project-modal-close-btn:hover {
            background: var(--accent-cyan);
            color: #000000;
            transform: scale(1.05);
          }
          .project-modal-image-box {
            width: 100%;
            aspect-ratio: 2.12 / 1;
            max-height: 340px;
            border-radius: 0.75rem;
            overflow: hidden;
            margin-bottom: 1.25rem;
            border: 1px solid var(--border-subtle);
            background: #080d1a;
          }
          .project-modal-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #060913;
            object-position: center;
          }
          .project-modal-title {
            font-size: clamp(1.2rem, 3.5vw, 1.55rem);
            font-weight: 800;
            line-height: 1.28;
            letter-spacing: -0.01em;
            color: var(--text-primary);
            margin-bottom: 0.3rem;
          }
          .project-modal-subtitle {
            font-size: clamp(0.82rem, 2.5vw, 0.92rem);
            color: var(--accent-cyan);
            font-weight: 600;
            line-height: 1.4;
          }
          .project-modal-desc {
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.35rem;
          }
          .project-modal-cta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
            border-top: 1px solid var(--border-subtle);
            padding-top: 1.15rem;
            margin-top: 1.5rem;
          }
          .modal-cta-primary {
            flex: 1 1 180px;
            min-height: 42px;
            padding: 0.65rem 1.15rem;
            font-size: 0.86rem;
            font-weight: 700;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.45rem;
            border-radius: 9999px;
            white-space: nowrap;
          }
          .modal-cta-secondary {
            min-height: 42px;
            padding: 0.65rem 1.15rem;
            font-size: 0.86rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.45rem;
            border-radius: 9999px;
            white-space: nowrap;
          }
          @media (max-width: 640px) {
            .project-modal-overlay {
              padding: 0.75rem 0.5rem !important;
            }
            .project-modal-card {
              padding: 1.25rem 1rem 1.15rem 1rem !important;
              border-radius: 1.1rem !important;
              max-height: 92vh !important;
            }
            .project-modal-close-btn {
              top: 0.65rem !important;
              right: 0.65rem !important;
              width: 2rem !important;
              height: 2rem !important;
            }
            .project-modal-image-box {
              max-height: 185px !important;
              min-height: 130px !important;
              margin-bottom: 1rem !important;
              border-radius: 0.6rem !important;
            }
            .project-modal-title {
              font-size: 1.18rem !important;
              line-height: 1.3 !important;
              margin-bottom: 0.25rem !important;
            }
            .project-modal-subtitle {
              font-size: 0.82rem !important;
            }
            .project-modal-desc {
              font-size: 0.84rem !important;
              margin-bottom: 1.1rem !important;
              line-height: 1.55 !important;
            }
            .project-modal-cta-row {
              gap: 0.5rem !important;
              padding-top: 0.95rem !important;
              margin-top: 1.15rem !important;
            }
            .modal-cta-primary {
              flex: 1 1 100% !important;
              min-height: 40px !important;
              font-size: 0.84rem !important;
            }
            .modal-cta-secondary {
              flex: 1 !important;
              min-height: 40px !important;
              padding: 0.5rem 0.75rem !important;
              font-size: 0.82rem !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel project-modal-card"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="project-modal-close-btn"
          >
            <X size={16} />
          </button>

          {/* Top Screenshot Preview if available */}
          {project.image && (
            <div className="project-modal-image-box">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-modal-image"
              />
            </div>
          )}

          {/* Header Info */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
              <span 
                style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: '700', 
                  padding: '0.18rem 0.55rem', 
                  borderRadius: '9999px',
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--badge-border)',
                  color: 'var(--badge-text)'
                }}
              >
                {project.badge}
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                {project.category}
              </span>
            </div>

            <h2 className="project-modal-title">
              {project.title}
            </h2>
            <p className="project-modal-subtitle">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="project-modal-desc">
            {project.description}
          </p>

          {/* Key Metrics & Stats */}
          {project.stats && (
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Zap size={13} color="var(--accent-cyan)" />
                Key Project Highlights
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {Object.entries(project.stats).map(([key, value]) => (
                  <span
                    key={key}
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: '600',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '0.45rem',
                      background: 'rgba(0, 210, 255, 0.08)',
                      border: '1px solid rgba(0, 210, 255, 0.25)',
                      color: 'var(--accent-cyan)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Features */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Sparkles size={13} color="var(--accent-cyan)" />
                Architecture & Key Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div style={{ marginTop: '2px', flexShrink: 0 }}>
                      <CheckCircle2 size={14} color="var(--accent-cyan)" />
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.76rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Code2 size={13} color="var(--accent-cyan)" />
                Technologies Applied
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.75rem',
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
          <div className="project-modal-cta-row">
            {project.isComingSoon ? (
              <div
                className="modal-cta-primary"
                style={{
                  background: 'rgba(236, 72, 153, 0.15)',
                  border: '1px solid rgba(236, 72, 153, 0.45)',
                  color: '#f472b6',
                }}
              >
                <Clock size={15} />
                <span>Launching Soon 🚀</span>
              </div>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary modal-cta-primary"
              >
                <ExternalLink size={14} />
                <span>Open Live Website</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary modal-cta-secondary"
            >
              <GithubIcon size={14} />
              <span>Source</span>
            </a>

            <button
              onClick={onClose}
              className="btn-secondary modal-cta-secondary"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
