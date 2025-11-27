import { Tool, Category, PricingModel } from './types';

export const APP_NAME = "Curvexly";
export const TAGLINE = "Curating the Future of Artificial Intelligence.";

// Helper to get real favicons from Google's service
const getImg = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch (e) {
    return `https://picsum.photos/200/200?random=${Math.random()}`;
  }
};

export const AI_TOOLS: Tool[] = [
  // TEXT & WRITING
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'The industry-leading conversational AI model by OpenAI.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://chat.openai.com',
    iconUrl: getImg('https://chat.openai.com'),
    popular: true,
    tags: ['chatbot', 'llm', 'writing']
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    description: 'Anthropic’s ethical, high-context window AI assistant.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://claude.ai',
    iconUrl: getImg('https://claude.ai'),
    popular: true,
    tags: ['chatbot', 'analysis', 'coding']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google’s multimodal AI model built for reasoning and creativity.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://gemini.google.com',
    iconUrl: getImg('https://gemini.google.com'),
    popular: true,
    tags: ['google', 'multimodal', 'search']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI copywriter for enterprise marketing teams.',
    category: Category.Text,
    pricing: PricingModel.Paid,
    url: 'https://jasper.ai',
    iconUrl: getImg('https://jasper.ai'),
    popular: false,
    tags: ['marketing', 'copywriting']
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    description: 'Generate high-quality copy for your business in seconds.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://copy.ai',
    iconUrl: getImg('https://copy.ai'),
    popular: false,
    tags: ['marketing', 'social media']
  },
  {
    id: 'notionai',
    name: 'Notion AI',
    description: 'Integrated AI assistant within your Notion workspace.',
    category: Category.Productivity,
    pricing: PricingModel.Paid,
    url: 'https://notion.so',
    iconUrl: getImg('https://notion.so'),
    popular: true,
    tags: ['notes', 'docs', 'productivity']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI communication assistant for writing assistance.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://grammarly.com',
    iconUrl: getImg('https://grammarly.com'),
    popular: true,
    tags: ['editing', 'grammar']
  },
  
  // IMAGE GENERATION
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Hyper-realistic artistic image generation via Discord.',
    category: Category.Image,
    pricing: PricingModel.Paid,
    url: 'https://midjourney.com',
    iconUrl: getImg('https://midjourney.com'),
    popular: true,
    tags: ['art', 'realistic', 'creative']
  },
  {
    id: 'dalle3',
    name: 'DALL-E 3',
    description: 'OpenAI’s easy-to-use image generator integrated with ChatGPT.',
    category: Category.Image,
    pricing: PricingModel.Paid,
    url: 'https://openai.com/dall-e-3',
    iconUrl: getImg('https://openai.com'),
    popular: true,
    tags: ['simple', 'art']
  },
  {
    id: 'stablediffusion',
    name: 'Stable Diffusion',
    description: 'Open-source image generation model by Stability AI.',
    category: Category.Image,
    pricing: PricingModel.OpenSource,
    url: 'https://stability.ai',
    iconUrl: getImg('https://stability.ai'),
    popular: true,
    tags: ['open source', 'local']
  },
  {
    id: 'leonardo',
    name: 'Leonardo.ai',
    description: 'Production-quality image generation for game assets.',
    category: Category.Image,
    pricing: PricingModel.Freemium,
    url: 'https://leonardo.ai',
    iconUrl: getImg('https://leonardo.ai'),
    popular: true,
    tags: ['assets', 'game dev']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'Image generator specializing in typography and text within images.',
    category: Category.Image,
    pricing: PricingModel.Freemium,
    url: 'https://ideogram.ai',
    iconUrl: getImg('https://ideogram.ai'),
    popular: false,
    tags: ['text', 'logos']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Generative AI integrated into Photoshop and Adobe tools.',
    category: Category.Image,
    pricing: PricingModel.Paid,
    url: 'https://firefly.adobe.com',
    iconUrl: getImg('https://firefly.adobe.com'),
    popular: false,
    tags: ['design', 'adobe']
  },
  {
    id: 'magnific',
    name: 'Magnific AI',
    description: 'Upscale and enhance images with incredible detail hallucination.',
    category: Category.Image,
    pricing: PricingModel.Paid,
    url: 'https://magnific.ai',
    iconUrl: getImg('https://magnific.ai'),
    popular: true,
    tags: ['upscaler', 'enhancement']
  },

  // VIDEO
  {
    id: 'sora',
    name: 'Sora',
    description: 'OpenAI’s text-to-video model enabling realistic scenes.',
    category: Category.Video,
    pricing: PricingModel.Paid,
    url: 'https://openai.com/sora',
    iconUrl: getImg('https://openai.com'),
    popular: true,
    tags: ['realistic', 'video']
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'Advanced video generation and editing tools for creatives.',
    category: Category.Video,
    pricing: PricingModel.Paid,
    url: 'https://runwayml.com',
    iconUrl: getImg('https://runwayml.com'),
    popular: true,
    tags: ['editing', 'vfx']
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    description: 'Idea-to-video platform specializing in animation styles.',
    category: Category.Video,
    pricing: PricingModel.Freemium,
    url: 'https://pika.art',
    iconUrl: getImg('https://pika.art'),
    popular: true,
    tags: ['animation', 'fun']
  },
  {
    id: 'luma',
    name: 'Luma Dream Machine',
    description: 'High-quality, fast AI video generation.',
    category: Category.Video,
    pricing: PricingModel.Freemium,
    url: 'https://lumalabs.ai',
    iconUrl: getImg('https://lumalabs.ai'),
    popular: true,
    tags: ['3d', 'video']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'Create professional AI avatars and video translations.',
    category: Category.Video,
    pricing: PricingModel.Paid,
    url: 'https://heygen.com',
    iconUrl: getImg('https://heygen.com'),
    popular: true,
    tags: ['avatar', 'translation']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Turn text into videos with AI avatars in minutes.',
    category: Category.Video,
    pricing: PricingModel.Paid,
    url: 'https://synthesia.io',
    iconUrl: getImg('https://synthesia.io'),
    popular: false,
    tags: ['corporate', 'training']
  },

  // CODING
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer integrated into VS Code.',
    category: Category.Coding,
    pricing: PricingModel.Paid,
    url: 'https://github.com/features/copilot',
    iconUrl: getImg('https://github.com'),
    popular: true,
    tags: ['autocomplete', 'dev']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'An AI-first code editor built for speed and context.',
    category: Category.Coding,
    pricing: PricingModel.Freemium,
    url: 'https://cursor.sh',
    iconUrl: getImg('https://cursor.sh'),
    popular: true,
    tags: ['editor', 'ide']
  },
  {
    id: 'v0',
    name: 'v0.dev',
    description: 'Generate UI components and code with simple prompts.',
    category: Category.Coding,
    pricing: PricingModel.Freemium,
    url: 'https://v0.dev',
    iconUrl: getImg('https://v0.dev'),
    popular: true,
    tags: ['ui', 'frontend']
  },
  {
    id: 'replit',
    name: 'Replit AI',
    description: 'Collaborative cloud IDE with integrated AI coding tools.',
    category: Category.Coding,
    pricing: PricingModel.Freemium,
    url: 'https://replit.com',
    iconUrl: getImg('https://replit.com'),
    popular: false,
    tags: ['cloud', 'beginner']
  },
  {
    id: 'devin',
    name: 'Devin',
    description: 'The first fully autonomous AI software engineer.',
    category: Category.Coding,
    pricing: PricingModel.Paid,
    url: 'https://cognition.ai',
    iconUrl: getImg('https://cognition.ai'),
    popular: true,
    tags: ['agent', 'autonomous']
  },

  // AUDIO
  {
    id: 'suno',
    name: 'Suno',
    description: 'Create radio-quality songs with vocals from a text prompt.',
    category: Category.Audio,
    pricing: PricingModel.Freemium,
    url: 'https://suno.com',
    iconUrl: getImg('https://suno.com'),
    popular: true,
    tags: ['music', 'songs']
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'Expressive AI music generation for creators.',
    category: Category.Audio,
    pricing: PricingModel.Freemium,
    url: 'https://udio.com',
    iconUrl: getImg('https://udio.com'),
    popular: true,
    tags: ['music', 'production']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'The most realistic AI text-to-speech and voice cloning.',
    category: Category.Audio,
    pricing: PricingModel.Freemium,
    url: 'https://elevenlabs.io',
    iconUrl: getImg('https://elevenlabs.io'),
    popular: true,
    tags: ['tts', 'voice']
  },
  
  // RESEARCH & SEARCH
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'A conversational search engine that provides citations.',
    category: Category.Research,
    pricing: PricingModel.Freemium,
    url: 'https://perplexity.ai',
    iconUrl: getImg('https://perplexity.ai'),
    popular: true,
    tags: ['search', 'answers']
  },
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'Search engine for scientific research and papers.',
    category: Category.Research,
    pricing: PricingModel.Freemium,
    url: 'https://consensus.app',
    iconUrl: getImg('https://consensus.app'),
    popular: false,
    tags: ['science', 'academic']
  },
  {
    id: 'glean',
    name: 'Glean',
    description: 'AI-powered work assistant to find info across your company.',
    category: Category.Business,
    pricing: PricingModel.Paid,
    url: 'https://glean.com',
    iconUrl: getImg('https://glean.com'),
    popular: false,
    tags: ['enterprise', 'search']
  },

  // PRODUCTIVITY & BUSINESS
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'Create beautiful presentations and websites with AI.',
    category: Category.Productivity,
    pricing: PricingModel.Freemium,
    url: 'https://gamma.app',
    iconUrl: getImg('https://gamma.app'),
    popular: true,
    tags: ['slides', 'decks']
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI-powered storytelling format for decks and docs.',
    category: Category.Productivity,
    pricing: PricingModel.Freemium,
    url: 'https://tome.app',
    iconUrl: getImg('https://tome.app'),
    popular: false,
    tags: ['storytelling', 'slides']
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    description: 'AI meeting assistant that records, transcribes, and summarizes.',
    category: Category.Productivity,
    pricing: PricingModel.Freemium,
    url: 'https://otter.ai',
    iconUrl: getImg('https://otter.ai'),
    popular: false,
    tags: ['meetings', 'transcription']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'Edit audio and video by editing text.',
    category: Category.Video,
    pricing: PricingModel.Freemium,
    url: 'https://descript.com',
    iconUrl: getImg('https://descript.com'),
    popular: true,
    tags: ['podcast', 'editing']
  },
  {
    id: 'zapier',
    name: 'Zapier AI',
    description: 'Automate workflows with natural language.',
    category: Category.Business,
    pricing: PricingModel.Freemium,
    url: 'https://zapier.com',
    iconUrl: getImg('https://zapier.com'),
    popular: true,
    tags: ['automation', 'workflow']
  },
  
  // 3D & MISC
  {
    id: 'spline',
    name: 'Spline AI',
    description: 'Generate 3D objects and scenes with text prompts.',
    category: Category.ThreeD,
    pricing: PricingModel.Freemium,
    url: 'https://spline.design',
    iconUrl: getImg('https://spline.design'),
    popular: false,
    tags: ['3d', 'webgl']
  },
  {
    id: 'meshy',
    name: 'Meshy',
    description: 'Create 3D models from text or images in minutes.',
    category: Category.ThreeD,
    pricing: PricingModel.Freemium,
    url: 'https://meshy.ai',
    iconUrl: getImg('https://meshy.ai'),
    popular: false,
    tags: ['assets', 'game dev']
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'The community and platform for open-source ML models.',
    category: Category.Coding,
    pricing: PricingModel.OpenSource,
    url: 'https://huggingface.co',
    iconUrl: getImg('https://huggingface.co'),
    popular: true,
    tags: ['community', 'models']
  },
  {
    id: 'civitai',
    name: 'Civitai',
    description: 'Platform for sharing Stable Diffusion models and LoRAs.',
    category: Category.Image,
    pricing: PricingModel.OpenSource,
    url: 'https://civitai.com',
    iconUrl: getImg('https://civitai.com'),
    popular: true,
    tags: ['community', 'fine-tuning']
  },
  {
    id: 'krea',
    name: 'Krea.ai',
    description: 'Real-time image generation and enhancement canvas.',
    category: Category.Image,
    pricing: PricingModel.Freemium,
    url: 'https://krea.ai',
    iconUrl: getImg('https://krea.ai'),
    popular: true,
    tags: ['real-time', 'canvas']
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Fast chat with all the best AI models in one place.',
    category: Category.Text,
    pricing: PricingModel.Freemium,
    url: 'https://poe.com',
    iconUrl: getImg('https://poe.com'),
    popular: false,
    tags: ['aggregator', 'chat']
  },
  {
    id: 'beautifulai',
    name: 'Beautiful.ai',
    description: 'Generative presentation software for the workplace.',
    category: Category.Business,
    pricing: PricingModel.Paid,
    url: 'https://beautiful.ai',
    iconUrl: getImg('https://beautiful.ai'),
    popular: false,
    tags: ['slides', 'design']
  },
  {
    id: 'canva',
    name: 'Canva Magic',
    description: 'All-in-one design suite with powerful AI tools.',
    category: Category.Image,
    pricing: PricingModel.Freemium,
    url: 'https://canva.com',
    iconUrl: getImg('https://canva.com'),
    popular: true,
    tags: ['design', 'social']
  },
  {
    id: 'characterai',
    name: 'Character.ai',
    description: 'Chat with AI characters who have distinct personalities.',
    category: Category.Text,
    pricing: PricingModel.Free,
    url: 'https://character.ai',
    iconUrl: getImg('https://character.ai'),
    popular: true,
    tags: ['roleplay', 'fun']
  }
];