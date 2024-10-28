import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useLocalTime } from '../hooks/useLocalTime';
import { Star } from 'lucide-react';
import logo from '../assets/logo.png'; // Import du logo

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const localTime = useLocalTime();
  const [hours, minutes] = localTime.split(':');
  const [isStarFilled, setIsStarFilled] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 1 });
    }

    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    const lines: THREE.Line[] = [];
    const gridSize = 20;
    const spacing = 0.5;

    for (let i = -gridSize; i <= gridSize; i++) {
      const horizontalGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-gridSize * spacing, i * spacing, 0),
        new THREE.Vector3(gridSize * spacing, i * spacing, 0),
      ]);
      const verticalGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i * spacing, -gridSize * spacing, 0),
        new THREE.Vector3(i * spacing, gridSize * spacing, 0),
      ]);

      const horizontalLine = new THREE.Line(horizontalGeometry, material);
      const verticalLine = new THREE.Line(verticalGeometry, material);
      
      lines.push(horizontalLine, verticalLine);
      scene.add(horizontalLine, verticalLine);
    }

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      lines.forEach((line) => {
        line.rotation.z += 0.0005;
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-in');
      tl.fromTo(elements, 
        { 
          y: 30,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: 0.2
        }
      );
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const toggleStar = () => {
    setIsStarFilled(!isStarFilled);
    
    const starElement = document.querySelector('.star-icon');
    gsap.from(starElement, {
      scale: 0.5,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div ref={contentRef} className="relative z-10 h-full text-white opacity-0">
        <div ref={containerRef} className="absolute top-0 left-0 right-0 pt-8">
          <div className="w-full grid grid-cols-3 text-left px-8">
            <div className="flex flex-col">
              <h2 className="animate-in text-2xl font-bold tracking-tight text-white">Christen</h2>
              <h2 className="animate-in text-2xl tracking-tight text-white">Dijoux</h2>
            </div>
            
            <div className="flex flex-col">
              <p className="animate-in text-base text-white">Saguenay</p>
              <p className="animate-in text-base text-white">Québec, Canada</p>
            </div>
            
            <div className="flex flex-col">
              <p className="animate-in text-base text-white">Développeur</p>
              <p className="animate-in text-base mb-4 text-white">Front-end</p>

              <div className="animate-in flex flex-col mt-32">
                <p className="text-7xl font-bold leading-tight text-white">{hours}</p>
                <p className="text-7xl font-bold leading-tight text-white">{minutes}</p>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={toggleStar}
          className="animate-in absolute top-4 right-4 md:top-8 md:right-8 p-2 hover:scale-110 transition-transform duration-300 focus:outline-none"
          aria-label={isStarFilled ? "Retirer l'étoile" : "Ajouter l'étoile"}
        >
          <Star 
            className={`star-icon w-6 h-6 md:w-8 md:h-8 text-white transition-colors duration-300 ${
              isStarFilled ? 'fill-white' : 'fill-transparent'
            }`}
          />
        </button>

        <div className="animate-in absolute bottom-0 left-0 right-0 px-8 pb-8">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full mb-8"
          />
          <div className="w-full h-px bg-white/20 mb-8"></div>
          <div className="text-sm uppercase tracking-widest text-white">
            Portfolio de Développeur Créatif — {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  );
};
