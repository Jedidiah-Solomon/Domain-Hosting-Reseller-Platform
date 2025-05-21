import TestimonialCard from "./TestimonialCard"

function TestimonialsSection() {
  return (
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
  )
}

export default TestimonialsSection
