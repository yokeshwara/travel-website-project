export default function GreeceBanner() {
  return (
    <section className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/wooden-bridge-path-through-green-forest.jpg)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4 sm:mb-6">
          Discover Greece for Less
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-100 max-w-md">
          Explore ancient ruins, beautiful beaches, and rich culture at unbeatable prices
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Discover More
        </button>
      </div>
    </section>
  )
}
