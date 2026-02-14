import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import LatestArticlesSection from "../components/LatestArticlesSection";
import FeaturedEventsSection from "../components/FeaturedEventsSection";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <LatestArticlesSection />
      <FeaturedEventsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
