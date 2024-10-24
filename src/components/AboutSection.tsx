import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'HTML/CSS', 'JavaScript', 'React', 'TypeScript',
  'PHP', 'MySQL', 'jQuery', 'SCSS',
  'Bootstrap', 'UI/UX Design', 'Animation Web', 'Développement Front-end'
];

const formations = [
  {
    title: 'Techniques d\'Intégration Multimédia',
    place: 'Cégep de Jonquière',
    role: 'Développement front-end, UX/UI',
    period: '2021 - 2025'
  },
  {
    title: 'Formation en Développement d\'Applications Front-End (React)',
    place: 'edX, en partenariat avec IBM',
    role: 'React.js, JSX, ES6, Redux, hooks',
    period: '2024'
  },
  {
    title: 'Certificat en Design de Jeux Vidéo',
    place: 'Cégep de Jonquière',
    role: 'Level design et création d\'expériences interactives',
    period: '2023'
  }
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des paragraphes de texte
      textRefs.current.forEach((text, index) => {
        if (text) {
          gsap.fromTo(text, 
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: text,
                start: "top bottom-=100",
                end: "top center",
                scrub: false,
                markers: false,
              },
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power4.out"
            }
          );
        }
      });

      // Animation des compétences
      if (skillsRef.current) {
        gsap.fromTo(skillsRef.current.children,
          { scale: 0.8, opacity: 0 },
          {
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top bottom-=100",
              end: "top center",
              scrub: false,
              markers: false,
            },
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out"
          }
        );
      }

      // Animation des éléments de formation
      if (experienceRef.current) {
        gsap.fromTo(experienceRef.current.children,
          { x: -50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: experienceRef.current,
              start: "top bottom-=100",
              end: "top center",
              scrub: false,
              markers: false,
            },
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen w-full bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 border-b border-white/20 pb-4">À propos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p ref={el => textRefs.current[0] = el} className="text-lg leading-relaxed text-white">
              Actuellement étudiant en Techniques d'Intégration Multimédia au Cégep de Jonquière, 
              je suis passionné par la création d'expériences utilisateurs captivantes à travers le 
              développement web et le design.
            </p>
            
            <p ref={el => textRefs.current[1] = el} className="text-lg leading-relaxed text-white">
              Mon parcours inclut un poste de Chargé de Communication au CHU de La Réunion, 
              où j'ai géré les mises à jour du site web et créé divers supports de communication. 
              Cette expérience a alimenté ma passion pour le développement web et m'a poussé à approfondir 
              mes compétences techniques.
            </p>

            <p ref={el => textRefs.current[2] = el} className="text-lg leading-relaxed text-white">
              Je m'épanouis dans des environnements dynamiques où je peux appliquer ma créativité pour 
              concevoir des interfaces utilisateurs esthétiques et fonctionnelles, tout en recherchant 
              de nouveaux défis et opportunités d'innovation.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Formation</h3>
              <div ref={experienceRef} className="space-y-8">
                {formations.map((exp, index) => (
                  <div key={index} className="border-l-2 border-white/20 pl-6">
                    <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                    <p className="text-white mt-1">{exp.place}</p>
                    <p className="text-white">{exp.role}</p>
                    <p className="text-sm text-white/60 mt-2">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
              <div ref={skillsRef} className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-white/20 rounded-full text-sm text-white 
                             hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
