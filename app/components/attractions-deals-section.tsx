"use client"

export default function DealsSection() {
  const deals = [
    {
      id: 1,
      badge: "20% OFF",
      title: "Dubai Top 10 Best new deals on Dubai Marina, Burj Khalifa and more",
      image: "/discounts3.png",
    },
    {
      id: 2,
      badge: "45% OFF",
      title: "About the 25 Best new deals on Dubai Marina, Burj Khalifa and more",
      image: "/discounts2.png",
    },
    {
      id: 3,
      badge: "SAVE 30%",
      title: "Dubai Top 25 Best new deals on Dubai Marina, Burj Khalifa and more",
      image: "/discounts1.png",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Urbanist" }}>Deals and Discounts</h2>

        {/* Deal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deals.map((deal) => (
            <div key={deal.id} className="relative rounded-lg overflow-hidden group cursor-pointer" style={{ fontFamily: "Urbanist" }}>
              <div className="relative h-64 bg-gray-200">
                <img
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm" style={{ fontFamily: "Urbanist" }}>
                {deal.badge}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Urbanist" }}>{deal.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional attractions */}
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 md:h-full rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={`/dubai-attraction-.jpg?height=300&width=400&query=Dubai attraction ${i}`}
                      alt="Dubai"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-semibold mb-1" style={{ fontFamily: "Urbanist" }}>Dubai</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "Urbanist" }}>
                      Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit
                    </h3>
                    <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "Urbanist" }}>
                      With the tour you get the chance to discover Dubai's that Present and Future Experience offers
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600" style={{ fontFamily: "Urbanist" }}>(128)</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-between items-end">
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Urbanist" }}>US$489</p>
                  <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 font-semibold text-sm" style={{ fontFamily: "Urbanist" }}>
                    See availability →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
