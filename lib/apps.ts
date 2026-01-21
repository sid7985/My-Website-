export type Platform = 'android' | 'ios' | 'windows' | 'macos' | 'web';
export type Status = 'active' | 'beta' | 'archived';
export type Category = 'ai' | 'productivity' | 'utility' | 'experimental';

export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface AppLinks {
    playStore?: string;
    appStore?: string;
    windows?: string;
    mac?: string;
    web?: string;
    github?: string;
}

export interface App {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    platforms: Platform[];
    status: Status;
    category: Category;
    featured: boolean;
    icon: string;
    heroImage: string;
    screenshots: string[];
    features: Feature[];
    techStack: string[];
    links: AppLinks;
    releaseDate: string;
    version: string;
    downloads?: number;
    stars?: number;
    roadmap?: string[];
}

export const apps: App[] = [
    {
        id: '1',
        slug: 'chargelink-ev-finder',
        name: 'ChargeLink',
        tagline: 'Find EV charging stations near you in seconds',
        description: 'ChargeLink is a comprehensive EV charging station finder that helps electric vehicle owners locate, navigate to, and check availability of charging stations across India. Built with real-time data integration and route optimization, it makes range anxiety a thing of the past. The app features live availability status, pricing information, and user reviews to help you make informed decisions.',
        platforms: ['android', 'ios', 'web'],
        status: 'active',
        category: 'utility',
        featured: true,
        icon: '/apps/chargelink/icon.png',
        heroImage: '/apps/chargelink/hero.png',
        screenshots: [
            '/apps/chargelink/screen1.png',
            '/apps/chargelink/screen2.png',
            '/apps/chargelink/screen3.png',
        ],
        features: [
            {
                title: 'Real-time Availability',
                description: 'See live charging station status and availability before you arrive',
                icon: 'Zap',
            },
            {
                title: 'Route Planning',
                description: 'Optimized routes with charging stops calculated automatically',
                icon: 'Route',
            },
            {
                title: 'Price Comparison',
                description: 'Compare charging costs across different providers and stations',
                icon: 'IndianRupee',
            },
            {
                title: 'User Reviews',
                description: 'Read reviews and ratings from the EV community',
                icon: 'Star',
            },
            {
                title: 'Favorites',
                description: 'Save your preferred stations for quick access',
                icon: 'Heart',
            },
        ],
        techStack: ['Kotlin', 'Jetpack Compose', 'Google Maps API', 'Firebase', 'Room DB'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.chargelink',
            github: 'https://github.com/yourusername/chargelink',
        },
        releaseDate: '2024-08-15',
        version: '2.1.0',
        downloads: 5000,
        stars: 42,
        roadmap: ['Apple CarPlay support', 'Widget for home screen', 'Trip planner with multiple stops'],
    },
    {
        id: '2',
        slug: 'textcraft-ai',
        name: 'TextCraft AI',
        tagline: 'AI-powered text processing and analysis',
        description: 'TextCraft AI leverages the power of Google Gemini API to provide intelligent text processing capabilities. From summarization to sentiment analysis, translation to text generation, it handles all your NLP needs with state-of-the-art AI. Perfect for students, researchers, and professionals who work with text daily.',
        platforms: ['android', 'web'],
        status: 'active',
        category: 'ai',
        featured: true,
        icon: '/apps/textcraft/icon.png',
        heroImage: '/apps/textcraft/hero.png',
        screenshots: [
            '/apps/textcraft/screen1.png',
            '/apps/textcraft/screen2.png',
        ],
        features: [
            {
                title: 'Smart Summarization',
                description: 'Get concise summaries of long documents instantly',
                icon: 'FileText',
            },
            {
                title: 'Sentiment Analysis',
                description: 'Understand the emotional tone of any text',
                icon: 'Smile',
            },
            {
                title: 'Multi-language Translation',
                description: 'Translate between 50+ languages with high accuracy',
                icon: 'Languages',
            },
            {
                title: 'Text Generation',
                description: 'Generate creative content based on your prompts',
                icon: 'Sparkles',
            },
            {
                title: 'Grammar Correction',
                description: 'Fix grammar and improve writing quality',
                icon: 'CheckCircle',
            },
        ],
        techStack: ['Python', 'Google Gemini API', 'Flask', 'NLP', 'TensorFlow'],
        links: {
            web: 'https://textcraft-ai.vercel.app',
            github: 'https://github.com/yourusername/textcraft-ai',
        },
        releaseDate: '2024-11-20',
        version: '1.3.0',
        downloads: 2500,
        stars: 28,
        roadmap: ['Voice input support', 'API for developers', 'Custom model fine-tuning'],
    },
    {
        id: '3',
        slug: 'voicenotes-pro',
        name: 'VoiceNotes Pro',
        tagline: 'Voice-to-text notes with AI organization',
        description: 'VoiceNotes Pro transforms your spoken words into organized, searchable notes. Using advanced speech recognition and AI-powered categorization, it automatically tags, summarizes, and organizes your voice recordings. Perfect for meetings, lectures, brainstorming sessions, and quick thoughts on the go.',
        platforms: ['android', 'ios'],
        status: 'beta',
        category: 'productivity',
        featured: true,
        icon: '/apps/voicenotes/icon.png',
        heroImage: '/apps/voicenotes/hero.png',
        screenshots: [
            '/apps/voicenotes/screen1.png',
            '/apps/voicenotes/screen2.png',
        ],
        features: [
            {
                title: 'Speech Recognition',
                description: 'Accurate voice-to-text conversion in real-time',
                icon: 'Mic',
            },
            {
                title: 'Auto Categorization',
                description: 'AI automatically organizes notes into relevant categories',
                icon: 'FolderOpen',
            },
            {
                title: 'Smart Search',
                description: 'Search across all your notes by content or topic',
                icon: 'Search',
            },
            {
                title: 'Cloud Sync',
                description: 'Access your notes from any device, anytime',
                icon: 'Cloud',
            },
        ],
        techStack: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'Gemini API', 'Kotlin Multiplatform'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.voicenotes',
        },
        releaseDate: '2025-01-10',
        version: '0.9.0',
        downloads: 800,
        roadmap: ['Desktop app', 'Collaboration features', 'Export to PDF/Word'],
    },
    {
        id: '4',
        slug: 'devtools-hub',
        name: 'DevTools Hub',
        tagline: 'Essential utilities for developers',
        description: 'DevTools Hub is a collection of essential developer utilities bundled into one convenient application. From JSON formatters to regex testers, base64 encoders to color pickers, it has everything you need for day-to-day development tasks. Works completely offline for maximum privacy and speed.',
        platforms: ['windows', 'macos', 'web'],
        status: 'active',
        category: 'utility',
        featured: false,
        icon: '/apps/devtools/icon.png',
        heroImage: '/apps/devtools/hero.png',
        screenshots: [
            '/apps/devtools/screen1.png',
            '/apps/devtools/screen2.png',
        ],
        features: [
            {
                title: 'JSON Tools',
                description: 'Format, validate, and transform JSON data',
                icon: 'Braces',
            },
            {
                title: 'Regex Tester',
                description: 'Test and debug regular expressions with live preview',
                icon: 'Code',
            },
            {
                title: 'Encoding Utils',
                description: 'Base64, URL, and HTML encoding/decoding tools',
                icon: 'Binary',
            },
            {
                title: 'Color Picker',
                description: 'Pick colors and convert between formats',
                icon: 'Palette',
            },
            {
                title: 'Offline First',
                description: 'All tools work without internet connection',
                icon: 'WifiOff',
            },
        ],
        techStack: ['TypeScript', 'React', 'Electron', 'Tailwind CSS'],
        links: {
            web: 'https://devtools-hub.vercel.app',
            github: 'https://github.com/yourusername/devtools-hub',
            windows: 'https://github.com/yourusername/devtools-hub/releases',
            mac: 'https://github.com/yourusername/devtools-hub/releases',
        },
        releaseDate: '2024-06-01',
        version: '3.0.2',
        downloads: 12000,
        stars: 156,
        roadmap: ['Linux support', 'Plugin system', 'Custom themes'],
    },
];

export function getAppBySlug(slug: string): App | undefined {
    return apps.find((app) => app.slug === slug);
}

export function getFeaturedApps(): App[] {
    return apps.filter((app) => app.featured);
}

export function getAppsByPlatform(platform: Platform): App[] {
    return apps.filter((app) => app.platforms.includes(platform));
}

export function getAppsByCategory(category: Category): App[] {
    return apps.filter((app) => app.category === category);
}

export function getAppsByStatus(status: Status): App[] {
    return apps.filter((app) => app.status === status);
}

export function searchApps(query: string): App[] {
    const lowerQuery = query.toLowerCase();
    return apps.filter(
        (app) =>
            app.name.toLowerCase().includes(lowerQuery) ||
            app.tagline.toLowerCase().includes(lowerQuery) ||
            app.description.toLowerCase().includes(lowerQuery) ||
            app.techStack.some((tech) => tech.toLowerCase().includes(lowerQuery))
    );
}

export function getRelatedApps(currentApp: App, limit: number = 3): App[] {
    return apps
        .filter(
            (app) =>
                app.id !== currentApp.id &&
                (app.category === currentApp.category ||
                    app.platforms.some((p) => currentApp.platforms.includes(p)))
        )
        .slice(0, limit);
}
