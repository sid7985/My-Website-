'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedApps } from '@/lib/apps';
import AppCard from '@/components/apps/AppCard';

export default function FeaturedAppsSection() {
    const featuredApps = getFeaturedApps();

    return (
        <section className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Apps</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Check out my latest and most popular applications, built with modern technologies
                        and designed to solve real problems.
                    </p>
                </motion.div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredApps.map((app, index) => (
                        <AppCard key={app.id} app={app} index={index} />
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        href="/apps"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all"
                    >
                        View All Apps
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
