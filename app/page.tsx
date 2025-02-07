import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import AboutUs from "@/components/sections/aboutUs";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutUs />
      <Gallery />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
