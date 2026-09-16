import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundMesh from './components/BackgroundMesh';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import BentoHighlights from './components/BentoHighlights';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsEducation from './components/CertificationsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('ps_portfolio_theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('ps_portfolio_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Dynamic Background Mesh & Spotlight */}
      <BackgroundMesh />

      {/* Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <MetricsBar />
        <BentoHighlights />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <CertificationsEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-depth Project Architecture Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Resume PDF & Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating Interactive WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
