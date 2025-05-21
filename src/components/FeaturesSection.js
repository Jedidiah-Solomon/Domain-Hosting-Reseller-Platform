import { Server, Shield, Clock } from "lucide-react"

function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Hordanso?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide reliable domain and hosting services with exceptional customer support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reliable Hosting</h3>
            <p className="text-gray-600">99.9% uptime guarantee with high-performance servers and SSD storage.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
            <p className="text-gray-600">
              Free SSL certificates and advanced security features to protect your website.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated support team is available around the clock to assist you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
