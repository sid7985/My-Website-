'use client';

import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const socialLinks = [
    { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/yourusername', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:your@email.com', icon: Mail, label: 'Email' },
];

export default function AboutHero() {
    return (
        <section className="relative py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-br from-primary/30 to-primary-dark/20 flex items-center justify-center overflow-hidden">
                            {/* Placeholder avatar - replace with actual image */}
                            <div className="text-8xl lg:text-9xl font-bold text-primary/50">D</div>
                        </div>
                        {/* Status badge */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium whitespace-nowrap">
                            ✓ Available for Freelance
                        </div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            <span>Jodhpur, Rajasthan, India</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Developer Name
                        </h1>

                        <p className="text-xl text-primary mb-6">Developer & AI Enthusiast</p>

                        {/* Social links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Resume download */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
