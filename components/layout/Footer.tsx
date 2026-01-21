import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
    { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/yourusername', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:your@email.com', icon: Mail, label: 'Email' },
];

const footerLinks = [
    {
        title: 'Navigation',
        links: [
            { href: '/', label: 'Home' },
            { href: '/apps', label: 'Apps' },
            { href: '/about', label: 'About' },
        ],
    },
    {
        title: 'Apps',
        links: [
            { href: '/apps/chargelink-ev-finder', label: 'ChargeLink' },
            { href: '/apps/textcraft-ai', label: 'TextCraft AI' },
            { href: '/apps/voicenotes-pro', label: 'VoiceNotes Pro' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { href: '#', label: 'Privacy Policy' },
            { href: '#', label: 'Terms of Service' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                <span className="text-white font-bold">D</span>
                            </div>
                            <span className="font-bold text-xl text-white">
                                Dev<span className="text-primary">Portfolio</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            Building AI-powered cross-platform solutions that solve real problems.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Jodhpur, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
