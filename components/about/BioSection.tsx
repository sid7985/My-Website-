'use client';

import { motion } from 'framer-motion';

export default function BioSection() {
    return (
        <section className="py-16 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            I&apos;m a B-Tech student from Jodhpur, India, passionate about building software that
                            solves real problems. My journey in tech started with a curiosity about how things work,
                            and it has evolved into a deep focus on AI/ML and cross-platform development.
                        </p>

                        <p>
                            I specialize in building mobile applications using Kotlin and Jetpack Compose, with a
                            particular interest in integrating AI capabilities through Google&apos;s Gemini API and
                            TensorFlow. I believe that the best software is not just functional—it&apos;s intuitive,
                            beautiful, and delightful to use.
                        </p>

                        <p>
                            When I&apos;m not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or diving deep into Theory of Computation and other CS fundamentals.
                            I&apos;m always looking for opportunities to learn and grow, whether it&apos;s through
                            collaboration, freelance projects, or personal experiments.
                        </p>
                    </div>

                    {/* Philosophy quote */}
                    <div className="mt-8 p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
                        <p className="text-white italic text-lg">
                            &quot;I build software that solves real problems, with a focus on AI integration
                            and intuitive user experiences.&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
