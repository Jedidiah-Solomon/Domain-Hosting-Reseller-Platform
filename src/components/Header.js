"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import MegaMenu from "./MegaMenu"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img src="/logo.png" alt="Hordanso Logo" className="h-12 w-auto" />
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
          <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="#" className="hidden md:block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
            Support
          </Link>
          <a
            href="https://my.hordanso.xyz/client/index.php"
            className="px-4 py-2 rounded-md border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            Login
          </a>
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Domains
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Hosting
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Websites
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Partners
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Blog
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Support
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
