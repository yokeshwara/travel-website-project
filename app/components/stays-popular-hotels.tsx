"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, User } from "lucide-react"
import { useRouter } from "next/navigation";

const hotels = [
  {
    name: "Pearl Continental Hotels",
    description:
      "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
    image: "/continental-hotel.jpg",
    locationType: "Museums",
    capacity: 12,
    price: 150,
  },
  {
    name: "The Nishat Hotel",
    description:
      "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
    image: "/nishat-hotel.jpg",
    locationType: "Museums",
    capacity: 18,
    price: 250,
  },
  {
    name: "PC Hotel Bhurban",
    description:
      "Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.",
    image: "/bhurbhan-hotel.jpg",
    locationType: "Museums",
    capacity: 24,
    price: 280,
  },
]

export default function StaysPopularHotels() {
  
    const router = useRouter();
        const viewHotels = () => {
        router.push("/searchresults") // change route as needed
      }
  return (
    <section className="py-12 lg:py-2 bg-accent/30 bg-blue-50 lg:mt-[-100px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold mb-2" style={{ fontFamily: "Urbanist" }}>
            Popular Hotels for Booking
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: "Urbanist" }}>Hotels in Pakistan</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:w-300 lg:ml-30">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div onClick={()=>router.push(`${'/hotel/1'}`)} className="relative aspect-[4/3] cursor-pointer">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Urbanist" }}>
                  {hotel.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4 line-clamp-2" style={{ fontFamily: "Urbanist" }}>
                  {hotel.description}
                </p>

                {/* Location + Capacity */}
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-5" style={{ fontFamily: "Urbanist" }}>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{hotel.locationType}</span>
                  </div>

                  <div className="flex items-center gap-1" style={{ fontFamily: "Urbanist" }}>
                    <User className="h-4 w-4 text-blue-600" />
                    <span>{hotel.capacity} Person Capacity</span>
                  </div>
                </div>

                {/* Price + Arrow */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold" style={{ fontFamily: "Urbanist" }}>
                      ${hotel.price}
                    </span>
                    <span className="text-sm text-gray-500" style={{ fontFamily: "Urbanist" }}>
                      /Per Night
                    </span>
                  </div>

                  <Button
                    size="icon"
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Button onClick={viewHotels} className="bg-primary hover:bg-primary/90 px-8" style={{ fontFamily: "Urbanist" }}>
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  )
}
