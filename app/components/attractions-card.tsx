"use client"
import { Eye } from "lucide-react"
import Link from "next/link"

interface AttractionCardProps {
    attraction:{
  id: number
  title: string
  location: string
  duration: string
  price: number
  image: string
  rating: number
  reviews: number
  available: boolean
    }
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <Link href={`/attraction/${attraction.id}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Image */}
        <div className="md:col-span-1">
          <div className="relative h-48 md:h-full rounded-lg overflow-hidden bg-gray-200">
            <img src={attraction.image} alt={attraction.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-blue-600 font-semibold mb-1" style={{ fontFamily: "Urbanist" }}>{attraction.location}</p>
            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2" style={{ fontFamily: "Urbanist" }}>{attraction.title}</h3>

            <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "Urbanist" }}>
              With the tour you get the chance to discover Dubai's that Present and Future Experience offers
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1" style={{ fontFamily: "Urbanist" }}>
                <Eye size={16} />
                <span>Free cancellation available</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600" style={{ fontFamily: "Urbanist" }}>({attraction.reviews})</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-1 flex flex-col justify-between items-end">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Urbanist" }}>US${attraction.price}</p>
          </div>

          <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 font-semibold text-sm transition-colors" style={{ fontFamily: "Urbanist" }}>
            See availability →
          </button>
        </div>
      </div>
    </div>
    </Link>
  )
}
