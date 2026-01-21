'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { App } from '@/lib/apps';
import { PlatformBadges } from '@/components/ui/PlatformBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import { TechStack } from '@/components/ui/TechPill';

interface AppCardProps {
    app: App;
    index?: number;
}

export default function AppCard({ app, index = 0 }: AppCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/apps/${app.slug}`} className="group block">
                <div className="relative p-6 rounded-2xl bg-surface border border-white/5 card-hover overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

                    <div className="relative">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            {/* App Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                                {app.name.charAt(0)}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-lg text-white truncate group-hover:text-primary transition-colors">
                                        {app.name}
                                    </h3>
                                    <StatusBadge status={app.status} size="sm" />
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-2">{app.tagline}</p>
                            </div>
                        </div>

                        {/* Platforms */}
                        <div className="mb-4">
                            <PlatformBadges platforms={app.platforms} size="sm" />
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-4">
                            <TechStack techStack={app.techStack} size="sm" limit={3} />
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-sm text-gray-500">v{app.version}</span>
                            <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
