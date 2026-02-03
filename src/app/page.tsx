import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conecta Marceneiro | Iniciativa M&F Planejados",
  description: "A plataforma que conecta clientes exigentes aos melhores marceneiros do mercado. Segurança, qualidade e gestão profissional.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <TrustSection />
      <Footer />
    </main>
  );
}
