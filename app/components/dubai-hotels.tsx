"use client"
import { MapPin, User } from "lucide-react"
import { useRouter } from "next/navigation";

const hotels = [
  {
    id: 1,
    name: "PC Hotel Bhurban",
    image: "/dubai1.png",
    price: "$280",
  },
  {
    id: 2,
    name: "PC Hotel Bhurban",
    image: "/dubai2.png",
    price: "$280",
  },
  {
    id: 3,
    name: "PC Hotel Bhurban",
    image: "/dubai3.png",
    price: "$280",
  },
  {
    id: 4,
    name: "PC Hotel Bhurban",
    image: "/dubai4.png",
    price: "$280",
  },
]

export default function DubaiHotels() {
   const router = useRouter();
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16" style={{ fontFamily: "Urbanist" }}>
          Popular Hotels in Dubai
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden cursor-pointer" onClick={()=>router.push(`${'/hotel/1'}`)}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>
                  {hotel.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "Urbanist" }}>
                  Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum
                  enim metus amet turpis lectus.
                </p>

                {/* Location & Capacity */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1" style={{ fontFamily: "Urbanist" }}>
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Museums</span>
                  </div>
                  <div className="flex items-center gap-1" style={{ fontFamily: "Urbanist" }}>
                     <User className="h-4 w-4 text-blue-600" />
                    <span>24 Person Capacity</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900" style={{ fontFamily: "Urbanist" }}>
                    {hotel.price}
                    <span className="text-sm font-normal text-gray-500" style={{ fontFamily: "Urbanist" }}>
                      / Per Night
                    </span>
                  </div>

                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    ➜
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
