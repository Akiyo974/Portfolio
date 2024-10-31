// ProjectsPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { Footer } from '../components/Footer_Projet';
import { Chatbot } from '../components/Chatbot/Chatbot';
import { ProjectFilter } from '../components/project/ProjectFilter';
import { ProjectsList } from '../components/project/ProjectsList';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  homepage?: string;
}

const EXCLUDED_REPOS = ['Akiyo974', 'repo-a-cacher-2'];

const CUSTOM_REPO_INFO: Record<string, {
  showCode: boolean;
  customLabel?: string;
  customDescription?: string;
}> = {
  'AkiSupport': {
    showCode: false,
    customLabel: 'AkiSupport',
    customDescription: "AkiSupport est un chatbot d'assistance en ligne conçu comme projet d'apprentissage, utilisant JavaScript, Bootstrap, et Vite pour offrir des réponses automatisées et gérer les requêtes des utilisateurs."
  },
};

export const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [repoCount, setRepoCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Akiyo974/repos');
        const data = await response.json();

        // Filtrer les dépôts exclus et configurer les langages uniques
        const filteredRepos = data.filter((repo: Repository) =>
          !EXCLUDED_REPOS.includes(repo.name)
        );

        const languages = Array.from(new Set(filteredRepos.map(repo => repo.language).filter(Boolean)));
        setAvailableLanguages(languages);

        setRepos(filteredRepos);
        setRepoCount(filteredRepos.length);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []); // Empty dependency array ensures this runs only once on mount

  const filteredRepos = repos.filter((repo) =>
    (!selectedLanguage || repo.language === selectedLanguage) &&
    (repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     repo.description?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold">Tous les Projets</h1>
            <a href="https://github.com/Akiyo974" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Github className="w-5 h-5" />
              <span>{repoCount} Dépôts</span>
            </a>
          </div>
        </div>

        {/* Project Filter */}
        <ProjectFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          availableLanguages={availableLanguages}
        />

        {/* Project List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <ProjectsList projects={filteredRepos} />
        )}
      </div>
      <Footer />
      <Chatbot botName="Assistant" welcomeMessage="👋 Bonjour ! Comment puis-je vous aider aujourd'hui ?" position="bottom-right" />
    </main>
  );
};
