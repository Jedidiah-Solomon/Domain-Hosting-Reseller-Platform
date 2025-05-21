import { Monitor, Database, Layout } from "lucide-react"
import ServiceCard from "./ServiceCard"

function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Monitor className="h-12 w-12 text-yellow-500" />}
            title="Web Hosting"
            description="Your journey starts here with affordable Web Hosting."
            price="805.00"
            features={["Standard Performance"]}
          />
          <ServiceCard
            icon={<Database className="h-12 w-12 text-yellow-500" />}
            title="WordPress Hosting"
            description="WordPress Hosting designed to boost your websites performance."
            price="4,500.00"
            features={["Enhanced Performance"]}
          />
          <ServiceCard
            icon={<Layout className="h-12 w-12 text-yellow-500" />}
            title="Site Builder"
            description="Create your website in minutes with easy to use site builder"
            price="2,520.00"
            features={["Standard Performance"]}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
