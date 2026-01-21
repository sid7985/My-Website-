'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                        Drop me a message and I&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <a
                                href="mailto:your@email.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white group-hover:text-primary transition-colors">your@email.com</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Github className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">GitHub</p>
                                    <p className="text-white group-hover:text-primary transition-colors">@yourusername</p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Linkedin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">LinkedIn</p>
                                    <p className="text-white group-hover:text-primary transition-colors">@yourusername</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="flex items-start gap-3">
                                <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                    <p className="text-white font-medium mb-1">Response Time</p>
                                    <p className="text-gray-400 text-sm">
                                        I typically respond within 24-48 hours. For urgent matters,
                                        please mention it in your message.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Project inquiry, collaboration, etc."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all btn-glow"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>

                            <p className="text-sm text-gray-400 text-center">
                                Or email me directly at{' '}
                                <a href="mailto:your@email.com" className="text-primary hover:underline">
                                    your@email.com
                                </a>
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
