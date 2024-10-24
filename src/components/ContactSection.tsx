import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.contact-content',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fk6027a', // Service ID
      'template_z8xeip9', // Template ID
      formRef.current!,
      'nuVbYv2KJyTRA702i' // User ID (Public Key)
    ).then(
      (result) => {
        setPopupMessage('Message envoyé avec succès !');
        setPopupType('success');
        setPopupVisible(true);
        formRef.current?.reset();
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setPopupMessage("Erreur lors de l'envoi du message.");
        setPopupType('error');
        setPopupVisible(true);
        console.error(error.text);
      }
    );

    // Masquer le popup après 3 secondes
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="w-full py-24 px-8 bg-black text-white" id="contact">
      <div className="max-w-6xl mx-auto contact-content">
        <h2 className="text-5xl font-bold mb-12 text-center">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Restons en Contact</h3>
            <p className="text-white/60 mb-8 text-lg">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
            </p>
            
            <div className="space-y-6">
              <a href="mailto:christen.dijoux@gmail.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>christen.dijoux@gmail.com</span>
              </a>
              
              <a href="tel:+14183762612" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
                <span>+1 (418) 376-2612</span>
              </a>
              
              <div className="flex items-center gap-4 text-white/60">
                <MapPin className="w-6 h-6" />
                <span>Saguenay, Québec, Canada</span>
              </div>
              
              <div className="flex gap-6 pt-4">
                <a href="https://github.com/Akiyo974" target="_blank" rel="noopener noreferrer" 
                   className="text-white/60 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/christen-dijoux" target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Envoyer le Message
            </button>
          </form>
        </div>

        {/* Popup personnalisé */}
        {popupVisible && (
          <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50`}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-96 relative">
              <button
                onClick={() => setPopupVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className={`text-lg font-medium ${popupType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {popupMessage}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
