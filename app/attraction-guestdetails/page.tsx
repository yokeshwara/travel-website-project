

"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Star, Mail, Phone, MapPinIcon, CheckCircle2 } from "lucide-react"
import { Footer } from "../components/footer"

import { useRouter } from "next/navigation"
import NewHeader from "../components/new-header"
import { Newsletter } from "../components/newsletter"

export default function AttractionGuestDetailsPage() {
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
        router.push("/attractions-payment") // change route as needed
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
      <h3 className="font-bold text-gray-900 mb-2">
        Dubai Desert Safari with BBQ Dinner
      </h3>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <span className="text-sm text-gray-600">(234 reviews)</span>
      </div>

      <p className="text-green-600 font-bold text-sm mb-4 flex items-center gap-1">
        <CheckCircle2 size={16} /> Excellent
      </p>

      <div className="space-y-4 border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Date:</span>
          <span className="font-semibold">5 Nov 2022</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Duration:</span>
          <span className="font-semibold">1 Day</span>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <h4 className="font-bold text-gray-900 mb-3">Traveler details</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Adults:</span>
            <span>👥 2 adults</span>
          </div>
          <div className="flex justify-between">
            <span>Children:</span>
            <span>👧 1 child</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <h4 className="font-bold text-gray-900 mb-3">Price details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>1 day</span>
            <span>USD 699</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>399 per day</span>
            <span>-45% off (15%)</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Taxes & fees</span>
            <span>$388</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-2 border-t">
            <span>Total</span>
            <span>$422</span>
          </div>
        </div>
      </div>
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
