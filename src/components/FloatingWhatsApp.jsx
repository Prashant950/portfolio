import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${personalData.whatsapp}?text=Hi%20Prashant,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
      }}
    >
      <style>{`
        @keyframes whatsapp-ripple {
          0% {
            transform: scale(0.95);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes online-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        .whatsapp-float-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          position: relative;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          text-decoration: none;
        }
        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }
        .whatsapp-ripple-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          animation: whatsapp-ripple 2.4s infinite cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
          z-index: -1;
        }
        .whatsapp-online-dot {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
        }
        .whatsapp-online-dot::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: #10b981;
          opacity: 0.5;
          animation: online-pulse 2s infinite ease-in-out;
        }
        @media (max-width: 640px) {
          .whatsapp-float-btn {
            width: 50px !important;
            height: 50px !important;
          }
          .whatsapp-tooltip-pill {
            display: none !important;
          }
        }
      `}</style>

      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="whatsapp-tooltip-pill"
            style={{
              padding: '0.45rem 0.95rem',
              borderRadius: '9999px',
              background: 'rgba(3, 7, 18, 0.9)',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontWeight: '700',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25D366' }} />
            <span>Chat with Prashant</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Direct WhatsApp Chat"
        title="Direct WhatsApp with Prashant"
      >
        <div className="whatsapp-ripple-ring" />
        <div className="whatsapp-online-dot" />
        <WhatsappIcon size={28} color="#ffffff" />
      </a>
    </div>
  );
}
