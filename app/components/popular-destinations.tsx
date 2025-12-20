const destinations = [
  {
    name: "Mongolia Hills National Park",
    image: "/hill1.png",
    price: 1000,
  },
  {
    name: "Bangladesh Hills National Park",
    image: "/hill2.png",
    price: 1200,
  },
  {
    name: "Bangladesh Hills National Park",
    image: "/hill3.png",
    price: 950,
  },
  {
    name: "Mongolia Hills National Park",
    image: "/hill4.png",
    price: 1100,
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8 lg:mr-35">
          <div className="lg:ml-20">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">Popular Destinations</h2>
            <p className="text-muted-foreground">Things to do and Places to see in National Park</p>
          </div>
          <button className="hidden md:block text-primary hover:underline font-medium">See more places</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-20 lg:w-320">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4]">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-1">{destination.name}</h3>
              <p className="text-muted-foreground text-sm">From Rs. £{destination.price}</p>
            </div>
          ))}
        </div>

        <button className="md:hidden text-primary hover:underline font-medium mt-6 mx-auto block">
          See more places
        </button>
      </div>
    </section>
  )
}
