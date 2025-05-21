import { Check } from "lucide-react"

function ServiceCard({ icon, title, description, price, features }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden text-center">
      <div className="p-8">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <p className="text-sm text-gray-500">from</p>
          <div className="flex items-baseline justify-center">
            <span className="text-gray-900 font-bold text-3xl">₦{price}</span>
            <span className="text-gray-500 text-sm">/mo</span>
          </div>
        </div>
        <a
          href="#"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors"
        >
          CHOOSE PLAN
        </a>
      </div>
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center text-sm">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
