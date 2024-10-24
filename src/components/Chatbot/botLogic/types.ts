export interface BotKnowledge {
  name: string;
  role: string;
  company: string;
  skills: string[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
  };
  languages: string[];
}

export interface Intent {
  patterns: RegExp[]; 
  responses: string[];
}

export interface IntentCategory {
  [key: string]: Intent;
}
