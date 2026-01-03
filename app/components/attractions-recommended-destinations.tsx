
"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

const recommended = [
  {
    name: "Dubai Desert Safari with BBQ Dinner",
    location: "Dubai",
    price: "From Rs. 3,500",
    image: "/dest1.png",
  },
  {
    name: "Burj Khalifa Admission Tickets",
    location: "Dubai",
    price: "From Rs. 19,000",
    image: "/dest3.png",
  },
  {
    name: "Abu Dhabi Sightseeing Tour",
    location: "Abu Dhabi",
    price: "From Rs. 16,500",
    image: "/dest2.png",
  },
  {
    name: "Burj Khalifa Lake Boat Ride",
    location: "Dubai",
    price: "From Rs. 23,500",
    image: "/dest3.png",
  },
]

export default function RecommendedDestinations() {
   const router = useRouter();
     const morePlaces = () => {
        router.push("/attractions-searchresults") // change route as needed
      }
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>Recommended in Dubai</h2>
          <p className="text-gray-600 text-sm" style={{ fontFamily: "Urbanist" }}>Most visited and highly-rated places</p>
        </div>
        <Button onClick={morePlaces} variant="outline" className="hidden sm:block bg-transparent" style={{ fontFamily: "Urbanist" }}>
          See more places
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommended.map((dest, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-3 cursor-pointer">
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={()=>router.push(`${'/attraction/1'}`)}
                
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2" style={{ fontFamily: "Urbanist" }}>{dest.name}</h3>
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
