import RegistryLogos from "./RegistryLogos"

function RegistryLogosSection() {
  return (
    <section className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600">We are accredited with the following domain name registries</p>
        </div>
        <RegistryLogos />
      </div>
    </section>
  )
}

export default RegistryLogosSection
