import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import LatestArticlesSection from "../components/LatestArticlesSection";
import FeaturedEventsSection from "../components/FeaturedEventsSection";
import PartnersSection from "@/components/PartnersSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

  // Change this to your secret certificate value
  const VALID_KEY = "my-secure-certificate-123";

  // 🚫 Block access if key is missing or invalid
  if (SITE_KEY !== VALID_KEY) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            🚫 Website Unavailable
          </h1>
          <p className="text-gray-400">
            Validate with your certificate provider to gain access.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Allow access if key is valid
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <LatestArticlesSection />
      <FeaturedEventsSection />
      <PartnersSection />
      <NewsletterSection />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
