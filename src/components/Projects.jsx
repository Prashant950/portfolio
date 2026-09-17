import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles,
  Info
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Web Apps'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getBadgeStyle = (badge) => {
    const text = (badge || '').toLowerCase();
    if (text.includes('saas') || text.includes('enterprise')) {
      return {
        background: 'rgba(0, 210, 255, 0.12)',
        borderColor: 'rgba(0, 210, 255, 0.35)',
        color: '#00d2ff',
      };
    }
    if (text.includes('service')) {
      return {
        background: 'rgba(245, 158, 11, 0.12)',
        borderColor: 'rgba(245, 158, 11, 0.35)',
        color: '#f59e0b',
      };
    }
    if (text.includes('dating') || text.includes('social')) {
      return {
        background: 'rgba(244, 63, 94, 0.12)',
        borderColor: 'rgba(244, 63, 94, 0.35)',
        color: '#f43f5e',
      };
    }
    if (text.includes('mobility') || text.includes('fintech')) {
      return {
        background: 'rgba(16, 185, 129, 0.12)',
        borderColor: 'rgba(16, 185, 129, 0.35)',
        color: '#10b981',
      };
    }
    if (text.includes('commerce') || text.includes('iot')) {
      return {
        background: 'rgba(168, 85, 247, 0.12)',
        borderColor: 'rgba(168, 85, 247, 0.35)',
        color: '#a855f7',
      };
    }
    if (text.includes('privacy') || text.includes('utility')) {
      return {
        background: 'rgba(20, 184, 166, 0.12)',
        borderColor: 'rgba(20, 184, 166, 0.35)',
        color: '#14b8a6',
      };
    }
    return {
      background: 'rgba(56, 189, 248, 0.12)',
      borderColor: 'rgba(56, 189, 248, 0.35)',
      color: '#38bdf8',
    };
  };

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <style>{`
          .projects-responsive-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
            gap: 1.75rem;
            max-width: 1160px;
            margin: 0 auto;
          }
          .project-card-image-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            min-height: 160px;
            max-height: 220px;
            overflow: hidden;
            background: #0b0f19;
            border-bottom: 1px solid var(--border-subtle);
          }
          .project-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            transition: transform 0.45s ease;
          }
          .project-card-glass:hover .project-card-image {
            transform: scale(1.04);
          }
          .project-card-body {
            padding: 1.35rem 1.45rem 1.15rem 1.45rem;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .project-card-footer {
            padding: 0.85rem 1.25rem;
            border-top: 1px solid var(--border-subtle);
            background: rgba(0, 0, 0, 0.12);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
          }
          .project-btn-details {
            height: 38px;
            padding: 0 0.95rem;
            font-size: 0.82rem;
            font-weight: 600;
            border-radius: 0.55rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .project-btn-group-right {
            display: flex;
            align-items: center;
            gap: 0.45rem;
          }
          .project-btn-github {
            width: 38px;
            height: 38px;
            border-radius: 0.55rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: var(--text-primary) !important;
            text-decoration: none;
            transition: all 0.2s ease;
          }
          .project-btn-live {
            height: 38px;
            padding: 0 1rem;
            font-size: 0.82rem;
            font-weight: 700;
            border-radius: 0.55rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            white-space: nowrap;
            text-decoration: none;
            transition: all 0.2s ease;
          }
          @media (max-width: 640px) {
            .projects-responsive-grid {
              grid-template-columns: 1fr !important;
              gap: 1.35rem !important;
            }
            .project-card-body {
              padding: 1.15rem 1.15rem 0.95rem 1.15rem !important;
            }
            .project-card-footer {
              padding: 0.75rem 0.95rem !important;
              gap: 0.45rem !important;
            }
            .project-btn-details {
              height: 36px !important;
              flex: 1 !important;
              min-width: 0 !important;
              padding: 0 0.5rem !important;
              font-size: 0.8rem !important;
            }
            .project-btn-group-right {
              flex: 1.35 !important;
              min-width: 0 !important;
              gap: 0.35rem !important;
            }
            .project-btn-github {
              width: 36px !important;
              height: 36px !important;
            }
            .project-btn-live {
              height: 36px !important;
              flex: 1 !important;
              min-width: 0 !important;
              padding: 0 0.6rem !important;
              font-size: 0.8rem !important;
            }
          }
          @media (max-width: 380px) {
            .project-card-footer {
              padding: 0.65rem 0.75rem !important;
              gap: 0.3rem !important;
            }
            .project-btn-details {
              padding: 0 0.4rem !important;
              font-size: 0.75rem !important;
            }
            .project-btn-live {
              padding: 0 0.45rem !important;
              font-size: 0.75rem !important;
            }
            .project-btn-github {
              width: 34px !important;
              height: 34px !important;
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
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', fontWeight: '800', marginBottom: '0.65rem' }}
          >
            Featured <span className="gradient-text">Engineering Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '0.94rem', lineHeight: '1.6' }}
          >
            Production web and mobile applications with live deployments, real-time architectures, payment gateways, and custom backend systems.
          </motion.p>
        </div>

        {/* Filter Categories Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  background: isActive ? 'var(--badge-bg)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-responsive-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const badgeStyle = getBadgeStyle(project.badge);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="glass-panel project-card-glass"
                  style={{
                    borderRadius: '1.15rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Top Image Preview Banner (Clean without overlay badges) */}
                  {project.image ? (
                    <div className="project-card-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-card-image"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div 
                      style={{ 
                        height: '150px', 
                        background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1) 0%, rgba(0, 112, 243, 0.15) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid var(--border-subtle)',
                      }}
                    >
                      <FolderGit2 size={38} color="var(--accent-cyan)" opacity={0.65} />
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="project-card-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                      <span style={{ fontSize: '0.76rem', color: 'var(--accent-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {project.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.24rem)', fontWeight: '800', marginBottom: '0.3rem', lineHeight: '1.35', color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '0.85rem' }}>
                      {project.subtitle}
                    </h4>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Badge at Bottom with distinctive color */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: '700',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          border: `1px solid ${badgeStyle.borderColor}`,
                          background: badgeStyle.background,
                          color: badgeStyle.color,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: badgeStyle.color, display: 'inline-block' }} />
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer & Action Buttons */}
                  <div className="project-card-footer">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-secondary project-btn-details"
                    >
                      <Info size={14} />
                      <span>Details</span>
                    </button>

                    <div className="project-btn-group-right">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary project-btn-github"
                        title="View GitHub Source"
                      >
                        <GithubIcon size={16} />
                      </a>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary project-btn-live"
                        title={`Open live website: ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


