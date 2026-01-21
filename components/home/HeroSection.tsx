'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient opacity-50" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,184,169,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">Building the future with AI</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Building{' '}
                        <span className="gradient-text">AI-Powered</span>
                        <br />
                        Cross-Platform Solutions
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        I create innovative applications that leverage artificial intelligence to solve real-world problems
                        across Android, iOS, Windows, macOS, and Web platforms.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/apps"
                            className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all btn-glow flex items-center gap-2"
                        >
                            Explore Apps
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            View Developer Profile
                        </Link>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
