"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bed, Plane, Plus, Send } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import DatePicker from "../DatePicker"

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("attractions")
    const [location, setLocation] = useState("")
     
      const [people, setPeople] = useState("")
      const [openDate, setOpenDate] = useState(false)
    
      // ✅ SINGLE SOURCE OF TRUTH
      const [dateValue, setDateValue] = useState("")
    
      const dateRef = useRef<HTMLDivElement>(null)

       useEffect(() => {
          const handler = (e: MouseEvent) => {
            if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
              setOpenDate(false)
            }
          }
          document.addEventListener("mousedown", handler)
          return () => document.removeEventListener("mousedown", handler)
        }, [])
   const router = useRouter();
     const handleSearch = () => {
    const params = new URLSearchParams({
      location,
      dates: dateValue,
      people,
    })

    router.push(`/searchresults?${params.toString()}`)
  }


   useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setOpenDate(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])


  return (
    <section className="relative -mt-16 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 ">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b"  style={{ fontFamily: "Urbanist" }}>

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
               <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>Stays In</label>
              <input
                type="text"
                placeholder="Dubai, UAE"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>Number of Days</label>
              <input
                readOnly
                value={dateValue}   
                onClick={() => setOpenDate(true)}
                placeholder="Select dates"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            
            <div  className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700" style={{ fontFamily: "Urbanist" }}>How many Tickets?</label>
              <input   type="text"
                value={people}
                 placeholder="N of Tickets"
                onChange={(e) => setPeople(e.target.value)}
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
    </section>
  )
}
