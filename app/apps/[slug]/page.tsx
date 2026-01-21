import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Download,
    Calendar,
    Star,
    Zap,
    Route,
    IndianRupee,
    Heart,
    FileText,
    Smile,
    Languages,
    Sparkles,
    CheckCircle,
    Mic,
    FolderOpen,
    Search,
    Cloud,
    Braces,
    Code,
    Binary,
    Palette,
    WifiOff,
    LucideIcon
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PlatformBadges } from '@/components/ui/PlatformBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import { TechStack } from '@/components/ui/TechPill';
import AppCard from '@/components/apps/AppCard';
import { apps, getAppBySlug, getRelatedApps } from '@/lib/apps';
import { formatDate } from '@/lib/utils';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

// Icon mapping - used only on the server
const iconMap: Record<string, LucideIcon> = {
    Zap, Route, IndianRupee, Star, Heart, FileText, Smile, Languages,
    Sparkles, CheckCircle, Mic, FolderOpen, Search, Cloud, Braces,
    Code, Binary, Palette, WifiOff, Download, ExternalLink
};

export async function generateStaticParams() {
    return apps.map((app) => ({
        slug: app.slug,
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const app = getAppBySlug(slug);

    if (!app) {
        return {
            title: 'App Not Found',
        };
    }

    return {
        title: `${app.name} - ${app.tagline}`,
        description: app.description,
        openGraph: {
            title: `${app.name} - ${app.tagline}`,
            description: app.description,
            type: 'website',
        },
    };
}

export default async function AppDetailPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const app = getAppBySlug(slug);

    if (!app) {
        notFound();
    }

    const relatedApps = getRelatedApps(app);

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/apps"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Apps
                    </Link>

                    {/* Hero Section */}
                    <AnimatedContainer>
                        <section className="mb-16">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* App Icon */}
                                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-primary/30 to-primary-dark/20 flex items-center justify-center text-4xl lg:text-5xl font-bold text-primary shrink-0">
                                    {app.name.charAt(0)}
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                            {app.name}
                                        </h1>
                                        <StatusBadge status={app.status} size="lg" />
                                    </div>

                                    <p className="text-xl text-gray-400 mb-6">{app.tagline}</p>

                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <PlatformBadges platforms={app.platforms} showLabels size="md" />
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>Released {formatDate(app.releaseDate)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>Version {app.version}</span>
                                        </div>
                                        {app.downloads && (
                                            <div className="flex items-center gap-2">
                                                <Download className="w-4 h-4" />
                                                <span>{app.downloads.toLocaleString()} downloads</span>
                                            </div>
                                        )}
                                        {app.stars && (
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                <span>{app.stars} stars</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Download Buttons */}
                                <div className="w-full lg:w-auto flex flex-col gap-3">
                                    {app.links.playStore && (
                                        <a
                                            href={app.links.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all"
                                        >
                                            <Download className="w-5 h-5" />
                                            Google Play
                                        </a>
                                    )}
                                    {app.links.appStore && (
                                        <a
                                            href={app.links.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
                                        >
                                            <Download className="w-5 h-5" />
                                            App Store
                                        </a>
                                    )}
                                    {app.links.web && (
                                        <a
                                            href={app.links.web}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Try Web App
                                        </a>
                                    )}
                                    {app.links.github && (
                                        <a
                                            href={app.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </section>
                    </AnimatedContainer>

                    {/* Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-gray-400 leading-relaxed max-w-4xl">{app.description}</p>
                    </section>

                    {/* Features */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {app.features.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon] || Sparkles;
                                return (
                                    <div
                                        key={index}
                                        className="p-6 rounded-2xl bg-surface border border-white/5"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
                        <TechStack techStack={app.techStack} size="md" />
                    </section>

                    {/* Roadmap */}
                    {app.roadmap && app.roadmap.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">Roadmap</h2>
                            <div className="space-y-3">
                                {app.roadmap.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-surface/50 border border-white/5"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Related Apps */}
                    {relatedApps.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Related Apps</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedApps.map((relatedApp, index) => (
                                    <AppCard key={relatedApp.id} app={relatedApp} index={index} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
