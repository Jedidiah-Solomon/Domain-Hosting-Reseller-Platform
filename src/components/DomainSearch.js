"use client"

import { useState } from "react"

function DomainSearch() {
  const [domain, setDomain] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would redirect to a domain search results page
    alert(`Searching for domain: ${domain}`)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        <div className="flex-grow flex items-center bg-white px-4">
          <div className="text-gray-400 mr-2">www.</div>
          <input
            type="text"
            placeholder="Find your perfect domain name..."
            className="w-full py-4 px-3 text-gray-700 focus:outline-none"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 transition-colors"
        >
          CHECK AVAILABILITY
        </button>
      </div>
    </form>
  )
}

export default DomainSearch
