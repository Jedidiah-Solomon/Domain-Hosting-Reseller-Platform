import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import FeaturesSection from "../components/FeaturesSection"
import TestimonialsSection from "../components/TestimonialsSection"
import RegistryLogosSection from "../components/RegistryLogosSection"
import CtaSection from "../components/CtaSection"

function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <RegistryLogosSection />
      <CtaSection />
    </main>
  )
}

export default HomePage
