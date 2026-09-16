import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  PhoneCall
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#00d2ff', '#0070f3', '#10b981', '#ffffff']
      });

      // Reset form after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        <style>{`
          @media (max-width: 992px) {
            .contact-responsive-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .contact-form-panel {
              padding: 1.35rem !important;
            }
            .contact-channel-card {
              padding: 1rem 1.15rem !important;
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
            <MessageSquare size={14} />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', fontWeight: '800', marginBottom: '0.75rem' }}
          >
            Get In Touch for <span className="gradient-text">Opportunities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '0.96rem', lineHeight: '1.6' }}
          >
            Interested in discussing a Full-Time Role, Freelance Contract, or High-Impact Engineering Challenge? Let's talk!
          </motion.p>
        </div>

        <div 
          className="contact-responsive-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div>
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{
                borderRadius: '1.25rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
                background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.1) 0%, rgba(0, 112, 243, 0.05) 100%)',
                border: '1px solid var(--border-glow)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                <span className="pulse-dot" />
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0 }}>
                  Active Availability
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                {personalData.status}. Open to remote roles globally and on-site positions in India.
              </p>
            </motion.div>

            {/* Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {/* Email */}
              <div
                className="glass-panel contact-channel-card"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                  <div style={{ width: '2.6rem', height: '2.6rem', borderRadius: '0.65rem', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={16} color="var(--accent-cyan)" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                      {personalData.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalData.email, 'email')}
                  style={{
                    padding: '0.4rem 0.65rem',
                    borderRadius: '0.5rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: copiedItem === 'email' ? '#10b981' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedItem === 'email' ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedItem === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div
                className="glass-panel contact-channel-card"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                  <div style={{ width: '2.6rem', height: '2.6rem', borderRadius: '0.65rem', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={16} color="var(--accent-cyan)" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone Numbers</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {personalData.phones.join('  •  ')}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalData.phones[0], 'phone')}
                  style={{
                    padding: '0.4rem 0.65rem',
                    borderRadius: '0.5rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: copiedItem === 'phone' ? '#10b981' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedItem === 'phone' ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedItem === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div
                className="glass-panel contact-channel-card"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div style={{ width: '2.6rem', height: '2.6rem', borderRadius: '0.65rem', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={16} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {personalData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp & Social Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <a
                href={`https://wa.me/${personalData.whatsapp}?text=Hi%20Prashant,%20I%20am%20reaching%20out%20regarding%20a%20developer%20role.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{
                  flex: '1 1 auto',
                  background: '#25D366',
                  color: '#ffffff',
                  boxShadow: '0 8px 20px -4px rgba(37, 211, 102, 0.4)',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.88rem'
                }}
              >
                <WhatsappIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel contact-form-panel"
            style={{
              borderRadius: '1.25rem',
              padding: '1.85rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glow)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Fill out this form and I will respond to your inquiry within 24 hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '2rem 1.25rem',
                  textAlign: 'center',
                  background: 'var(--badge-bg)',
                  borderRadius: '1rem',
                  border: '1px solid var(--badge-border)',
                }}
              >
                <div
                  style={{
                    width: '3.2rem',
                    height: '3.2rem',
                    borderRadius: '50%',
                    background: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.85rem auto',
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.4rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Thank you for reaching out, Prashant will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.6rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.6rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Developer Opening / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.6rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.6rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.92rem',
                    marginTop: '0.35rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message Now'}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
