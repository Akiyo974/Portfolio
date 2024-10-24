import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { Footer } from '../components/Footer';

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

// Liste des dépôts à exclure de l'affichage
const EXCLUDED_REPOS = [
  'Akiyo974',
  'repo-a-cacher-2'
];

// Informations personnalisées pour certains dépôts
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

// Fonction pour capitaliser la première lettre d'une chaîne de caractères
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [repoCount, setRepoCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Akiyo974/repos');
        const data = await response.json();
        
        const filteredRepos = data.filter((repo: Repository) => 
          !EXCLUDED_REPOS.includes(repo.name)
        );
        
        setRepos(filteredRepos);
        setRepoCount(filteredRepos.length);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold">Tous les Projets</h1>
            <a
              href="https://github.com/Akiyo974"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>{repoCount} Dépôts</span>
            </a>
          </div>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {repos.map((repo) => {
              const customInfo = CUSTOM_REPO_INFO[repo.name];
              
              return (
                <div
                  key={repo.id}
                  className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {capitalizeFirstLetter(customInfo?.customLabel || repo.name)}
                      </h2>
                      {customInfo && (
                        <span className="text-sm text-white/60 mt-1 block">
                          Dépôt: {capitalizeFirstLetter(repo.name)}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm"
                        >
                          Démo en direct
                        </a>
                      )}
                      {(!customInfo || customInfo.showCode) && (
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors text-sm"
                        >
                          Voir le code
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">
                    {customInfo?.customDescription || repo.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {repo.language && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics?.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 border border-white/20 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.stargazers_count > 0 && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm flex items-center gap-1">
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-white/60">Aucun dépôt trouvé</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};
