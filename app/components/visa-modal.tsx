"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface VisaModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectOption: (option: "road" | "air") => void
}

export default function VisaModal({ isOpen, onClose, onSelectOption }: VisaModalProps) {
  const [selectedOption, setSelectedOption] = useState<"road" | "air" | null>(null)

  if (!isOpen) return null

  const handleSelect = (option: "road" | "air") => {
    setSelectedOption(option)
    setTimeout(() => {
      onSelectOption(option)
      setSelectedOption(null)
    }, 300)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-normal text-gray-800">Select Visa Options</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* By Road Card */}
            <button
              onClick={() => handleSelect("road")}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer ${
                selectedOption === "road" ? "ring-2 ring-blue-500 scale-95" : "hover:shadow-lg"
              }`}
            >
              <div className="relative w-full h-48 sm:h-56 bg-gray-200">
                <Image
                  src="/bus.png"
                  alt="By Road - Bus transport"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 sm:p-5 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">By Road</h3>
              </div>
            </button>

            {/* By Air Card */}
            <button
              onClick={() => handleSelect("air")}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer ${
                selectedOption === "air" ? "ring-2 ring-blue-500 scale-95" : "hover:shadow-lg"
              }`}
            >
              <div className="relative w-full h-48 sm:h-56 bg-gray-200">
                <Image
                  src="/aeroplane.png"
                  alt="By Air - Airplane transport"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-4 sm:p-5 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">By Air</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
