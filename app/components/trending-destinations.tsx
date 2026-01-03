"use client"

import { useRouter } from "next/navigation";

const destinations = [
  {
    country: "USA",
    name: "Chicago",
    image: "/destinations1.png",
  },
  {
    country: "USA",
    name: "Schaumburg",
    image: "/destinations2.png",
  },
  {
    country: "Italy",
    name: "Rome",
    image: "/destinations3.png",
  },
  {
    country: "France",
    name: "Paris",
    image: "/destinations4.png",
  },
]

export default function TrendingDestinations() {

    const router = useRouter();
    const morePlaces = () => {
      router.push("/attractions-searchresults") // change route as needed
    }


  return (
    <section className="py-12 sm:py-16 lg:py-60 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: "Urbanist" }}>
              Explore stays in trending destinations
            </h2>
            <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "Urbanist" }}>
              Build your best memories with your loved ones in top destinations
            </p>
          </div>

          <button onClick={morePlaces} className="text-blue-600 hover:text-blue-700 font-medium text-sm hidden sm:block" style={{ fontFamily: "Urbanist" }}>
            See more places
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" style={{ fontFamily: "Urbanist" }}>
          {destinations.map((destination) => (
            <div key={destination.name} className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Country */}
              <div className="flex items-center gap-1 mt-3 text-xs text-gray-500" style={{ fontFamily: "Urbanist" }}>
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>{destination.country}</span>
              </div>

              {/* City */}
              <h3 className="text-lg font-semibold text-gray-900 mt-1" style={{ fontFamily: "Urbanist" }}>
                {destination.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <button onClick={morePlaces} className="sm:hidden mt-6 w-full py-2 text-blue-600 hover:text-blue-700 font-medium border border-blue-600 rounded-lg" style={{ fontFamily: "Urbanist" }}>
          See more places
        </button>
      </div>
    </section>
  )
}
