"use client"
import { ChevronRight } from "lucide-react"

const interests = [
  { icon: "/attractions-icon1.png", title: "Tours", description: "2,546 tours" },
  { icon: "/attractions-icon2.png", title: "Mountains, Arts & Culture", description: "1,234 activities" },
  { icon: "/attractions-icon2.png", title: "Nature & outdor", description: "850 activities" },
  { icon: "/attractions-icon2.png", title: "Entertainment & Nights", description: "1,120 activities" },
  { icon: "/attractions-icon2.png", title: "Food & drinks", description: "923 activities" },
  { icon: "/attractions-icon2.png", title: "Travel services & rentals", description: "2,456 activities" },
  { icon: "/attractions-icon2.png", title: "Workshops & classes", description: "342 activities" },
]

export default function ExploreInterests() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-2">
      
      {/* ROW LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* LEFT TEXT */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>
            Explore by interests
          </h2>
          <p className="text-gray-600 text-sm" style={{ fontFamily: "Urbanist" }}>
            Discover amazing things to do
          </p>
        </div>

        {/* RIGHT ICONS */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4" style={{ fontFamily: "Urbanist" }}>
                <img
                  src={interest.icon}
                  alt={interest.title}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="font-semibold text-gray-900" style={{ fontFamily: "Urbanist" }}>
                    {interest.title}
                  </h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: "Urbanist" }}>
                    {interest.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-gray-600" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
