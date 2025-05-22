import WhoisLookup from "@/components/whois-lookup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHOIS Lookup | Hordanso",
  description:
    "Check domain name availability and WHOIS information for any domain name.",
};

export default function WhoisLookupPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                WHOIS Lookup
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Check domain name availability and WHOIS information for any
                domain name.
              </p>
            </div>
          </div>
        </section>

        {/* WHOIS Lookup Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <WhoisLookup />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">What is WHOIS?</h3>
                  <p className="text-gray-600">
                    WHOIS is a query and response protocol that is widely used
                    for querying databases that store the registered users or
                    assignees of an Internet resource, such as a domain name, an
                    IP address block, or an autonomous system.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Why should I use WHOIS lookup?
                  </h3>
                  <p className="text-gray-600">
                    WHOIS lookup helps you verify domain availability, find
                    domain owner information, check domain expiration dates, and
                    gather contact information for the domain registrant.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Is the WHOIS information accurate?
                  </h3>
                  <p className="text-gray-600">
                    WHOIS information is generally accurate, but some domain
                    owners may use privacy protection services that mask their
                    personal information. Additionally, WHOIS data may be
                    limited due to GDPR and other privacy regulations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    How often is WHOIS data updated?
                  </h3>
                  <p className="text-gray-600">
                    WHOIS data is typically updated in real-time when changes
                    are made to domain registrations. However, some registrars
                    may have delays in updating their WHOIS databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
