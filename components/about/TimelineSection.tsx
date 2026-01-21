'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Award } from 'lucide-react';

const timelineEvents = [
    {
        year: '2021',
        title: 'Started B-Tech Journey',
        description: 'Began pursuing Bachelor of Technology, diving deep into computer science fundamentals and programming.',
        icon: GraduationCap,
        type: 'education',
    },
    {
        year: '2022',
        title: 'First Android App',
        description: 'Built and published my first Android application, learning Kotlin and Android development from scratch.',
        icon: Rocket,
        type: 'milestone',
    },
    {
        year: '2023',
        title: 'AI/ML Focus',
        description: 'Started specializing in AI and Machine Learning, working with TensorFlow and natural language processing.',
        icon: Award,
        type: 'milestone',
    },
    {
        year: '2024',
        title: 'ChargeLink Launch',
        description: 'Launched ChargeLink, an EV charging station finder app, marking my entry into production-grade applications.',
        icon: Briefcase,
        type: 'project',
    },
    {
        year: '2024',
        title: 'Gemini API Integration',
        description: 'Integrated Google\'s Gemini API into multiple projects, enhancing apps with advanced AI capabilities.',
        icon: Award,
        type: 'milestone',
    },
    {
        year: '2025',
        title: 'Cross-Platform Expansion',
        description: 'Expanded into cross-platform development with Kotlin Multiplatform and web technologies.',
        icon: Rocket,
        type: 'milestone',
    },
];

export default function TimelineSection() {
    return (
        <section className="py-16 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
                    <p className="text-gray-400">Key milestones in my development career.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-start gap-6 lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                {/* Content */}
                                <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                        <event.icon className="w-4 h-4" />
                                        {event.year}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                                    <p className="text-gray-400 text-sm">{event.description}</p>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden lg:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
