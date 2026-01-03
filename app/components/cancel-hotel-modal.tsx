"use client"

import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CancelHotelModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CancelHotelModal({ isOpen, onClose }: CancelHotelModalProps) {
  const [selectedReason, setSelectedReason] = useState("Change of plans")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const cancelReasons = [
    "Change of plans",
    "Found a better rate",
    "Personal emergency",
    "Schedule conflict",
    "Budget constraints",
    "Other",
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      {/* 🔽 REDUCED WIDTH & HEIGHT */}
      <div className="bg-white rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b">
          <div>
            <h1 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Urbanist" }}>
              Are you sure you want to cancel?
            </h1>
            <p className="text-sm text-slate-600" style={{ fontFamily: "Urbanist" }}>
              Cancel without penalty before deadline.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* IDs */}
          <div className="grid grid-cols-2 gap-4 text-sm" style={{ fontFamily: "Urbanist" }}>
            <div>
              <p className="text-slate-500">Confirmation#</p>
              <p className="font-semibold">3527776784</p>
            </div>
            <div>
              <p className="text-black-500" style={{ fontFamily: "Urbanist" }}>Navan Booking ID: IWXRBX</p>
             
            </div>
          </div>

          {/* Info */}
          <div className="bg-green-50 border border-green-200 rounded-md p-3 text-sm text-green-800" style={{ fontFamily: "Urbanist" }}>
           Change or cancel for free until Nov 10, 2024, 3:00 PM
          </div>

          {/* Hotel */}
          <div className="flex gap-3">
            <Image
              src="/cancel-popup.png"
              alt="Hotel"
              width={90}
              height={70}
              className="rounded-md object-cover"
            />
            <div>
              <h2 className="font-semibold text-slate-900" style={{ fontFamily: "Urbanist" }}>
                Mövenpick Grand Al Bustan
              </h2>
              <p className="text-xs text-slate-600" style={{ fontFamily: "Urbanist" }}>
                Casablanca Road, Dubai
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="text-sm space-y-1">
            <div className="flex justify-between" style={{ fontFamily: "Urbanist" }}>
              <span>Room / Night</span>
              <span className="font-semibold">$217.14</span>
            </div>
            <div className="flex justify-between" style={{ fontFamily: "Urbanist" }}>
              <span>Taxes & Fees</span>
              <span className="font-semibold">$78.57</span>
            </div>
            <div className="flex justify-between border-t pt-2 font-bold" style={{ fontFamily: "Urbanist" }}>
              <span>Total</span>
              <span>$381.06</span>
            </div>
          </div>

          {/* Reason Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="lg:w-70 px-4 py-2 border rounded-md flex justify-between items-center text-sm"
            >
              <span>{selectedReason}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
                {cancelReasons.map((reason) => (
                  <button
                    key={reason}
                    onClick={() => {
                      setSelectedReason(reason)
                      setDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm"
                  >
                    {reason}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
              style={{ fontFamily: "Urbanist" }}
            >
              Go Back
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-white-600 hover:bg-white-700 text-blue-700 border-gray-900"
              style={{ fontFamily: "Urbanist" }}
            >
              Cancel Hotel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
