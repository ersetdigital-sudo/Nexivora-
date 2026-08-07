import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { GamesSection } from "@/components/sections/GamesSection";
import { TopUpSection } from "@/components/sections/TopUpSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { faqJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <GamesSection />
        <TopUpSection />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
