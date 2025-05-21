function Footer() {
  return (
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
  )
}

export default Footer
