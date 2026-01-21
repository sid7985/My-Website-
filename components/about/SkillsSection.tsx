'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Smartphone, Wrench, Brain } from 'lucide-react';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: Code,
        skills: ['Kotlin', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C++'],
    },
    {
        title: 'Frameworks & Libraries',
        icon: Cpu,
        skills: ['Jetpack Compose', 'Android SDK', 'React', 'Next.js', 'Flask', 'TensorFlow'],
    },
    {
        title: 'AI & Machine Learning',
        icon: Brain,
        skills: ['Google Gemini API', 'NLP', 'Text Preprocessing', 'Sentiment Analysis', 'ML Kit'],
    },
    {
        title: 'Platforms',
        icon: Smartphone,
        skills: ['Android', 'iOS', 'Windows', 'macOS', 'Web'],
    },
    {
        title: 'Tools & Technologies',
        icon: Wrench,
        skills: ['Android Studio', 'Git', 'GitHub', 'Firebase', 'Google Colab', 'Vercel', 'Figma'],
    },
];

export default function SkillsSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I work with daily.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-surface border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <category.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
