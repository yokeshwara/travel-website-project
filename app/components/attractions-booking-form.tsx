"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bed, Plane, Plus, Send } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("attractions")
   const router = useRouter();
    const handleSearch = () => {
    router.push(
      '/attractions-searchresults'
    );
  };


  return (
    <section className="relative -mt-16 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 ">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">

             <Link href="/attractions" className="flex items-center gap-2 pb-3 text-gray-600 border-b-2 border-blue-600 text-blue-600 hover:text-primary transition">
            <Plane size={18} />
            Attractions
          </Link>
          <Link href="/find-stays" className="flex items-center gap-2 pb-3  text-gray-600 font-medium">
              <Bed size={18} /> Stays
            </Link>
             <Link href="/flights" className="flex items-center gap-2 pb-3 text-gray-600 font-medium">
              <Plane size={18} /> Flights
            </Link>
          
        </div>

        {/* Form Content */}
        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
               <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">Stays In</label>
              <input
                type="text"
                defaultValue="Dubai"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">Number of Days</label>
              <input
                type="date"
                defaultValue="2025-12-20"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div  className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">How many Tickets?</label>
              <input   type="text"
                defaultValue="2 Adults"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {/* <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4+ Adults</option> */}

              </input>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6 lg:ml-190">
            <button className="flex items-center gap-2 text-sm text-gray-600">
              <Plus size={16} /> Add Promo Code
            </button>

            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              <Send size={16} /> Show Results
            </button>
          </div>
      </div>
    </section>
  )
}
