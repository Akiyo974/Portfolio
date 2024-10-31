import React from 'react';
import { ProjectCard } from './ProjectCard';

interface ProjectsListProps {
    projects: Array<{
        id: number;
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
    }>;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
    <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
        ))}
    </div>
);
