import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    name: string;
    description: string;
    html_url: string;
    homepage?: string;
    language: string;
    topics: string[];
    stargazers_count: number;
    customLabel?: string;
    customDescription?: string;
    showCode?: boolean;
}

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    html_url,
    homepage,
    language,
    topics,
    stargazers_count,
    customLabel,
    customDescription,
    showCode = true,
}) => (
    <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mb-4">
            <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl font-bold">
                    {capitalizeFirstLetter(customLabel || name)}
                </h2>
                {customLabel && (
                    <span className="text-sm text-white/60 mt-1 block">
                        Dépôt: {capitalizeFirstLetter(name)}
                    </span>
                )}
            </div>
            <div className="flex flex-row gap-3 justify-center sm:justify-start">
                {homepage && (
                    <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Démo en direct</span>
                    </a>
                )}
                {showCode && (
                    <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors text-sm"
                    >
                        <Github className="w-4 h-4" />
                        <span>Voir le code</span>
                    </a>
                )}
            </div>
        </div>
        <p className="text-white/70 mb-6">{customDescription || description}</p>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {language && (
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {capitalizeFirstLetter(language)}
                </span>
            )}
            {topics?.map((topic) => (
                <span key={topic} className="px-3 py-1 border border-white/20 rounded-full text-sm">
                    {capitalizeFirstLetter(topic)}
                </span>
            ))}
            {stargazers_count > 0 && (
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm flex items-center gap-1">
                    ★ {stargazers_count}
                </span>
            )}
        </div>
    </div>
);
