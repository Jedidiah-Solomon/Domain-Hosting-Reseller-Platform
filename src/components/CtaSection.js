function CtaSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Hordanso for their
          domain and hosting needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
          >
            Search Domains
          </a>
          <a
            href="https://my.hordanso.xyz/client/index.php"
            className="px-8 py-3 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
          >
            Client Login
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
