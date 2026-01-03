"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plane, Bed, Plus, Send } from "lucide-react"
import Link from "next/link"
import DatePicker from "@/app/DatePicker"

export default function StaysHeroSection() {
  const router = useRouter()

  const [location, setLocation] = useState("")
  const [people, setPeople] = useState("")
  const [openDate, setOpenDate] = useState(false)

  // ✅ SINGLE SOURCE OF TRUTH
  const [dateValue, setDateValue] = useState("")

  const dateRef = useRef<HTMLDivElement>(null)

  /* Close date picker on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setOpenDate(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  /* Search handler */
  const handleSearch = () => {
    const params = new URLSearchParams({
      location,
      dates: dateValue,
      people,
    })

    router.push(`/searchresults?${params.toString()}`)
  }

  return (
    <section className="relative min-h-[650px] pb-[160px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/swimming-pool.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Search Card */}
      <div className="relative z-10 flex justify-center">
        <div className="relative mt-[420px] w-[95%] max-w-6xl bg-white rounded-2xl shadow-xl p-6 lg:absolute lg:top-[580px] lg:mt-0">

          {/* Tabs */}
          <div className="flex gap-8 border-b mb-6" style={{ fontFamily: "Urbanist" }}>
            <Link
              href="/find-stays"
              className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600 font-medium"
            >
              <Bed size={18} /> Stays
            </Link>

            <Link href="/" className="flex items-center gap-2 pb-3 text-gray-600">
              <Plane size={18} /> Flights
            </Link>

            <Link href="/attractions" className="flex items-center gap-2 pb-3 text-gray-600">
              <Plane size={18} /> Attractions
            </Link>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Location */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>
                Stays In
              </label>
              <input
                type="text"
                placeholder="Dubai, UAE"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            {/* Date Picker */}
            <div className="relative" ref={dateRef}>
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>
                Number of Days
              </label>
              <input
                readOnly
                value={dateValue}   
                onClick={() => setOpenDate(true)}
                placeholder="Select dates"
                className="w-full px-4 py-3 border rounded-lg cursor-pointer"
              />

              {openDate && (
                <div className="absolute top-[120%] left-0 z-50 w-full lg:w-[720px]">
                  <DatePicker
                    onApply={(data) => {
                      setDateValue(
                        `${data.pickupDate} Jun (${data.pickupTime}) - ${data.dropDate} Jun (${data.dropTime})`
                      )
                      setOpenDate(false)
                    }}
                  />
                </div>
              )}
            </div>

            {/* People */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>
                People
              </label>
              <input
                type="text"
                placeholder="2 Adults, 0 Children"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6">
            <button className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: "Urbanist" }}>
              <Plus size={16} /> Add Promo Code
            </button>

            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg"
              style={{ fontFamily: "Urbanist" }}
            >
              <Send size={16} /> Show Results
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
