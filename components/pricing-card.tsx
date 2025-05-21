import Link from "next/link"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  ctaText: string
  popular?: boolean
}

export default function PricingCard({ title, price, period, features, ctaText, popular = false }: PricingCardProps) {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-sm border overflow-hidden
      ${popular ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-20 transform scale-105 md:scale-110 z-10" : "border-gray-200"}
    `}
    >
      {popular && <div className="bg-blue-500 text-white text-center py-2 font-medium">Most Popular</div>}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">₦{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className={`
            block text-center py-3 px-6 rounded-md font-medium transition-colors w-full
            ${popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}
          `}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}
