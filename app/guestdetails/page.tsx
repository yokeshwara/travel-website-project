"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Star, Mail, Phone, MapPinIcon } from "lucide-react"
import { Footer } from "../components/footer"
import Newsletter from "../components/newsletter"
import { useRouter } from "next/navigation"
import NewHeader from "../components/new-header"

export default function GuestDetailsPage() {
  const [expandGuest2, setExpandGuest2] = useState(false)
  const [guests, setGuests] = useState({
    main: {
      title: "Mr",
      fullName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "",
      documentType: "",
      country: "",
    },
    contact: {
      primaryContact: "",
      countryContact: "",
      phone: "",
      email: "",
    },
  })

     const router = useRouter();
        const bookNow = () => {
        router.push("/stays-payment") // change route as needed
      }



  const handleInputChange = (section: string, field: string, value: string) => {
    setGuests((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <NewHeader/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guest Details Section */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Guest Details</h2>
              <p className="text-sm text-gray-600 mb-6">
                Please enter names as they Guest names Tips on adding guest names
              </p>

              {/* Login Benefit Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-gray-700">Log in to your account to unlock extra benefits</p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Save on your booking when you pay using Cash + Avios
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Auto-fill your booking details</p>
                  </div>
                </div>
              </div>

              {/* Main Guest Form */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Main Guest</h3>

                {/* Title Selection */}
                <div className="flex gap-4">
                  {["Mr", "Mrs", "Ms"].map((title) => (
                    <button
                      key={title}
                      onClick={() => handleInputChange("main", "title", title)}
                      className={`px-4 py-2 border rounded-lg font-medium transition ${
                        guests.main.title === title
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {title}
                    </button>
                  ))}
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name/Middle Name"
                    value={guests.main.fullName}
                    onChange={(e) => handleInputChange("main", "fullName", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={guests.main.lastName}
                    onChange={(e) => handleInputChange("main", "lastName", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Date and Nationality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Date of birth DD/MM/YYYY"
                    value={guests.main.dateOfBirth}
                    onChange={(e) => handleInputChange("main", "dateOfBirth", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="relative">
                    <select
                      value={guests.main.nationality}
                      onChange={(e) => handleInputChange("main", "nationality", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Nationality</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Documents Section */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Documents</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        value={guests.main.documentType}
                        onChange={(e) => handleInputChange("main", "documentType", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                      >
                        <option value="">Document Type</option>
                        <option value="passport">Passport</option>
                        <option value="license">License</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select
                        value={guests.main.country}
                        onChange={(e) => handleInputChange("main", "country", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                      >
                        <option value="">Select Country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Guest 2 Section */}
            <section className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => setExpandGuest2(!expandGuest2)}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">Guest 2</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandGuest2 ? "rotate-180" : ""}`}
                />
              </button>
              {expandGuest2 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200">
                  <p className="text-center text-gray-500 py-8">Expand to add details</p>
                </div>
              )}
            </section>

            {/* Contact Details Section */}
            <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Details</h2>
              <p className="text-sm text-gray-600 mb-6">
                Please provide your contact details so that we can notify you the updates on your flight
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                    <option value="">Select Primary Contact</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </section>

            {/* Newsletter/Promotional Section */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <img
                src="/guest1.png"
                alt="Dubai fountain"
                className="w-full sm:w-40 h-32 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-4">
                <p className="text-gray-700">
                  Receive exclusive offers to more amazing discounts in future booking in Dubai
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span className="text-sm text-gray-700">Receive exclusive offers</span>
                </label>
              </div>
            </section>

            {/* Additional Checkboxes */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-sm text-gray-700">Remember the above Guest details for future bookings.</span>
              </label>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-center">
              <button onClick={bookNow}className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Column - Booking Details Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-2">Mövenpick Grand Al Bustan Dubai</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Excellent</span>
              </div>

              <p className="text-xs text-gray-600 mb-4 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Corniche Road at Garhoud - Dubai
              </p>

              <div className="space-y-3 border-t border-b border-gray-200 py-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Check-in/out bed</p>
                  <p className="font-semibold text-gray-900">07 Sept 2024 - 2 Sept 2024</p>
                  <p className="text-xs text-gray-500">14 nights</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Occupancy</p>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    <span>2 adults, 2 child</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Room only</p>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Pay Now</p>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Non-refundable</p>
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Price Details */}
              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">14 nights</span>
                  <span className="text-gray-900">$2098.36</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">$27 per night</span>
                  <span className="text-gray-900">-48% off ($843)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & fees</span>
                  <span className="text-gray-900">$66.65</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination fee</span>
                  <span className="text-gray-900">$58</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between text-base font-bold text-gray-900 mb-2">
                  <span>Total</span>
                  <span>$422</span>
                </div>
                <p className="text-xs text-gray-600">Now you pay</p>
                <p className="text-lg font-bold text-gray-900">$384</p>
              </div>

              <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Booking conditions
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter Subscription Section */}
      <Newsletter/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
