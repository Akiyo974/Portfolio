import { IntentCategory } from './types';
import { botKnowledge } from './knowledge';

export const intents: IntentCategory = {
  greeting: {
    patterns: [
      /bonjour/i, /salut/i, /hello/i, /hi/i, /hey/i, /bonsoir/i, /comment ca va/i, /comment allez vous/i, /yo/i, /coucou/i, /cc/i, /slt/i, /bjr/i
    ],
    responses: [
      `Bonjour ! Je suis l'assistant virtuel de ${botKnowledge.name}. Comment puis-je vous aider ?`,
      `Salut ! Je suis là pour répondre à vos questions sur ${botKnowledge.name}. Que souhaitez-vous savoir ?`
    ]
  },
  
  role: {
    patterns: [
      /que fais tu/i, /quel est ton travail/i, /quel poste/i, /quelle profession/i, /que fais tu dans la vie/i, /ou travailles tu/i, /ou travailles vous/i, /ou travailles-tu/i, /ou travailles-vous/i, /quelle est ta profession/i, /quelle est votre profession/i,  /quel est ton rôle/i, /quel est votre rôle/i, /quel est ton métier/i, /quel est votre métier/i
    ],
    responses: [
      `${botKnowledge.name} est ${botKnowledge.role} actuellement en ${botKnowledge.company}.`,
      `En tant que ${botKnowledge.role}, ${botKnowledge.name} poursuit sa formation pour développer ses compétences.`,
      `${botKnowledge.name} est actuellement en formation pour devenir ${botKnowledge.role}.`
    ]
  },

  skills: {
    patterns: [
      /competences/i, /technologies/i, /stack technique/i, /langages/i, /que sais tu faire/i, /technologies maitrisees/i, /stack/i, /quels langages/i, /quelles technologies/i, /quels langages de programmation/i, /quelles technologies de programmation/i, /quels langages de développement/i, /quelles technologies de développement/i, /quels langages de programmation maitrises/i, /quelles technologies de programmation maitrises/i, /quels langages de développement maitrises/i, /quelles technologies de développement maitrises/i
    ],
    responses: [
      `Les principales compétences de ${botKnowledge.name} incluent : ${botKnowledge.skills.join(', ')}.`,
      `${botKnowledge.name} maîtrise les technologies suivantes : ${botKnowledge.skills.join(', ')}.`,
      `Parmi les compétences de ${botKnowledge.name}, on retrouve : ${botKnowledge.skills.join(', ')}.`
    ]
  },

  contact: {
    patterns: [
      /contact/i, /email/i, /mail/i, /coordonnees/i, /linkedin/i, /github/i, /comment te contacter/i, /comment le contacter/i, /comment vous contacter/i, /comment la contacter/i, /comment la joindre/i, /comment le joindre/i, /comment vous joindre/i, /comment te joindre/i, /comment puis-je te contacter/i, /comment puis-je vous contacter/i, /comment puis-je le contacter/i, /comment puis-je la contacter/i, /comment puis-je la joindre/i, /comment puis-je le joindre/i, /comment puis-je vous joindre/i
    ],
    responses: [
      `Vous pouvez contacter ${botKnowledge.name} par email : ${botKnowledge.contact.email}` +
      (botKnowledge.contact.linkedin ? `\nLinkedIn : ${botKnowledge.contact.linkedin}` : '') +
      (botKnowledge.contact.github ? `\nGitHub : ${botKnowledge.contact.github}` : ''),
      `Pour contacter ${botKnowledge.name}, vous pouvez envoyer un email à : ${botKnowledge.contact.email}` +
      (botKnowledge.contact.linkedin ? `\nLinkedIn : ${botKnowledge.contact.linkedin}` : '') +
      (botKnowledge.contact.github ? `\nGitHub : ${botKnowledge.contact.github}` : ''),
    ]
  },

  languages: {
    patterns: [
      /langues/i, /langues parlees/i, /parles tu anglais/i, /quelles langues/i, /niveau en anglais/i, /niveau en francais/i, /niveau en creole/i, /niveau en espagnol/i, /quelles langues parles tu/i, /quelles langues parlez vous/i, /quelles langues parle-tu/i, /quelles langues parle-vous/i, /quelles langues parles-tu/i, /quelles langues parles-vous/i, /quelles langues parle-tu/i, /quelles langues parle-vous/i, /quelles langues parle-tu/i, /quelles langues parle-vous/i
    ],
    responses: [
      `${botKnowledge.name} parle : ${botKnowledge.languages.join(', ')}.`,
      `${botKnowledge.name} est capable de communiquer en : ${botKnowledge.languages.join(', ')}.`
    ]
  },

  unknown: {
    patterns: [],
    responses: [
      "Désolé, je n'ai pas compris votre question. Pouvez-vous la reformuler ?",
      "Je ne suis pas sûr de comprendre. Pourriez-vous préciser votre question ?",
      `N'hésitez pas à me poser des questions sur l'expérience, les compétences ou les coordonnées de ${botKnowledge.name}.`,
      `Je suis là pour répondre à vos questions sur ${botKnowledge.name}. N'hésitez pas à demander !`
    ]
  }
};
