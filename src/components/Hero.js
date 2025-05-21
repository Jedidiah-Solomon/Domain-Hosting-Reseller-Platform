import DomainSearch from "./DomainSearch";
import DomainPricing from "./DomainPricing";

function Hero() {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://docs.mikepoweredbydhi.com/domain_services/media/architecture-overview.png"
          alt="Cityscape"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Your Ideal .com.ng Domain
            <br />
            Now Just ₦5,999
          </h1>
          <p className="text-xl opacity-90 mb-4">
            <span className="font-semibold">.com</span> domains NOW ONLY ₦17,000
            for registration!
          </p>
          <p className="text-xl opacity-90 mb-8">
            Boost your brand’s visibility, trust, and clicks — get started
            today.
          </p>
          <DomainSearch />
        </div>
        <DomainPricing />
      </div>
    </section>
  );
}

export default Hero;
