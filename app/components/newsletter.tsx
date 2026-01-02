export function Newsletter() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 mt-20 mb-16">
      <div className="bg-primary rounded-2xl px-6 sm:px-10 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Text */}
          <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
            Subscribe for <br /> Latest Newsletter
          </h2>

          {/* Right Form */}
          <div className="flex w-full lg:w-auto flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-[320px] h-12 rounded-full px-5 text-sm text-gray-800 outline-none"
            />
            <button className="w-full sm:w-auto h-12 px-6 rounded-full bg-white text-primary text-sm font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
