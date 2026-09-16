import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  Cloud, 
  CreditCard, 
  Sparkles
} from 'lucide-react';

export default function BentoHighlights() {
  const bentoItems = [
    {
      span: 'col-span-12 lg:col-span-7',
      title: 'Full-Stack MERN Architecture',
      subtitle: 'End-to-End Scalable Systems',
      description: 'Engineering robust applications from database schemas in MongoDB to reactive state in React.js and high-throughput Node.js/Express.js APIs.',
      icon: <Layers size={22} color="#00d2ff" />,
      badge: 'Core Competency',
      stats: '⚡ Sub-120ms Latency',
      accentColor: '#00d2ff',
      bgGlow: 'radial-gradient(circle at 10% 20%, rgba(0, 210, 255, 0.12) 0%, transparent 60%)',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    },
    {
      span: 'col-span-12 lg:col-span-5',
      title: 'Cross-Platform Mobile Apps',
      subtitle: 'React Native & Expo Ecosystem',
      description: 'Building native-speed mobile applications with fluid gestures, offline state sync, camera access, and role-based views.',
      icon: <Smartphone size={22} color="#10b981" />,
      badge: 'Mobile First',
      stats: '📱 iOS & Android',
      accentColor: '#10b981',
      bgGlow: 'radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 60%)',
      tags: ['React Native', 'Expo', 'AsyncStorage', 'Native APIs']
    },
    {
      span: 'col-span-12 lg:col-span-4',
      title: 'JWT & OTP Security',
      subtitle: 'Role-Based Access Control',
      description: 'Implementing multi-role authentication (Admin / User), mobile OTP verification, session expiration, and encrypted tokens.',
      icon: <ShieldCheck size={22} color="#f59e0b" />,
      badge: 'Enterprise Security',
      stats: '🛡️ Bank-Grade Auth',
      accentColor: '#f59e0b',
      bgGlow: 'radial-gradient(circle at 10% 80%, rgba(245, 158, 11, 0.12) 0%, transparent 60%)',
      tags: ['JWT', 'OTP Services', 'RBAC', 'Bcrypt']
    },
    {
      span: 'col-span-12 lg:col-span-4',
      title: 'AWS Cloud Infrastructure',
      subtitle: 'Presigned URLs & Media Storage',
      description: 'Handling high-volume uploads, chunked media processing, AWS S3 presigned URLs, and optimized cloud storage pipelines.',
      icon: <Cloud size={22} color="#38bdf8" />,
      badge: 'Cloud Storage',
      stats: '☁️ Multi-part Uploads',
      accentColor: '#38bdf8',
      bgGlow: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.12) 0%, transparent 60%)',
      tags: ['AWS S3', 'Presigned URLs', 'Multer', 'CDN']
    },
    {
      span: 'col-span-12 lg:col-span-4',
      title: 'Fintech & Razorpay Gateway',
      subtitle: 'Automated Checkout Workflows',
      description: 'Integrating seamless payment gateways, dynamic order creation, webhook verification, and automated invoicing.',
      icon: <CreditCard size={22} color="#a855f7" />,
      badge: 'Fintech Integration',
      stats: '💳 100% Webhook Sync',
      accentColor: '#a855f7',
      bgGlow: 'radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)',
      tags: ['Razorpay API', 'Webhooks', 'Orders', 'Invoices']
    }
  ];

  return (
    <section id="about" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="originkit-pill"
            style={{ marginBottom: '1rem' }}
          >
            <Sparkles size={14} />
            <span>ENGINEERING EXCELLENCE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', fontWeight: '800', marginBottom: '0.75rem' }}
          >
            Architected for <span className="gradient-text">High Performance</span> & Scalability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '0.96rem', lineHeight: '1.6' }}
          >
            A cohesive stack engineered for modern product requirements—from secure microservices to responsive interactive interfaces.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div 
          className="bento-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}
        >
          <style>{`
            @media (max-width: 992px) {
              .bento-card-item {
                grid-column: span 12 !important;
                padding: 1.35rem !important;
              }
            }
          `}</style>

          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="glass-panel bento-card-item"
              style={{
                gridColumn: `span ${item.span.includes('col-span-7') ? 7 : item.span.includes('col-span-5') ? 5 : 4}`,
                borderRadius: '1.25rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                background: `var(--bg-card), ${item.bgGlow}`,
                border: '1px solid var(--border-color)',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = item.accentColor;
                e.currentTarget.style.boxShadow = `0 15px 35px -10px ${item.accentColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div>
                {/* Top Row: Icon on Left, Badges neatly on Right */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    gap: '0.75rem', 
                    marginBottom: '1.25rem' 
                  }}
                >
                  {/* Glowing Icon Box */}
                  <div
                    style={{
                      width: '2.8rem',
                      height: '2.8rem',
                      borderRadius: '0.75rem',
                      background: `linear-gradient(135deg, ${item.accentColor}22 0%, ${item.accentColor}08 100%)`,
                      border: `1px solid ${item.accentColor}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 15px ${item.accentColor}22`,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Right Badges: Clean, symmetrical, never broken */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.badge}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        background: `${item.accentColor}18`,
                        border: `1px solid ${item.accentColor}35`,
                        color: item.accentColor,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.3rem', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                  {item.title}
                </h3>
                <h4 style={{ fontSize: '0.88rem', color: item.accentColor, fontWeight: '600', marginBottom: '0.85rem' }}>
                  {item.subtitle}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {item.description}
                </p>
              </div>

              {/* Tags at bottom */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: '600',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '0.4rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
