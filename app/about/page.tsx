import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import BioSection from '@/components/about/BioSection';
import SkillsSection from '@/components/about/SkillsSection';
import TimelineSection from '@/components/about/TimelineSection';
import ContactSection from '@/components/about/ContactSection';

export const metadata: Metadata = {
    title: 'About - Developer & AI Enthusiast',
    description: 'Learn more about my journey as a developer specializing in AI-powered cross-platform applications.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20">
                <AboutHero />
                <BioSection />
                <SkillsSection />
                <TimelineSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
