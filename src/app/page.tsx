import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProofBar } from '@/components/SocialProofBar';
import { HowItWorks } from '@/components/HowItWorks';
import { AppShowcase } from '@/components/AppShowcase';
import { FeatureSection } from '@/components/FeatureSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustSection } from '@/components/TrustSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <AppShowcase />
      <FeatureSection />
      <TestimonialsSection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
