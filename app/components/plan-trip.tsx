const destinations = [
  {
    name: "Istanbul, Turkey",
    image: "/Turkey.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "Sydney, Australia",
    image: "/sydney.png",
    tags: ["Flights", "Hotels"],
  },
  {
    name: "Baku, Azerbaijan",
    image: "/boku.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "Male, Maldives",
    image: "/maldives.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "Paris, France",
    image: "/eiffel-tower-paris-france-sunset.jpg",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "New York, US",
    image: "/newyork.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "London, UK",
    image: "/london.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "Tokyo, Japan",
    image: "/tokyo.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
  {
    name: "Dubai, UAE",
    image: "/dubai.png",
    tags: ["Flights", "Hotels", "Resorts"],
  },
]

export default function PlanTrip() {
  return (
    <section className="py-16 lg:py-24 bg-background mt-20 lg:mt-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 lg:w-350">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">Plan your perfect trip</h2>
            <p className="text-muted-foreground">Search Flights & Places Hire to our most popular destinations</p>
          </div>

          <button className="hidden md:block text-primary hover:underline font-medium">See more places</button>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg-mr-20">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="flex items-center gap-5 bg-card rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary/50"
            >
              {/* Left Image */}
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
              />

              {/* Right Content */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>

                <p className="text-sm text-muted-foreground">{destination.tags.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-primary hover:underline font-medium mt-8 mx-auto block">
          See more places
        </button>
      </div>
    </section>
  )
}
