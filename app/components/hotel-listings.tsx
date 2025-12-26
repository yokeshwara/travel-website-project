"use client"

import { useState } from "react"
import HotelCard from "./hotel-card"
import FilterSidebar from "./filter-sidebar"

const hotels = [
  {
    id: 1,
    name: "The First Collection Waterfront",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results1.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 2,
    name: "Paradise Villa Dubai",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results2.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 3,
    name: "Luxury Downtown Residence",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results3.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 4,
    name: "Urban Beach Hotel",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results4.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 5,
    name: "Botanical Garden Estate",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results5.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 6,
    name: "Sunset Tower Suite",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results6.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 7,
    name: "The First Collection Premium",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results7.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
  {
    id: 8,
    name: "Tropical Paradise Resort",
    location: "Business Bay, Dubai",
    distance: "1 miles from downtown",
    rating: "Excellent",
    ratingScore: 4.8,
    reviews: "186 reviews",
    image: "/results8.png",
    originalPrice: 599,
    salePrice: 499,
    nights: 1,
    amenities: ["Free cancellation", "Free airport transfers", "Limited time Deal"],
  },
]

export default function HotelListings() {
  const [sortBy, setSortBy] = useState("top-picks")

  return (
    <div className="bg-gray-50 min-h-screen py-72">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Hotels in Dubai</h2>
          <p className="text-gray-600">540 properties found</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <FilterSidebar />

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sorting Options */}
            <div className="flex flex-wrap gap-3 mb-8 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSortBy("top-picks")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    sortBy === "top-picks"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary"
                  }`}
                >
                  Our top picks
                </button>
                <button
                  onClick={() => setSortBy("popular")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    sortBy === "popular"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary"
                  }`}
                >
                  Most popular
                </button>
                <button
                  onClick={() => setSortBy("price")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    sortBy === "price"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary"
                  }`}
                >
                  Lowest price
                </button>
                <button
                  onClick={() => setSortBy("reviewed")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    sortBy === "reviewed"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary"
                  }`}
                >
                  Best reviewed
                </button>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className="space-y-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
