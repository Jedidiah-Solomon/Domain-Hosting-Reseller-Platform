import Link from "next/link"
import Image from "next/image"
import { Server, Shield, Clock, Monitor, Database, Layout } from "lucide-react"
import DomainSearch from "@/components/domain-search"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import DomainPricing from "@/components/domain-pricing"
import RegistryLogos from "@/components/registry-logos"
import MegaMenu from "@/components/mega-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <Image src="/logo.png" alt="Hordanso Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Hordanso</h1>
              <p className="text-xs text-gray-500">powered by HOSTAFRIKA</p>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Domains
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu
                title="Domains"
                items={[
                  { title: "Register Domain Names", description: "Find the perfect domain name today" },
                  { title: "Domain Transfers", description: "Transfer domains to us and save on renewal fees" },
                  { title: "Domain Reseller", description: "Become a domain reseller today" },
                  { title: "WHOIS Lookup", description: "Find the whois information for any domain name" },
                ]}
              />
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Hosting
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu
                title="Hosting"
                items={[
                  { title: "Web hosting", description: "Your journey starts here with affordable Web Hosting" },
                  { title: "Wordpress Hosting", description: "WordPress Hosting designed to boost performance" },
                  { title: "Reseller Hosting", description: "Start your own hosting business today" },
                  { title: "SSL Certificates", description: "Secure your site with an SSL and build user trust" },
                ]}
              />
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Websites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Partners
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu
                title="Partners"
                items={[{ title: "Affiliates", description: "Become an Affiliate and earn up to 5% for each sale" }]}
              />
            </div>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hidden md:block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Support
            </Link>
            <Link
              href="https://my.hordanso.xyz/client/index.php"
              className="px-4 py-2 rounded-md border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <button className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cityscape.png"
            alt="Cityscape"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Perfect .com.ng Domain
              <br />
              is Now Just ₦5,999
            </h1>
            <p className="text-xl opacity-90 mb-4">
              <span className="font-semibold">.com</span> domains NOW ONLY ₦17,000 for registration!
            </p>
            <p className="text-xl opacity-90 mb-8">Let your business be found, trusted, and clicked.</p>
            <DomainSearch />
          </div>
          <DomainPricing />
        </div>
      </section>

      {/* Services Section */}
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

      {/* Features Section */}
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Hordanso has been a game-changer for my business. Their hosting is reliable and their support team is always ready to help."
              author="John Doe"
              company="Tech Startup"
            />
            <TestimonialCard
              quote="I've been using Hordanso for over 2 years now. The uptime is excellent and their prices are very competitive."
              author="Sarah Johnson"
              company="E-commerce Store"
            />
            <TestimonialCard
              quote="The domain registration process was smooth and their hosting service is top-notch. Highly recommended!"
              author="Michael Brown"
              company="Digital Agency"
            />
          </div>
        </div>
      </section>

      {/* Registry Logos */}
      <section className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600">We are accredited with the following domain name registries</p>
          </div>
          <RegistryLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Hordanso for their domain and hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
            >
              Search Domains
            </Link>
            <Link
              href="https://my.hordanso.xyz/client/index.php"
              className="px-8 py-3 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
            >
              Client Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Domain Names</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Register a Domain
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Domain Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Domain Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    WHOIS Lookup
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hosting</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    WordPress Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Reseller Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    cPanel Web Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    cPanel WordPress Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    cPanel Reseller Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Site Builder
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Get Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Submit a Support Ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Submit a Sales Enquiry
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Report Abuse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Payment Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Additional Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legals</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Acceptable Use Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Affiliate Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hordanso. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
