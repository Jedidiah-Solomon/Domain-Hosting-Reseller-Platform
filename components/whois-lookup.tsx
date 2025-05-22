"use client";

import type React from "react";

import { useState } from "react";
import {
  Search,
  Loader2,
  CheckCircle,
  XCircle,
  Calendar,
  User,
  Building,
  Globe,
  Clock,
} from "lucide-react";

interface WhoisResult {
  domainName: string;
  available: boolean;
  registrar?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantEmail?: string;
  creationDate?: string;
  expiryDate?: string;
  updatedDate?: string;
  nameServers?: string[];
  status?: string[];
}

export default function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<WhoisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!domain) {
      setError("Please enter a domain name");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // In a real implementation, this would be an API call to your backend
      // For demo purposes, we'll simulate a response after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate API response
      if (domain.includes("available")) {
        setResult({
          domainName: domain,
          available: true,
        });
      } else {
        setResult({
          domainName: domain,
          available: false,
          registrar: "Example Registrar, Inc.",
          registrantName: "John Doe",
          registrantOrganization: "Example Organization",
          registrantEmail: "contact@example.com",
          creationDate: "2020-01-15T00:00:00Z",
          expiryDate: "2025-01-15T00:00:00Z",
          updatedDate: "2023-01-15T00:00:00Z",
          nameServers: ["ns1.example.com", "ns2.example.com"],
          status: ["clientTransferProhibited", "serverUpdateProhibited"],
        });
      }
    } catch (err) {
      setError("Failed to fetch WHOIS information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold mb-4">WHOIS Lookup Tool</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Enter a domain name (e.g., example.com)"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Searching...
              </span>
            ) : (
              "Search"
            )}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
      </div>

      {result && (
        <div className="p-6">
          <div className="flex items-center mb-6">
            <h3 className="text-xl font-bold mr-3">{result.domainName}</h3>
            {result.available ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Available
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                <XCircle className="h-4 w-4 mr-1" />
                Registered
              </span>
            )}
          </div>

          {result.available ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800">
                Good news! This domain is available for registration. Secure it
                now before someone else does.
              </p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Register This Domain
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Important Dates
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Creation Date:</span>
                      <span className="font-medium">
                        {formatDate(result.creationDate)}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Expiry Date:</span>
                      <span className="font-medium">
                        {formatDate(result.expiryDate)}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="font-medium">
                        {formatDate(result.updatedDate)}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Registrant Information
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">
                        {result.registrantName || "N/A"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Organization:</span>
                      <span className="font-medium">
                        {result.registrantOrganization || "N/A"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">
                        {result.registrantEmail || "N/A"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-600" />
                    Registrar Information
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Registrar:</span>
                      <span className="font-medium">
                        {result.registrar || "N/A"}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium">
                        {result.status?.join(", ") || "N/A"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    Name Servers
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {result.nameServers?.map((ns, index) => (
                      <li key={index} className="font-medium">
                        {ns}
                      </li>
                    )) || <li className="font-medium">N/A</li>}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">About WHOIS Lookup</h3>
        <p className="text-gray-600 mb-4">
          Our WHOIS lookup service allows you to check the availability of
          domain names and view registration details for domains that are
          already registered. This information includes registrant details,
          important dates, and technical information.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>Results are cached for 60 minutes to improve performance.</span>
        </div>
      </div>
    </div>
  );
}
