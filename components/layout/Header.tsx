'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/apps', label: 'Apps' },
    { href: '/about', label: 'About' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl text-white hidden sm:block">
                            Dev<span className="text-primary">Portfolio</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/about#contact"
                            className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all btn-glow"
                        >
                            Contact Me
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-300 hover:text-primary transition-colors font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/about#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-5 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-all text-center"
                            >
                                Contact Me
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
