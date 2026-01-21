'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-primary-dark/10 border border-primary/20 p-8 sm:p-12 text-center"
                >
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,184,169,0.5) 1px, transparent 0)`,
                            backgroundSize: '24px 24px',
                        }}
                    />

                    <div className="relative">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Let&apos;s Build Something Amazing
                        </h2>

                        <p className="text-gray-400 max-w-xl mx-auto mb-8">
                            Have a project in mind? I&apos;m always open to discussing new opportunities,
                            collaborations, or just chatting about technology.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/about#contact"
                                className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all btn-glow flex items-center gap-2"
                            >
                                Get In Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="mailto:your@email.com"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
                            >
                                your@email.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
