import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import ModulesSection from '../components/landing/ModulesSection';
import IdealForSection from '../components/landing/IdealForSection';
import BeforeAfterSection from '../components/landing/BeforeAfterSection';
import CTASection from '../components/landing/CTASection';
import FooterSection from '../components/landing/FooterSection';

interface LandingPageProps {
  onEnterDemo: () => void;
}

export default function LandingPage({ onEnterDemo }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar onEnterDemo={onEnterDemo} />
      <main>
        <HeroSection onEnterDemo={onEnterDemo} />
        <BenefitsSection />
        <ModulesSection />
        <IdealForSection />
        <BeforeAfterSection />
        <CTASection onEnterDemo={onEnterDemo} />
      </main>
      <FooterSection />
    </div>
  );
}
