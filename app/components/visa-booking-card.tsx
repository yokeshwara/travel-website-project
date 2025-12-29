"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Bus, Plus, Minus, MoveRight } from "lucide-react"
import { useRouter } from "next/navigation";

export function BookingCard() {
  const [counts, setCounts] = useState({ adults: 2, children: 1, infants: 0 })
     const router = useRouter();
  
  const updateCount = (type: keyof typeof counts, delta: number) => {
    setCounts((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }))
  }

    const clickBack = () => {
    router.push(
      '/visa1'
    );
  };

  return (
    <div className="w-full max-w-5xl px-4">
      {/* Top Row: Back and Date */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button onClick={clickBack} className="bg-white rounded-lg px-6 py-3 flex items-center gap-2 text-blue-600 font-medium shadow-lg hover:bg-gray-50 transition-colors">
          <ArrowLeft size={18} />
          Back
        </button>
        <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-between min-w-[240px] shadow-lg">
          <span className="text-gray-700 font-medium">13 November 2024</span>
          <Calendar size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Bus Only Tab */}
      <div className="relative z-10 w-fit">
        <div className="inline-flex items-center gap-3 bg-white rounded-t-3xl px-6 py-4 border-b-0 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <Bus size={24} fill="currentColor" />
          </div>
          <span className="font-bold text-gray-900 text-xl whitespace-nowrap">Buss Only</span>
        </div>
      </div>

      {/* Main Booking Box */}
      <div className="bg-white rounded-2xl rounded-tl-none p-8 md:p-12 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Route Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 md:gap-8">
              <span className="text-3xl md:text-4xl font-black text-gray-900">DXB</span>
              <MoveRight className="text-gray-900 w-12 md:w-16" strokeWidth={3} />
              <span className="text-3xl md:text-4xl font-black text-gray-900">MCT</span>
              <MoveRight className="text-gray-900 w-12 md:w-16" strokeWidth={3} />
              <span className="text-3xl md:text-4xl font-black text-gray-900">DXB</span>
            </div>
            <div className="text-4xl font-black text-gray-900">$364.00</div>
          </div>

          {/* Passenger Counters */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-6">
              <Counter
                label="Adults 12+ Yrs"
                value={counts.adults}
                onIncrement={() => updateCount("adults", 1)}
                onDecrement={() => updateCount("adults", -1)}
              />
              <Counter
                label="Children 2-12 Yrs"
                value={counts.children}
                onIncrement={() => updateCount("children", 1)}
                onDecrement={() => updateCount("children", -1)}
              />
              <Counter
                label="Infant 2 Yrs"
                value={counts.infants}
                onIncrement={() => updateCount("infants", 1)}
                onDecrement={() => updateCount("infants", -1)}
              />
            </div>
            <button className="bg-blue-600 text-white w-full py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Counter({
  label,
  value,
  onIncrement,
  onDecrement,
}: { label: string; value: number; onIncrement: () => void; onDecrement: () => void }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold text-gray-500">{label}</span>
      <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
        <button onClick={onDecrement} className="text-blue-600 hover:opacity-70">
          <Minus size={16} strokeWidth={3} />
        </button>
        <span className="min-w-[20px] text-center font-bold text-gray-700">{value}</span>
        <button onClick={onIncrement} className="text-blue-600 hover:opacity-70">
          <Plus size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
