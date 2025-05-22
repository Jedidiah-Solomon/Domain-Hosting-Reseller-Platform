import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import RegistryLogosSection from "../components/RegistryLogosSection";
import CtaSection from "../components/CtaSection";
import WhoIsLookUp from "../app/whois-lookup/page.tsx";

function HomePage() {
  return (
    <main>
      <WhoIsLookUp />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <RegistryLogosSection />
      <CtaSection />
    </main>
  );
}

export default HomePage;
