import React, { useEffect, useState } from 'react';

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Grid Pattern */}
      <div 
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.6,
        }}
      />

      {/* Mouse Spotlight */}
      <div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '600px',
          height: '600px',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: 'radial-gradient(circle, var(--ambient-orb-2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
          opacity: 0.6,
          transition: 'transform 0.15s ease-out',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Orb 1 - Top Left */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-150px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--ambient-orb-1) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
          animation: 'pulse-slow 10s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Orb 2 - Right Mid */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-150px',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--ambient-orb-2) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
          animation: 'pulse-slow 12s ease-in-out infinite alternate-reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Orb 3 - Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '30%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--ambient-orb-1) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(90px)',
          animation: 'pulse-slow 8s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
