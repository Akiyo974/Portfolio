import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import AkiProject from '/src/assets/AkiProject.png';
import AkiMusic from '/src/assets/AkiMusic.png';
import Webana from '/src/assets/Webana.png';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  languages: string[];
  image: string;
  siteUrl: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "AkiProject",
    description: "Gestionnaire de tâches et messagerie en temps réel développés avec Bootstrap, jQuery, et PHP. Conçu pour démontrer les compétences en communication asynchrone et gestion de tâches dans un contexte académique.",
    languages: ["Php", "SQL", "Bootstrap", "jQuery", "AJAX"],
    image: AkiProject,
    siteUrl: "https://christenalexisdijoux.techniquesmedia.com/cms1/wr/Workspace/index.php",
    codeUrl: "https://github.com/Akiyo974/akiproject"
  },
  {
    title: "AkiMusic",
    description: "AkiMusic est un projet de démonstration pour une plateforme de streaming musical, conçu pour simuler des fonctionnalités telles que les abonnements et la gestion de playlists. Bien qu'il ne fonctionne pas réellement pour le streaming, il sert d'exemple pour illustrer une interface utilisateur et des options de navigation pour un service de musique en ligne.",
    languages: ["Php", "Bootstrap", "jQuery"],
    image: AkiMusic,
    siteUrl: "https://christenalexisdijoux.techniquesmedia.com/AkiMusic/index.php#",
    codeUrl: "non"
  },
  {
    title: "Webana",
    description: "Ce projet est une refonte personnelle d'un ancien site web sur l'histoire des katanas, visant à moderniser et améliorer l'organisation des styles avec HTML, CSS, JavaScript, Bootstrap, jQuery et SCSS pour une meilleure modularité et maintenabilité.",
    languages: ["Scss", "Bootstrap", "JavaScript"],
    image: Webana,
    siteUrl: "https://akiyo974.github.io/webana/",
    codeUrl: "https://github.com/Akiyo974/webana"
  }
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            {
              y: 100,
              opacity: 0,
              scale: 0.95
            },
            {
              scrollTrigger: {
                trigger: project,
                start: "top bottom-=100",
                end: "top center",
                scrub: 1,
                markers: false,
              },
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power4.out",
            }
          );
        }
      });

      // Animation du bouton Voir tous les projets
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          {
            y: 30,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1,
              markers: false,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 border-b border-white/20 pb-4">Projets Sélectionnés</h2>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm uppercase tracking-wider text-white/50 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 text-sm border border-white/20 rounded-full 
                                     hover:bg-white hover:text-black transition-colors duration-300"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg 
                                 transition-colors duration-300 ${project.siteUrl === "non" ? "bg-gray-500 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"}`}
                      aria-disabled={project.siteUrl === "non"}
                      onClick={(e) => project.siteUrl === "non" && e.preventDefault()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Démo en direct</span>
                    </a>

                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 border rounded-lg 
                                 transition-colors duration-300 ${project.codeUrl === "non" ? "border-gray-500 text-gray-500 cursor-not-allowed" : "border-white/20 hover:bg-white hover:text-black"}`}
                      aria-disabled={project.codeUrl === "non"}
                      onClick={(e) => project.codeUrl === "non" && e.preventDefault()}
                    >
                      <Github className="w-4 h-4" />
                      <span>Voir le code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir Tous les Projets */}
        <div className="mt-20 text-center">
          <Link
            to="/projects"
            ref={buttonRef}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium 
                     border-2 border-white rounded-lg hover:bg-white hover:text-black 
                     transition-colors duration-300 group"
          >
            Voir Tous les Projets
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
