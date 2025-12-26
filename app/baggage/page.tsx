"use client"
import { Plane, Building, Car, Hotel, Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import NewHeader from "../components/new-header"
import Newsletter from "../components/newsletter"
import { Footer } from "../components/footer"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TravelBookingPage() {
     const [isModalOpen, setIsModalOpen] = useState(false)
    const [baggageData, setBaggageData] = useState({
    david: { weight: "", price: "-" },
    johnDoe: { weight: "", price: "-" },
  })

  const handleAddBaggage = (passenger: "david" | "johnDoe", weight: string) => {
    const weightNum = Number.parseInt(weight)
    if (!isNaN(weightNum) && weightNum > 0 && weightNum % 5 === 0) {
      setBaggageData((prev) => ({
        ...prev,
        [passenger]: { weight, price: "-" },
      }))
    }
  }

    const router = useRouter();
    const handleContinue = () => {
    router.push("/trip-summary") // change route as needed
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <NewHeader />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal mb-8 text-balance">
            DAVID, COMPLETE YOUR JOURNEY WITH A WIDE RANGE OF WORLD CLASS SERVICES,
          </h2>

          {/* Seat Selection Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl text-gray-800 font-normal mb-6">Seat Selection</h3>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-4 md:p-8 space-y-8">
              {/* First Route */}
              <div>
                <h4 className="text-base md:text-lg text-gray-700 font-medium mb-4">Dubai (DBI) - London (LDN)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium"></th>
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium">
                          DBI - LDN
                        </th>
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium">
                          LDN - DBI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-700">David</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">19D 8666.0 PKR</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">No seat selected</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-700">John Doe</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">19D 8666.0 PKR</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">No seat selected</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-b border-gray-500"></div>

              {/* Second Route */}
              <div>
                <h4 className="text-base md:text-lg text-gray-700 font-medium mb-4">London (LDN) - Dubai (DBI)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium"></th>
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium">
                          DBI - LDN
                        </th>
                        <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium">
                          LDN - DBI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-2 text-sm md:text-base text-gray-700">David</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">No seat selected</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">19D 8666.0 PKR</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-700">John Doe</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">No seat selected</td>
                        <td className="py-3 px-2 text-sm md:text-base text-gray-600">19D 8666.0 PKR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Baggage Section */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl text-gray-800 font-normal mb-6">Additional Baggage</h3>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-4 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-full md:w-48 lg:w-64 flex-shrink-0">
                  <Image
                    src="/baggage.png"
                    alt="Red luggage bags"
                    width={250}
                    height={200}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-2">Upto 70% off extra baggage</h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Carry more than your free baggage allowance by purchasing in advance
                  </p>
                  <Button onClick={() => setIsModalOpen(true)}className="bg-[#4169E1] hover:bg-[#3458c5] text-white px-6">Select</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
        <Newsletter/>
        </div>
      </main>

      {/* Footer */}
     <Footer/>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-[#4169E1] text-white rounded-lg shadow-lg hover:bg-[#3458c5] transition-colors flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
       {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg md:text-xl font-normal text-gray-800">Select Additional Baggage</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Carry more than your free baggage allowance by purchasing in advance
              </p>

              <div className="mb-6">
                <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1">Dubai (DBI) - London (LDN)</h4>
                <p className="text-sm text-gray-500">Thu 30 May 2024</p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200  bg-blue-50">
                      <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium w-1/4">
                        Passengers
                      </th>
                      <th className="text-left py-3 px-2 text-sm md:text-base text-gray-600 font-medium w-1/2">
                        Additional Baggage weight in (Kg)
                      </th>
                      <th className="text-left py-3 px-9 text-sm md:text-base text-gray-600 font-medium w-1/4">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* David Row */}
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-2 text-sm md:text-base text-gray-700">David</td>
                      <td className="py-4 px-2">
                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                          <input
                            type="text"
                            placeholder="Example 10"
                            value={baggageData.david.weight}
                            onChange={(e) =>
                              setBaggageData((prev) => ({
                                ...prev,
                                david: { ...prev.david, weight: e.target.value },
                              }))
                            }
                            className="flex-1 px-3 py-2 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                          />
                          <Button
                            onClick={() => handleAddBaggage("david", baggageData.david.weight)}
                            className="bg-[#4169E1] hover:bg-[#3458c5] text-white px-4 py-2 text-sm"
                          >
                            ADD
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Please enter the multiples of 5</p>
                      </td>
                      <td className="py-4 px-12 text-sm md:text-base text-gray-700 ">{baggageData.david.price}</td>
                    </tr>

                     
                    
                    {/* John Doe Row */}
                    <tr>
                      <td className="py-4 px-2 text-sm md:text-base text-gray-700">John Doe</td>
                      <td className="py-4 px-2">
                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                          <input
                            type="text"
                            placeholder="Example 10"
                            value={baggageData.johnDoe.weight}
                            onChange={(e) =>
                              setBaggageData((prev) => ({
                                ...prev,
                                johnDoe: { ...prev.johnDoe, weight: e.target.value },
                              }))
                            }
                            className="flex-1 px-3 py-2 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                          />
                          <Button
                            onClick={() => handleAddBaggage("johnDoe", baggageData.johnDoe.weight)}
                            className="bg-[#4169E1] hover:bg-[#3458c5] text-white px-4 py-2 text-sm"
                          >
                            ADD
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Please enter the multiples of 5</p>
                      </td>
                      <td className="py-4 px-12 text-sm md:text-base text-gray-700">{baggageData.johnDoe.price}</td>
                    </tr>
                  </tbody>
                    
                </table>
               <div className="border-b border-gray-500"></div>
                    
              </div>

              {/* Continue Button */}
              <div className="flex justify-end mt-6">
                <Button
                   onClick={handleContinue}
                  className="bg-[#4169E1] hover:bg-[#3458c5] text-white px-8"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
