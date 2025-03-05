import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { AboutSection } from "@/components/about-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import OurWhy from "@/components/OurWhy";
import InteractiveMap from "@/components/InteractiveMap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ExpertiseSection />
      <OurWhy />
      <AboutSection />
      <NewsSection />
      <InteractiveMap />
      <ContactSection />
      <Footer />
    </main>
  );
}
