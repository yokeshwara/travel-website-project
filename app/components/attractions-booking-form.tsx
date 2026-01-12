"use client"

import { useEffect, useRef, useState } from "react"
import { Bed, Plane, Plus, Send } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import DatePicker from "../DatePicker"

export default function BookingForm() {
  const [activeTab] = useState("attractions")
  const [location, setLocation] = useState("")
  const [people, setPeople] = useState("")
  const [openDate, setOpenDate] = useState(false)

  // ✅ SINGLE SOURCE OF TRUTH
  const [dateValue, setDateValue] = useState("")

  const dateRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(e.target as Node)
      ) {
        setOpenDate(false)
      }
    }

    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  /* ================= VALIDATION ================= */
  const isFormValid =
    location.trim() !== "" &&
    dateValue.trim() !== "" &&
    people.trim() !== ""

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    if (!isFormValid) return

    const params = new URLSearchParams({
      location,
      dates: dateValue,
      people,
    })

    router.push(`/attractions-searchresults?${params.toString()}`)
  }

  return (
    <section className="relative -mt-16 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">

        {/* Tabs */}
        <div
          className="flex gap-4 mb-8 border-b"
          style={{ fontFamily: "Urbanist" }}
        >
          <Link
            href="/attractions"
            className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600"
          >
            <Plane size={18} />
            Attractions
          </Link>

          <Link
            href="/find-stays"
            className="flex items-center gap-2 pb-3 text-gray-600"
          >
            <Bed size={18} />
            Stays
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 pb-3 text-gray-600"
          >
            <Plane size={18} />
            Flights
          </Link>
        </div>

        {/* Form */}
        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

            {/* Location */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">
                Stays In
              </label>
              <input
                type="text"
                placeholder="Dubai, UAE"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date Picker */}
            <div className="relative" ref={dateRef}>
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">
                Number of Days
              </label>

              <input
                readOnly
                value={dateValue}
                placeholder="Select dates"
                onClick={() => setOpenDate(true)}
                className="w-full px-4 py-2 border rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500"
              />

              {openDate && (
                <div className="absolute top-[120%] left-0 z-50 w-full lg:w-[720px]">
                  <DatePicker
                    onApply={(data: any) => {
                      setDateValue(
                        `${data.pickupDate} - ${data.dropDate}`
                      )
                      setOpenDate(false)
                    }}
                  />
                </div>
              )}
            </div>

            {/* Tickets */}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">
                Number of Tickets
              </label>
              <input
                type="number"
                min={1}
                placeholder="No of Tickets"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center gap-2 text-sm text-gray-600">
            <Plus size={16} /> Add Promo Code
          </button>

          <button
            onClick={handleSearch}
            disabled={!isFormValid}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition
              ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            <Send size={16} /> Show Results
          </button>
        </div>
      </div>
    </section>
  )
}
