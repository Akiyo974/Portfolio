import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isStarFilled, setIsStarFilled] = useState(false);

  const toggleStar = () => {
    setIsStarFilled(!isStarFilled);
  };

  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={toggleStar}
                className="p-1 hover:scale-110 transition-transform duration-300 focus:outline-none"
                aria-label={isStarFilled ? "Retirer l'étoile" : "Ajouter l'étoile"}
              >
                <Star 
                  className={`w-5 h-5 text-white transition-colors duration-300 ${
                    isStarFilled ? 'fill-white' : 'fill-transparent'
                  }`}
                />
              </button>
              <span className="font-bold text-lg">CD</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Développeur créatif créant des expériences numériques avec du code et du design.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  data-scroll-to="about"
                  className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  À propos
                </button>
              </li>
              <li>
                <Link 
                  to="/projects"
                  className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Projets
                </Link>
              </li>
              <li>
                <button
                  data-scroll-to="contact"
                  className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Localisation</h3>
            <p className="text-white/60">Saguenay</p>
            <p className="text-white/60">Québec, Canada</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="text-white/40 text-sm text-center">
            © {currentYear} Christen Dijoux. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
