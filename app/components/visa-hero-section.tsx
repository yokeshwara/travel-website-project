"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plane, Bed, Plus, Send } from "lucide-react"
import Link from "next/link"

export default function VisaHeroSection() {
  const router = useRouter()
  const passengerRef = useRef<HTMLDivElement>(null)

  const handleSearch = () => {
    router.push("/searchresults")
  }

  return (
    <section className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/visascreen.png"
          alt="Visa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Card */}
      <div className="relative z-10 flex justify-center px-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-5 sm:p-6 mt-32 sm:mt-40 lg:absolute lg:top-[480px]">
          
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto border-b mb-6 pb-2 scrollbar-hide">
            <Link
              href="/visascreen"
              className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600 font-medium whitespace-nowrap"
            >
              <Bed size={18} /> Visa
            </Link>

            <Link
              href="/find-stays"
              className="flex items-center gap-2 pb-3 text-gray-600 hover:text-blue-600 whitespace-nowrap"
            >
              <Bed size={18} /> Stays
            </Link>

            <Link
              href="/flights"
              className="flex items-center gap-2 pb-3 text-gray-600 hover:text-blue-600 whitespace-nowrap"
            >
              <Plane size={18} /> Flights
            </Link>

            <Link
              href="/attractions"
              className="flex items-center gap-2 pb-3 text-gray-600 hover:text-blue-600 whitespace-nowrap"
            >
              <Plane size={18} /> Attractions
            </Link>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Source Country", value: "UAE" },
              { label: "Nationality", value: "Pakistan" },
              { label: "Currency", value: "Pakistani Rupee" },
              { label: "Number of Seats", value: "2", type: "number" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">
                  {item.label}
                </label>
                <input
                  type={item.type || "text"}
                  defaultValue={item.value}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <button className="flex items-center justify-center gap-2 text-sm text-gray-600 border rounded-lg px-4 py-2">
              <Plus size={16} /> Add Promo Code
            </button>

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              <Send size={16} /> Show Results
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
