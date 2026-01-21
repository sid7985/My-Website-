import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedAppsSection from '@/components/home/FeaturedAppsSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturedAppsSection />
                <AboutPreviewSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
