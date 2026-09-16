import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Loader2, Mail, Phone, MapPin, ExternalLink, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const element = document.getElementById('printable-resume');

      if (!element) return;

      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: [8, 10, 8, 10], // mm
        filename: 'Prashant_Kumar_Singh_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          scrollY: 0,
          scrollX: 0,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).save();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="resume-modal-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 110,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          background: 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(16px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="resume-modal-card"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '920px',
            maxHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1.25rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}
        >
          {/* Modal Header Bar */}
          <div
            className="resume-modal-header"
            style={{
              padding: '1rem 1.75rem',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-primary)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="pulse-dot" />
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0, color: 'var(--text-primary)' }}>
                  Prashant Kumar Singh — Professional Resume
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Full Stack Engineer & MERN Stack Developer
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn-primary"
                style={{
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: isDownloading ? 'not-allowed' : 'pointer',
                  borderRadius: '0.6rem',
                  fontWeight: '600',
                  opacity: isDownloading ? 0.75 : 1,
                }}
                title="Download Resume as PDF to your device"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>Download</span>
                  </>
                )}
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
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Printable Resume Content (Styled like a clean document sheet) */}
          <div
            id="printable-resume"
            style={{
              padding: '2.5rem 3rem',
              overflowY: 'auto',
              background: '#ffffff',
              color: '#0f172a',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontSize: '13px',
              lineHeight: '1.5',
            }}
          >
            {/* Header Section */}
            <div style={{ textAlign: 'center', paddingBottom: '0.75rem', borderBottom: '1.5px solid #0f172a', marginBottom: '1.1rem' }}>
              <h1 style={{ fontSize: '23px', fontWeight: '800', letterSpacing: '0.02em', margin: '0 0 4px 0', color: '#000000' }}>
                PRASHANT KUMAR SINGH
              </h1>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                Full Stack Engineer | MERN Stack Developer
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem 1.25rem', fontSize: '12.5px', color: '#334155' }}>
                <span><strong>Email:</strong> <a href="mailto:prashantsingh2640@gmail.com" style={{ color: '#000000', textDecoration: 'none' }}>prashantsingh2640@gmail.com</a></span>
                <span><strong>Phone:</strong> <a href="tel:+919506536127" style={{ color: '#000000', textDecoration: 'none' }}>+91 9506536127</a></span>
                <span><strong>Location:</strong> Lucknow, UP, India</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.4rem 1.25rem', fontSize: '12.5px', marginTop: '4px', color: '#334155' }}>
                <span><strong>Portfolio:</strong> <a href="https://prashant-singh-portfolio.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>prashant-singh-portfolio</a></span>
                <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/prashant-singh-436972240" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>LinkedIn Profile</a></span>
                <span><strong>GitHub:</strong> <a href="https://github.com/Prashant950?tab=repositories" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>GitHub Profile</a></span>
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="resume-section" style={{ marginBottom: '1.1rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                PROFESSIONAL SUMMARY
              </h2>
              <p style={{ margin: 0, textAlign: 'justify', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.45' }}>
                Full-Stack Engineer with comprehensive hands-on expertise in designing, architecting, and deploying scalable, enterprise-grade web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Proven record in developing high-throughput RESTful APIs, asynchronous event architectures, microservices, and secure JWT/OTP authentication workflows. Adept at engineering omnichannel communication tools, WhatsApp Business Cloud APIs, payment integrations (Razorpay), and cloud storage (AWS S3) while maintaining optimal frontend performance and 99.9% application uptime.
              </p>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="resume-section" style={{ marginBottom: '1.1rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                TECHNICAL SKILLS
              </h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.4' }}>
                <li><strong>Frontend Technologies:</strong> React.js, Next.js, React Native (Expo), Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5</li>
                <li><strong>Backend Technologies:</strong> Node.js, Express.js, RESTful APIs, Microservices, Python, Flask, WebSockets</li>
                <li><strong>Databases & Cloud:</strong> MongoDB, PostgreSQL, Mongoose ODM, AWS S3, Vercel, Git, GitHub</li>
                <li><strong>Integrations & Security:</strong> WhatsApp Business Cloud API, Razorpay Payment Gateway, JWT Auth, SMS/OTP Verification, RBAC</li>
              </ul>
            </div>

            {/* WORK EXPERIENCE */}
            <div className="resume-section" style={{ marginBottom: '1.1rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                WORK EXPERIENCE
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Job 1 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      Full Stack Developer | AIVIQONE Technology Pvt. Ltd, Delhi (Remote)
                    </span>
                    <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#334155', fontWeight: '500' }}>
                      Sep 2026 – Present
                    </span>
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Spearhead the end-to-end architecture and feature delivery for AIVIQONE's flagship SaaS platform, integrating omnichannel communication and enterprise CRM automation.</li>
                    <li>Engineered robust WhatsApp Business Cloud API workflows and bi-directional WebSockets to facilitate real-time chat sync, automated bot triggers, and unified inbox management.</li>
                    <li>Developed high-performance RESTful APIs and MongoDB aggregation pipelines for multi-tenant lead management, funnel stage analytics, and customer lifecycle tracking.</li>
                    <li>Collaborate in a remote-first agile environment, optimizing database queries and backend microservices to achieve sub-100ms API response times across peak lead ingestion volumes.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      MERN Stack Developer | Snow Fountain Consultants Pvt. Ltd., Lucknow, UP
                    </span>
                    <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#334155', fontWeight: '500' }}>
                      Sep 2025 - Sep 2026
                    </span>
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Architected and maintained dynamic client-side interfaces and scalable backend microservices utilizing React.js, Node.js, Express.js, and MongoDB.</li>
                    <li>Designed and optimized high-throughput RESTful APIs, streamlining data serialization and enhancing database indexing for fast query execution.</li>
                    <li>Led code reviews, debugging sessions, and performance benchmarking to eliminate bottlenecks and maintain &gt;99.9% application uptime.</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      Full Stack Developer Intern | TechPath Research & Development Pvt. Ltd, Varanasi,
                    </span>
                    <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#334155', fontWeight: '500' }}>
                      2024 – 2025
                    </span>
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Developed modular, cross-browser responsive web applications adhering strictly to modern semantic HTML5, CSS3, and Bootstrap 5 guidelines.</li>
                    <li>Collaborated with senior engineers to diagnose frontend UI bugs, enhance accessibility standards, and optimize mobile view rendering.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KEY PROJECTS */}
            <div className="resume-section" style={{ marginBottom: '1.1rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                KEY PROJECTS
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {/* Project 1 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      AIVIQONE – All-in-One CRM & Omnichannel Business Automation Platform{' '}
                      <a href="https://aiviqone.com/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline', fontWeight: '700' }}>
                        [Live Demo]
                      </a>
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, WebSockets, WhatsApp Cloud API, REST APIs
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Engineered a scalable omnichannel business suite consolidating multi-channel leads, contact books, dynamic sales pipelines, and customer journey tracking.</li>
                    <li>Integrated official WhatsApp Cloud API, SMS gateways, and automated chat workflows, enabling continuous auto-replies and instant CRM ticket assignment.</li>
                    <li>Implemented customizable role-based sales management dashboards providing actionable insights into conversion funnels, agent performance, and team KPIs.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      GoDrive Self Drive – Car Rental & Instant Fleet Booking Portal{' '}
                      <a href="https://www.godriveselfdrive.com/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline', fontWeight: '700' }}>
                        [Live Demo]
                      </a>
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Razorpay, REST APIs
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Developed an end-to-end self-drive and chauffeur car rental platform featuring transparent vehicle category browsing (SUVs, sedans, luxury fleets).</li>
                    <li>Engineered an instant dynamic fare calculator and online token reservation system with secure digital payment processing via Razorpay.</li>
                    <li>Implemented a rapid 2-minute digital KYC verification pipeline allowing customers to securely upload Driving License and Govt ID documents with real-time verification.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      SathiMeet – On-Demand Social & Lifestyle Support Services Platform{' '}
                      <a href="https://sathimeet.com/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline', fontWeight: '700' }}>
                        [Live Demo]
                      </a>
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, JWT Auth, Geolocation APIs
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Built a nationwide on-demand lifestyle and companion support services platform covering 700+ districts across India with multi-category booking workflows.</li>
                    <li>Implemented verified partner onboarding, geo-location proximity matching, transparent hourly rate structures, and secure booking management.</li>
                    <li>Architected a comprehensive role-based portal with separate user, verified partner, and admin moderation panels prioritizing safety and consent.</li>
                  </ul>
                </div>

                {/* Project 4 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      Lovely Gas Company – Digital Gas Distribution & Utility Management Portal{' '}
                      <a href="https://lovely-gas-company.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline', fontWeight: '700' }}>
                        [Live Demo]
                      </a>
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Vercel
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Designed and deployed a responsive LPG cylinder booking and commercial gas utility service web portal with automated delivery scheduling.</li>
                    <li>Created intuitive customer onboarding, online cylinder refill requests, real-time dispatch tracking, and consumer support ticketing modules.</li>
                    <li>Optimized frontend performance, achieving a 95+ Google Lighthouse rating and ultra-fast initial page load times on low-bandwidth networks.</li>
                  </ul>
                </div>

                {/* Project 5 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      Mini Digi-Locker App – Role-Based Secure Document Management System
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React Native (Expo), Node.js, Express.js, MongoDB, AWS S3, JWT
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Architected a secure cross-platform mobile document vault utilizing React Native Expo and encrypted cloud storage on AWS S3.</li>
                    <li>Engineered OTP-based mobile authentication and granular Role-Based Access Control (RBAC) separating Admin and User privileges.</li>
                    <li>Created real-time document sharing with dual-factor OTP approval workflow, safeguarding sensitive user files from unauthorized distribution.</li>
                  </ul>
                </div>

                {/* Project 6 */}
                <div className="resume-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', fontSize: '13px', color: '#000000' }}>
                      Full-Stack E-Commerce Platform with Payment Gateway
                    </span>
                  </div>
                  <div style={{ fontStyle: 'italic', fontSize: '12px', color: '#334155', margin: '1px 0 3px 0' }}>
                    <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Razorpay API, Redux Toolkit
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '2px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                    <li>Built a full-featured e-commerce application with product filtering, category management, persistent shopping carts, and wishlists.</li>
                    <li>Integrated Razorpay payment gateway API with webhook signature verification for automated payment processing and real-time order status updates.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="resume-section" style={{ marginBottom: '1.1rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                EDUCATION
              </h2>

              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '4px', color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                <li>
                  <strong>B.Tech in Computer Science & Engineering</strong> — Rameshwaram Institute of Technology and Management, Lucknow, UP (2019 – 2023) | CGPA: 7.2
                </li>
                <li>
                  <strong>Intermediate (Class XII)</strong> — S.P.N. Inter College, Tiloi, Amethi, UP (2018 – 2019) | Percentage: 61%
                </li>
                <li>
                  <strong>High School (Class X)</strong> — S.P.N. Inter College, Tiloi, Amethi, UP (2017 – 2018) | Percentage: 72%
                </li>
              </ul>
            </div>

            {/* CERTIFICATIONS */}
            <div className="resume-section">
              <h2 style={{ fontSize: '13px', fontWeight: '800', borderBottom: '1px solid #0f172a', paddingBottom: '2px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
                CERTIFICATIONS
              </h2>

              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', margin: 0, color: '#1e293b', fontSize: '12.5px', lineHeight: '1.38' }}>
                <li>
                  <strong>Certified Full Stack Web Developer — Edureka</strong>
                  <div style={{ marginTop: '2px', color: '#334155' }}>
                    Comprehensive specialization in MERN Stack, RESTful API architecture, Database schema design, and AWS S3 cloud deployment.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

