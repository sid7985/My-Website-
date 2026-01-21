'use client';

import { motion } from 'framer-motion';
import { Smartphone, Monitor, Brain, Layers } from 'lucide-react';
import { apps } from '@/lib/apps';

const stats = [
    {
        icon: Layers,
        value: `${apps.length}+`,
        label: 'Apps Published',
    },
    {
        icon: Smartphone,
        value: '5',
        label: 'Platforms Supported',
    },
    {
        icon: Brain,
        value: 'AI',
        label: 'First Approach',
    },
    {
        icon: Monitor,
        value: '24/7',
        label: 'Always Available',
    },
];

export default function StatsSection() {
    return (
        <section className="relative py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                                <stat.icon className="w-7 h-7 text-primary" />
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
