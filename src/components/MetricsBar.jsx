import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, FolderGit2, GitBranch, Zap } from 'lucide-react';
import { personalData } from '../data/portfolioData';

function AnimatedCounter({ value, duration = 1.8 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the value
    const isPercent = value.includes('%');
    const isPlus = value.includes('+');
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));

    if (isNaN(numericPart)) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericPart * easeOut;

      if (isPercent) {
        setDisplayValue(`${current.toFixed(1)}%`);
      } else {
        const rounded = Math.floor(current);
        setDisplayValue(`${rounded}${isPlus ? '+' : ''}`);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function MetricsBar() {
  const icons = {
    Briefcase: <Briefcase size={20} color="var(--accent-cyan)" />,
    FolderGit2: <FolderGit2 size={20} color="var(--accent-cyan)" />,
    GitBranch: <GitBranch size={20} color="var(--accent-cyan)" />,
    Zap: <Zap size={20} color="var(--accent-cyan)" />,
  };

  return (
    <section 
      id="metrics"
      style={{
        position: 'relative',
        padding: '2rem 0',
        zIndex: 10,
      }}
    >
      <div className="container">
        <style>{`
          .metric-item-card {
            border-radius: 1.15rem;
            padding: 1.25rem 1.45rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: default;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .metric-item-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-cyan);
            box-shadow: 0 10px 25px rgba(0, 210, 255, 0.12);
          }
          @media (max-width: 640px) {
            .metrics-responsive-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.85rem !important;
            }
            .metric-item-card {
              padding: 1rem 0.85rem !important;
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.5rem !important;
            }
            .metric-item-icon {
              width: 2.5rem !important;
              height: 2.5rem !important;
              margin: 0 auto;
            }
            .metric-item-val {
              font-size: 1.25rem !important;
            }
            .metric-item-lbl {
              font-size: 0.74rem !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="metrics-responsive-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.15rem',
          }}
        >
          {personalData.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="glass-panel metric-item-card"
            >
              <div
                className="metric-item-icon"
                style={{
                  width: '2.85rem',
                  height: '2.85rem',
                  borderRadius: '0.75rem',
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--badge-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {icons[metric.icon]}
              </div>
              <div>
                <div 
                  className="metric-item-val gradient-text"
                  style={{ fontSize: '1.45rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', lineHeight: '1.2' }}
                >
                  <AnimatedCounter value={metric.value} />
                </div>
                <div 
                  className="metric-item-lbl"
                  style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}
                >
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

