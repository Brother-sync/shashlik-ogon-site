import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Main landing page for Shashlik Ogon cafe
 * Design: Warm Mediterranean aesthetic with burnt orange accents
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
