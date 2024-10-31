import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface ProjectFilterProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedLanguage: string | null;
    setSelectedLanguage: (language: string | null) => void;
    availableLanguages: string[];
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
    searchTerm,
    setSearchTerm,
    selectedLanguage,
    setSelectedLanguage,
    availableLanguages,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleLanguageSelection = (language: string | null) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
            <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full sm:w-1/2 px-4 py-2 bg-white/10 text-white rounded-lg focus:outline-none"
            />
            <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                    <SlidersHorizontal className="w-5 h-5" />
                    {selectedLanguage ? `Langage : ${selectedLanguage}` : "Trier par langage"}
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-black rounded-lg shadow-lg z-10">
                        <ul className="text-white">
                            <li
                                onClick={() => handleLanguageSelection(null)}
                                className="px-4 py-2 hover:bg-white/10 cursor-pointer rounded-t-lg"
                            >
                                Tous les langages
                            </li>
                            {availableLanguages.map((language) => (
                                <li
                                    key={language}
                                    onClick={() => handleLanguageSelection(language)}
                                    className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                                >
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
