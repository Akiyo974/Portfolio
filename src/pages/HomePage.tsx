import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useLenis } from '../hooks/useLenis';
import { Chatbot } from '../components/Chatbot/Chatbot';

export const HomePage = () => {
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Chatbot
        botName="Assistant"
        welcomeMessage="👋 Bonjour ! Comment puis-je vous aider aujourd'hui ?"
        position="bottom-right"
      />

    </main>
  );
};