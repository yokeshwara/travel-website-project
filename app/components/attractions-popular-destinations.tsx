"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

const destinations = [
  {
    name: "Margoalla Hills National Park",
    location: "India",
    price: "From Rs. 2,500",
    image: "/hill1.png",
  },
  {
    name: "Margoalla Hills National Park",
    location: "India",
    price: "From Rs. 25,000",
    image: "/hill2.png",
  },
  {
    name: "Margoalla Hills National Park",
    location: "India",
    price: "From Rs. 8,500",
    image: "/hill3.png",
  },
  {
    name: "Margoalla Hills National Park",
    location: "India",
    price: "From Rs. 23,000",
    image: "/hill4.png",
  },
]



export default function PopularDestinations() {
     const router = useRouter();
    const morePlaces = () => {
        router.push("/attractions-searchresults") // change route as needed
      }
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-2">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>Popular Destinations</h2>
          <p className="text-gray-600 text-sm" style={{ fontFamily: "Urbanist" }}>Discover the most popular destinations in Pakistan</p>
        </div>
        <Button onClick={morePlaces} variant="outline" className="hidden sm:block bg-transparent" style={{ fontFamily: "Urbanist" }}>
          See more places
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Urbanist" }}>{dest.name}</h3>
            <p className="text-xs text-gray-600" style={{ fontFamily: "Urbanist" }}>{dest.location}</p>
            <p className="text-blue-600 font-semibold text-sm" style={{ fontFamily: "Urbanist" }}>{dest.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Button onClick={morePlaces} variant="outline" className="w-full bg-transparent" style={{ fontFamily: "Urbanist" }}>
          See more places
        </Button>
      </div>
    </section>

    
  )
}
