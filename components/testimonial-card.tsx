interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-4">
        {/* Quote icon */}
        <svg className="h-8 w-8 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h0v4h4a10 10 0 0010-10V8h-8z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  )
}
