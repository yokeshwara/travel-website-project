"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import AttractionCard from "./attractions-card"

const attractions = [
  {
    id: 1,
    title: "Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit",
    location: "Dubai",
    duration: "6 hours",
    price: 489,
    image: "/search1.png",
    rating: 4.8,
    reviews: 128,
    available: true,
  },
  {
    id: 2,
    title: "Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit",
    location: "Dubai",
    duration: "6 hours",
    price: 489,
    image: "/search1.png",
    rating: 4.8,
    reviews: 128,
    available: true,
  },
  {
    id: 3,
    title: "Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit",
    location: "Dubai",
    duration: "6 hours",
    price: 489,
    image: "/search1.png",
    rating: 4.8,
    reviews: 128,
    available: true,
  },
  {
    id: 4,
    title: "Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit",
    location: "Dubai",
    duration: "6 hours",
    price: 489,
    image: "/search1.png",
    rating: 4.8,
    reviews: 128,
    available: true,
  },
  {
    id: 5,
    title: "Modern Visions of Dubai - Dubai Marina Cruise and Dubai Frame Visit",
    location: "Dubai",
    duration: "6 hours",
    price: 489,
    image: "/search1.png",
    rating: 4.8,
    reviews: 128,
    available: true,
  },
]

const filterCategories = [
  {
    title: "Price (US$)",
    options: ["Ratings (1)", "Top In", "Experienced & Newest (137)"],
  },
  {
    title: "Tour type",
    options: ["Adventure Tours", "Budget-Friendly Tours (24)", "City Tours (45)"],
  },
  {
    title: "Experiences & themes",
    options: ["Cultural (32)", "Food & Drink (19)", "Nature (28)"],
  },
  {
    title: "Tour type",
    options: ["Day Tours (64)", "Half-day Tours (43)", "Multi-day tours (8)"],
  },
  {
    title: "Price range",
    options: ["$50 - $100 (23)", "$100 - $200 (45)", "$200+ (12)"],
  },
  {
    title: "Booking options",
    options: ["Free cancellation (78)", "Mobile Tickets (92)", "Skip-the-line tickets (34)"],
  },
  {
    title: "Duration",
    options: ["Under 2 hours (23)", "2-6 hours (45)", "Full-day (34)"],
  },
]

export default function AttractionsSection() {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>
            Dubai attractions
          </h2>
          <p className="text-gray-600" style={{ fontFamily: "Urbanist" }}>123 results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-20">
              <h3 className="font-bold text-lg mb-6 text-gray-900" style={{ fontFamily: "Urbanist" }}>Filter by</h3>

              <div className="space-y-4">
              {filterCategories.map((category, index) => (
  <div
    key={`${category.title}-${index}`}
    className="border-b pb-4 last:border-b-0"
  >
    <button
      onClick={() =>
        setExpandedFilter(
          expandedFilter === category.title ? null : category.title
        )
      }
      className="flex items-center justify-between w-full py-2"
    >
      <span className="font-semibold text-gray-900" style={{ fontFamily: "Urbanist" }}>
        {category.title}
      </span>
      <ChevronDown
        size={18}
        className={`transition-transform ${
          expandedFilter === category.title ? "rotate-180" : ""
        }`}
      />
    </button>

    {expandedFilter === category.title && (
      <div className="mt-3 space-y-2">
        {category.options.map((option, optionIndex) => (
          <label
            key={`${option}-${optionIndex}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input type="checkbox" className="rounded" />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    )}
  </div>
))}

              </div>
            </div>
          </div>

          {/* Attraction Cards */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {attractions.map((attraction, index) => (
                <div key={attraction.id}>
                  
                  {/* Attraction Card */}
                  <AttractionCard attraction={attraction} />

                  {/* SIGN IN BANNER AFTER 2nd CARD */}
                  {index === 1 && (
                    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: "Urbanist" }}>
                        Sign in to save time
                      </h3>
                      <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: "Urbanist" }}>
                        Your Travel Mania account lets you book using your saved details
                      </p>
                      <button className="text-blue-600 font-medium hover:underline text-sm" style={{ fontFamily: "Urbanist" }}>
                        Sign in
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
