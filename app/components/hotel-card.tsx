"use client"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HotelCardProps {
  hotel: {
    id: number
    name: string
    location: string
    distance: string
    rating: string
    ratingScore: number
    reviews: string
    image: string
    originalPrice: number
    salePrice: number
    nights: number
    amenities: string[]
  }
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotel/${hotel.id}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col md:flex-row gap-6 p-6 cursor-pointer">
        {/* Image */}
        <div className="md:w-48 flex-shrink-0">
          <img
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{hotel.location}</p>
                <p className="text-xs text-gray-500">{hotel.distance}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-yellow-800">{hotel.rating}</span>
                  <Star size={14} className="text-yellow-600 fill-current" />
                </div>
                <p className="text-xs text-gray-600 mt-1">{hotel.reviews}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 font-medium">Deluxe Room with Solana Beach Club Access</p>
          </div>

          {/* Amenities */}
          <div className="mb-4 space-y-2">
            {hotel.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span className="text-sm text-gray-600">{amenity}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-auto">
            <div className="mb-4 md:mb-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500 line-through">${hotel.originalPrice}</span>
                <span className="text-2xl font-bold text-primary">${hotel.salePrice}</span>
                <span className="text-sm text-gray-600">/ night, {hotel.nights} night</span>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto">See availability →</Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
