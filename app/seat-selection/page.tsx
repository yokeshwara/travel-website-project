"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plane, ChevronDown, ChevronUp } from "lucide-react"
import NewHeader from "../components/new-header"
import { Footer } from "../components/footer"
import Newsletter from "../components/newsletter"
import { useRouter } from "next/navigation";
// Seat types
type SeatType = "extra-legroom" | "preferred" | "standard" | "occupied" | "selected"

interface Seat {
  id: string
  row: number
  column: string
  type: SeatType
  price?: number
}

interface Passenger {
  id: string
  name: string
  selectedSeat?: string
  price?: number
}

interface Flight {
  id: string
  date: string
  from: string
  fromCode: string
  to: string
  toCode: string
  duration: string
  passengers: Passenger[]
  seats: Seat[]
}

export default function SeatSelection() {
  const [expandedFlights, setExpandedFlights] = useState<string[]>([])

  // Mock flight data
  const [flights, setFlights] = useState<Flight[]>([
    {
      id: "flight-1",
      date: "Thu, 30 May 2024",
      from: "Dubai",
      fromCode: "DBI",
      to: "London",
      toCode: "LDN",
      duration: "6hrs 15minutes",
      passengers: [
        { id: "p1", name: "David", selectedSeat: "19D", price: 8667.0 },
        { id: "p2", name: "John Doe" },
      ],
      seats: generateSeats(),
    },
    {
      id: "flight-2",
      date: "Sat, 15 Jun 2024",
      from: "London",
      fromCode: "LDN",
      to: "Dubai",
      toCode: "DBI",
      duration: "6hrs 15minutes",
      passengers: [
        { id: "p1", name: "David" },
        { id: "p2", name: "John Doe" },
      ],
      seats: generateSeats(),
    },
  ])

  function generateSeats(): Seat[] {
    const seats: Seat[] = []
    const rows = [16, 17, 18, 19, 20, 21, 22, 1, 23, 24, 25, 26, 27, 28, 29]
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

    const seatConfig: Record<string, SeatType> = {
      "19D": "selected",
      "17A": "extra-legroom",
      "17H": "extra-legroom",
      "19A": "extra-legroom",
      "19B": "extra-legroom",
      "19F": "preferred",
      "19G": "extra-legroom",
      "19H": "extra-legroom",
      "19I": "extra-legroom",
      "20H": "extra-legroom",
      "21A": "extra-legroom",
      "21B": "extra-legroom",
      "21D": "extra-legroom",
      "21E": "extra-legroom",
      "21G": "extra-legroom",
      "21H": "extra-legroom",
      "21I": "extra-legroom",
      "22H": "extra-legroom",
      "1A": "standard",
      "1B": "standard",
      "1C": "standard",
      "1D": "extra-legroom",
      "1E": "preferred",
      "1F": "extra-legroom",
      "1G": "extra-legroom",
      "1H": "extra-legroom",
      "1I": "extra-legroom",
      "23A": "extra-legroom",
      "23C": "extra-legroom",
      "23D": "standard",
      "23E": "standard",
      "23F": "standard",
      "23G": "extra-legroom",
      "23H": "preferred",
      "23I": "preferred",
      "24A": "extra-legroom",
      "24B": "extra-legroom",
      "24C": "extra-legroom",
      "24D": "extra-legroom",
      "24G": "extra-legroom",
      "24H": "extra-legroom",
      "24I": "extra-legroom",
      "25A": "extra-legroom",
      "25B": "extra-legroom",
      "25C": "extra-legroom",
      "25D": "extra-legroom",
      "25I": "extra-legroom",
      "27A": "standard",
      "27B": "standard",
      "27C": "standard",
      "27D": "standard",
      "27E": "standard",
      "27F": "standard",
      "27G": "standard",
      "27H": "standard",
      "27I": "standard",
      "28A": "extra-legroom",
      "28B": "extra-legroom",
      "28C": "extra-legroom",
      "28D": "extra-legroom",
      "28E": "extra-legroom",
      "28F": "extra-legroom",
      "28G": "extra-legroom",
      "28H": "extra-legroom",
      "28I": "extra-legroom",
    }

    rows.forEach((row) => {
      columns.forEach((column) => {
        const seatId = `${row}${column}`
        const configuredType = seatConfig[seatId]
        seats.push({
          id: seatId,
          row,
          column,
          type: configuredType || "occupied",
          price: configuredType === "extra-legroom" ? 8442.0 : configuredType === "preferred" ? 5565.0 : 0,
        })
      })
    })

    return seats
  }

  const toggleFlight = (flightId: string) => {
    setExpandedFlights((prev) => (prev.includes(flightId) ? prev.filter((id) => id !== flightId) : [...prev, flightId]))
  }

  const router = useRouter();
  const handleContinue = () => {
  router.push("/baggage") // change route as needed
}


  const handleSeatSelect = (flightId: string, seatId: string) => {
    setFlights((prevFlights) =>
      prevFlights.map((flight) => {
        if (flight.id === flightId) {
          const seat = flight.seats.find((s) => s.id === seatId)
          if (!seat || seat.type === "occupied" || seat.type === "selected") return flight

          // Find first passenger without seat
          const passengerIndex = flight.passengers.findIndex((p) => !p.selectedSeat)
          if (passengerIndex === -1) return flight

          return {
            ...flight,
            passengers: flight.passengers.map((p, idx) =>
              idx === passengerIndex ? { ...p, selectedSeat: seatId, price: seat.price } : p,
            ),
            seats: flight.seats.map((s) => (s.id === seatId ? { ...s, type: "selected" as SeatType } : s)),
          }
        }
        return flight
      }),
    )
  }

  const getSeatColor = (type: SeatType) => {
    switch (type) {
      case "extra-legroom":
        return "bg-cyan-500 hover:bg-cyan-600"
      case "preferred":
        return "bg-amber-600 hover:bg-amber-700"
      case "standard":
        return "bg-pink-600 hover:bg-pink-700"
      case "selected":
        return "bg-emerald-500"
      case "occupied":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NewHeader/>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-2xl font-medium text-gray-800">Seat selection</h1>

        <div className="space-y-6">
          {flights.map((flight) => {
            const isExpanded = expandedFlights.includes(flight.id)
            const totalPrice = flight.passengers.reduce((sum, p) => sum + (p.price || 0), 0)

            return (
              <div key={flight.id} className="space-y-4">
                {/* Flight Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{flight.date}</div>
                    <div className="text-lg font-medium text-gray-800">
                      {flight.from} ({flight.fromCode}) - {flight.to} ({flight.toCode})
                    </div>
                  </div>
                </div>

                {/* Collapsible Flight Section */}
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <button
                    onClick={() => toggleFlight(flight.id)}
                    className="flex w-full items-center justify-between bg-blue-600 px-6 py-4 text-white transition-colors hover:bg-blue-700"
                  >
                    <span className="text-lg font-medium">
                      {flight.fromCode} - {flight.toCode}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm">Flight duration</div>
                        <div className="text-sm">{flight.duration}</div>
                      </div>
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="bg-blue-50 p-6">
                      {/* Passenger Info */}
                     <div className="mb-6 space-y-4">
  {flight.passengers.map((passenger, idx) => {
    const bgColor = idx === 0 ? "bg-green-500" : "bg-blue-500"
    const displayText =
      idx === 0 && passenger.selectedSeat
        ? passenger.selectedSeat
        : passenger.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()


                          return (
                            <div key={passenger.id} className="flex items-center gap-4">
                              <div
                                className={`flex h-12 w-12 items-center justify-center rounded text-lg font-bold text-white ${bgColor}`}
                              >
                                {displayText}
                              </div>
                              
                              
                              <div className="flex-1">
                                
                                <div className="font-medium text-gray-800">{passenger.name}</div>
                                <div className="text-sm text-gray-600">
                                  
                                  {passenger.selectedSeat ? (
                                    <>
                                      ✓ Selected {passenger.selectedSeat} 866700 PKR
                                    </>
                                  ) : (
                                    "Not Selected"
                                  )}
                                </div>
                                
                              </div>
                            </div>
                          )
                          
                        })}

                         <div className="mt-4 flex items-center justify-between border-t border-gray-600 pt-4 lg:w-70">
    <span className="font-medium text-gray-800 lg:mr-10">Sub total</span>
    <span className="font-medium text-gray-800">
      {totalPrice.toFixed(2)} PKR
    </span>
  </div>
                        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm lg:mt-[-170px] lg:ml-30">
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-cyan-500"></div>
    <span>Extra legroom <br></br> 8442.0 PKR</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-amber-600"></div>
    <span>Preferred <br></br>5565.0 PKR</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-pink-600"></div>
    <span>Standard</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-gray-400"></div>
    <span>Occupied</span>
  </div>
</div>
                      </div>

            

                      {/* Legend */}

                    

                      {/* Seat Map */}
                      <div className="flex flex-col gap-6 lg:flex-row lg:mt-10 lg:ml-100">
                        {/* Seats Grid */}
                        <div className="flex-1 overflow-x-auto ">
                          <div className="min-w-[650px]">
                            {/* Column Headers */}
                            <div className="mb-2 flex gap-2 pl-13">
                              {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((col) => (
                                <div
                                  key={col}
                                  className="flex h-8 w-10 items-center justify-center font-medium text-gray-600"
                                >
                                  {col}
                                </div>
                              ))}
                            </div>

                            {/* Seat Rows */}
<div className="space-y-2">
  {[16, 17, 18, 19, 20, 21, 22, 1, 23, 24, 25, 26, 27, 28, 29].map((row) => {
    const isAisleRow = row === 18 || row === 22 || row === 1

    return (
      <div
        key={row}
        className={`flex items-center ${
          isAisleRow ? "mb-4" : "mb-4"
        }`}
      >
        {/* Row number */}
        <div className="w-10 text-center text-sm font-medium text-gray-600 mr-2">
          {row === 1 ? "01" : row}
        </div>

        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((col) => {
          const seatId = `${row}${col}`
          const seat = flight.seats.find((s) => s.id === seatId)
          if (!seat) return <div key={col} className="h-10 w-10" />

          const isClickable = seat.type !== "occupied" && seat.type !== "selected"

          return (
            <button
              key={col}
              onClick={() => isClickable && handleSeatSelect(flight.id, seatId)}
              disabled={!isClickable}
              className={`flex h-10 w-10 items-center justify-center rounded text-xs font-medium text-white transition-colors
                ${getSeatColor(seat.type)}
                ${!isClickable ? "cursor-not-allowed" : "cursor-pointer"}
                ${col === "C" || col === "F" ? "mr-4" : "mr-2"}
              `}
            >
              {seat.type === "occupied" && "✕"}
            </button>
          )
        })}
      </div>
    )
  })}
</div>



                            {/* Sub Total */}
                            
</div>
                        </div>

                        {/* Airplane Diagram */}
                        <div className="flex flex-col items-center justify-center lg:w-64 lg:mb-80">
                          <div className="relative">
                            {/* Plane Body */}
                            <svg width="200" height="400" viewBox="0 0 200 400" className="text-gray-300">
                              {/* Nose */}
                              <path d="M 100 20 L 120 60 L 80 60 Z" fill="currentColor" />
                              {/* Body */}
                              <rect x="60" y="60" width="80" height="320" fill="currentColor" rx="10" />
                              {/* Tail */}
                              <path d="M 100 380 L 120 400 L 80 400 Z" fill="currentColor" />
                              {/* Wings */}
                              <rect x="20" y="180" width="160" height="40" fill="currentColor" rx="20" />
                            </svg>

                            {/* Section Labels */}
                            <div className="absolute right-0 top-24 w-24 text-sm">
                              <div className="rounded bg-white px-2 py-1 shadow">Business</div>
                            </div>
                            <div className="absolute right-0 top-52 w-24 text-sm">
                              <div className="rounded bg-white px-2 py-1 shadow">16 - 29</div>
                            </div>
                            <div className="absolute right-0 bottom-20 w-24 text-sm">
                              <div className="rounded bg-white px-2 py-1 shadow">30 - 44</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Continue Button */}
          <div className="flex justify-end">
  <Button
    onClick={handleContinue}
    className="bg-blue-600 px-8 py-2 text-white hover:bg-blue-700 lg:mb-10"
  >
    Continue
  </Button>
</div>
</div>


        {/* Newsletter Section */}
      
        <Newsletter/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
