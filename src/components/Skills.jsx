import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Disciplines', icon: <Sparkles size={14} /> },
    { id: 'frontend', label: 'Frontend & Mobile', icon: <Code2 size={14} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={14} /> },
    { id: 'databases', label: 'Databases', icon: <Database size={14} /> },
    { id: 'cloud', label: 'Cloud & Tools', icon: <Cloud size={14} /> },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'frontend') return skillsData.frontend;
    if (activeTab === 'backend') return skillsData.backend;
    if (activeTab === 'databases') return skillsData.databases;
    if (activeTab === 'cloud') return skillsData.cloudAndTools;
    return [
      ...skillsData.frontend,
      ...skillsData.backend,
      ...skillsData.databases,
      ...skillsData.cloudAndTools
    ];
  };

  return (
    <section id="skills" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        <style>{`
          @media (max-width: 640px) {
            .skills-responsive-grid {
              grid-template-columns: 1fr !important;
              gap: 0.85rem !important;
            }
            .skill-card-item {
              padding: 1rem 1.15rem !important;
            }
            .soft-skills-grid {
              grid-template-columns: 1fr !important;
              gap: 0.65rem !important;
            }
            .soft-skills-box {
              padding: 1.35rem !important;
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
            style={{ marginBottom: '1rem' }}
          >
            <Zap size={14} />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', fontWeight: '800', marginBottom: '0.75rem' }}
          >
            Skills & <span className="gradient-text">Core Competencies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '0.96rem', lineHeight: '1.6' }}
          >
            Extensive toolset honed across production client engagements and scalable full-stack builds.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  background: isActive ? 'var(--badge-bg)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div 
          className="skills-responsive-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {getSkillsToDisplay().map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="glass-panel skill-card-item"
              style={{
                borderRadius: '1rem',
                padding: '1.15rem 1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '0.35rem',
                    background: 'var(--badge-bg)',
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--badge-border)',
                  }}
                >
                  {skill.tag}
                </span>
              </div>

              {/* Progress bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  <span>Proficiency</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>{skill.level}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    borderRadius: '9999px',
                    background: 'var(--bg-secondary)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: '9999px',
                      background: 'var(--accent-gradient)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Work Ethic */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel soft-skills-box"
          style={{
            borderRadius: '1.25rem',
            padding: '1.75rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
          }}
        >
          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>Engineering Mindset & Soft Skills</span>
          </h3>

          <div className="soft-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
            {skillsData.softSkills.map((softSkill, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '0.65rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <CheckCircle2 size={15} color="#10b981" />
                <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  {softSkill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
