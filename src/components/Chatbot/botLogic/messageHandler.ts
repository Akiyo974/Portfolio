import { intents } from './intents';
import Fuse from 'fuse.js';

type ResponseRule = {
  patterns: RegExp[];
  response: string | ((match: RegExpMatchArray) => string);
};

const responseRules: ResponseRule[] = [
  {
    patterns: [/bonjour|salut|hello|hi|hey/i],
    response: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
  },
  {
    patterns: [/comment ça va|comment allez-vous/i],
    response: "Je vais bien, merci de demander ! Comment puis-je vous assister ?",
  },
  {
    patterns: [/au revoir|bye|goodbye/i],
    response: "Au revoir ! Passez une excellente journée !",
  },
  {
    patterns: [/merci|thanks/i],
    response: "Je vous en prie ! Faites-moi savoir si vous avez besoin d'autre chose.",
  },
  {
    patterns: [/que peux-tu faire|aide-moi|help/i],
    response: "Je peux vous aider avec diverses tâches, répondre à vos questions et fournir de l'assistance. N'hésitez pas à me poser toutes vos questions !",
  },
  {
    patterns: [/qui es-tu|qui êtes-vous|c'est quoi|what are you/i],
    response: "Je suis un assistant virtuel conçu pour répondre à vos questions et fournir de l'aide.",
  },
];

const normalizeText = (text: string): string => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const fuseOptions = {
  includeScore: true,
  threshold: 0.4,
  keys: ['patterns'],
};

const fuse = new Fuse(
  Object.entries(intents).map(([key, value]) => ({
    key,
    patterns: value.patterns.map((regex) => regex.source),
    responses: value.responses,
  })),
  fuseOptions
);

const checkIntent = (message: string): string | null => {
  const normalizedMessage = normalizeText(message);

  const result = fuse.search(normalizedMessage);
  if (result.length > 0) {
    const bestMatch = result[0].item;
    const intentCategory = intents[bestMatch.key];

    return intentCategory.responses[Math.floor(Math.random() * intentCategory.responses.length)];
  }

  return null;
};

const defaultResponse = "Je ne suis pas sûr de comprendre votre question. Pourriez-vous reformuler, s'il vous plaît ?";

export const handleMessage = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const normalizedMessage = normalizeText(message);

  const intentResponse = checkIntent(normalizedMessage);
  if (intentResponse) {
    return intentResponse;
  }

  for (const rule of responseRules) {
    for (const pattern of rule.patterns) {
      if (pattern.test(normalizedMessage)) {
        return typeof rule.response === 'function' 
          ? rule.response(normalizedMessage.match(pattern)!)
          : rule.response;
      }
    }
  }

  return defaultResponse;
};
