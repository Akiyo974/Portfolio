import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useLenis } from '../hooks/useLenis';

export const HomePage = () => {
  useLenis();

  useEffect(() => {
    // Réinitialisation de la position de défilement au montage du composant
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};