'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, User, MapPin } from 'lucide-react';

export default function AboutPreviewSection() {
    return (
        <section className="relative py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 mx-auto lg:mx-0">
                            {/* Avatar placeholder */}
                            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/30 to-primary-dark/30 flex items-center justify-center">
                                <User className="w-24 h-24 text-primary/50" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent/20 blur-sm" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/20 blur-sm" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            <span>Jodhpur, India</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Hi, I&apos;m a <span className="text-primary">Developer</span> &amp; AI Enthusiast
                        </h2>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I&apos;m a B-Tech student passionate about building software that solves real problems.
                            With a focus on AI/ML and cross-platform development, I create applications that
                            leverage cutting-edge technology to deliver exceptional user experiences.
                        </p>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            My expertise spans from native Android development with Kotlin and Jetpack Compose
                            to AI integration using Google&apos;s Gemini API and TensorFlow. I believe in building
                            products that are not just functional, but delightful to use.
                        </p>

                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Learn more about me
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
