const deals = [
  {
    id: 1,
    badge: "-50%",
    image: "/deals1.png",
    title: "Santorini Sunset",
    description: "Experience the magic of Greek sunsets",
  },
  {
    id: 2,
    badge: "-45%",
    image: "/deals-2.png",
    title: "Bali Beach Paradise",
    description: "Tropical paradise awaits you",
  },
  {
    id: 3,
    badge: "-60%",
    image: "/deals-3.png",
    title: "Maldives Escape",
    description: "Ultimate luxury island getaway",
  },
  {
    id: 4,
    badge: "-40%",
    image: "/deals-4.png",
    title: "Dubai Glamour",
    description: "Experience urban luxury",
  },
]

export default function DealsAndDiscounts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">Deals and Discounts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <img
                src={deal.image || "/placeholder.svg"}
                alt={deal.title}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {deal.badge}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1">{deal.title}</h3>
                <p className="text-sm text-gray-200">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
