"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Share2, ChevronDown, ChevronUp } from "lucide-react"

interface AttractionDetailProps {
  attractionId: string
}

export default function AttractionDetail({ attractionId }: AttractionDetailProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Mock data - replace with actual API call
  const attraction = {
    id: attractionId,
    title: "Dubai Desert Safari with BBQ Dinner",
    subtitle: "Enjoy an evening full of cultural shows, traditional entertainment and mouth-watering BBQ dinner",
    rating: 4.4,
    reviews: 1278,
    price: 499,
    images: {
      main: "/images/image.jpeg",
      thumbnails: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
      ],
    },
  }

  const faqs = [
    {
      question: "What's included?",
      answer: "Includes pickup, desert safari, camel ride, sandboarding, BBQ dinner, and traditional entertainment.",
    },
    { question: "When do I get?", answer: "Tours typically run from 3:00 PM to 10:00 PM daily." },
    { question: "How do I cancel?", answer: "Free cancellation up to 24 hours before the tour." },
    { question: "Can I cancel on the day itself?", answer: "Yes, with 50% refund if cancelled on the same day." },
    {
      question: "What should I get on the actual trip?",
      answer: "Wear comfortable clothes, sunscreen, and closed-toe shoes.",
    },
  ]

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" style={{ fontFamily: "Urbanist" }}>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <span>/</span>
          <a href="/" className="hover:text-blue-600">
            Attractions
          </a>
          <span>/</span>
          <span>Dubai Desert Safari</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>{attraction.title}</h1>
            <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: "Urbanist" }}>{attraction.subtitle}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="font-semibold" style={{ fontFamily: "Urbanist" }}>{attraction.rating}</span>
                <span className="text-gray-600 text-sm" style={{ fontFamily: "Urbanist" }}>({attraction.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 md:whitespace-nowrap" style={{ fontFamily: "Urbanist" }}>
            <Share2 size={18} />
            Share this attraction
          </button>
        </div>

        {/* Image Gallery and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Content - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image with Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {/* Main Image - 2x2 */}
              <div className="col-span-2 row-span-2">
                <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                    alt="Main attraction image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Thumbnail Grid - 2 columns, 2 rows */}
              {attraction.images.thumbnails.map((img, idx) => (
                <div
                  key={idx}
                  className="col-span-1 relative w-full h-20 sm:h-24 rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Free Cancellation Badge */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-green-600 font-bold text-xl">✓</div>
                <div style={{ fontFamily: "Urbanist" }}>
                  <p className="font-semibold text-green-900">Free cancellation available</p>
                  <p className="text-sm text-green-800">Service animals welcome</p>
                </div>
              </div>
            </div>

            {/* Description and Details */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "Urbanist" }}>
                This experience will give you the chance to go on a desert safari and enjoy unforgettable and natural
                authentic and traditional entertainment along with the opportunity to enjoy a traditional barbecue
                dinner.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Urbanist" }}>
                This experience will give you the chance to go on a desert safari and enjoy unforgettable and natural
                authentic and traditional entertainment along with the opportunity to enjoy the chance to enjoy a
                traditional barbecue dinner and will have the opportunity to enjoy the chance to enjoy a traditional
                entertainment show as you enjoy as you enjoy the chance to enjoy a traditional barbecue dinner
              </p>
            </div>

            {/* What's Included / Not Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Urbanist" }}>What's included</h3>
                <ul className="space-y-3">
                  {[
                    "Sandboarding",
                    "Camel ride",
                    "Traditional dance",
                    "Falconry",
                    "Henna painting",
                    "Shisha",
                    "Arabic coffee & dates",
                    "BBQ Buffet",
                    "Live entertainment show",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="text-green-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Urbanist" }}>What's not included</h3>
                <ul className="space-y-3">
                  {[
                    "Alcoholic beverages",
                    "Soft drinks",
                    "Souvenirs",
                    "Personal items",
                    "Hotel transfers (optional)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="text-red-500 font-bold">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Health & Safety */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8" style={{ fontFamily: "Urbanist" }}>
              <h3 className="font-bold text-lg mb-4">Health & safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Not recommended for pregnant women</li>
                <li>• Suitable for all fitness levels</li>
                <li>• Face masks provided</li>
                <li>• Temperature checks at entry</li>
              </ul>
            </div>

            {/* Restrictions */}
            <div className="mb-8" style={{ fontFamily: "Urbanist" }}>
              <h3 className="font-bold text-lg mb-4">Restrictions</h3>
              <p className="text-gray-700">Please only interact in a fun environment as instructed during Ramadan.</p>
            </div>

            {/* Languages */}
            <div className="mb-8" style={{ fontFamily: "Urbanist" }}>
              <h3 className="font-bold text-lg mb-4">Languages spoken by guide</h3>
              <div className="flex flex-wrap gap-2">
                {["Arabic", "English"].map((lang) => (
                  <span key={lang} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="mb-8" style={{ fontFamily: "Urbanist" }}>
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <div className="relative w-full h-80 rounded-lg overflow-hidden bg-gray-200 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="Location map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pick-up Point */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: "Urbanist" }}>Pick-up point</h4>
                  <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Urbanist" }}>
                    Please note that pickup will run until all returns are available from accommodation and hotels in
                    Dubai and these shall be confirmed with the client.
                  </p>
                  <button className="text-blue-600 hover:underline text-sm font-semibold" style={{ fontFamily: "Urbanist" }}>Learn more</button>
                </div>
              </div>
            </div>

            {/* User Reviews */}
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6" style={{ fontFamily: "Urbanist" }}>User settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ fontFamily: "Urbanist" }}>
                {[
                  { rating: 4.7, label: "Tour Cleanliness", reviews: 234 },
                  { rating: 4.6, label: "Tour times", reviews: 234 },
                  { rating: 4.3, label: "Quality of service", reviews: 234 },
                  { rating: 4.8, label: "Kind of food", reviews: 234 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4" style={{ fontFamily: "Urbanist" }}>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-lg" style={{ fontFamily: "Urbanist" }}>{item.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600" style={{ fontFamily: "Urbanist" }}>{item.reviews} reviews</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Guests Loved Most */}
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6" style={{ fontFamily: "Urbanist" }}>What guests loved most</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Khalid",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                    text: "If you like experiences, I expect having very nice if you need a gid it should be quick and it's not hard to book the time.",
                  },
                  {
                    name: "Sarah",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                    text: "Best tour experience. I expect having very nice trip and it's a great tour made amazing by our guide and the support shown was amazing.",
                  },
                ].map((review, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ fontFamily: "Urbanist" }}>{review.name}</p>
                        <p className="text-xs text-gray-600" style={{ fontFamily: "Urbanist" }}>Based on last 50+ bookings</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700" style={{ fontFamily: "Urbanist" }}>{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6" style={{ fontFamily: "Urbanist" }}>Frequently asked questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900" style={{ fontFamily: "Urbanist" }}>{faq.question}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp size={20} className="text-gray-600" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-600" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700" style={{ fontFamily: "Urbanist" }}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-6" style={{ fontFamily: "Urbanist" }}>Tickets and prices</h3>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>
                  Search ticket availability by date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Urbanist" }}>Min Date - (4 Dec 27)</p>
              </div>

              {/* Time Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>Select time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ fontFamily: "Urbanist" }}
                >
                  <option value="">Select a time</option>
                  <option value="3pm">3:00 PM</option>
                  <option value="4pm">4:00 PM</option>
                  <option value="5pm">5:00 PM</option>
                </select>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6 space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>Adults</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-3 py-2 hover:bg-gray-100">
                      −
                    </button>
                    <span className="flex-1 text-center py-2">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)} className="px-3 py-2 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>Children</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center py-2">{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="px-3 py-2 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Tour Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 mb-2" style={{ fontFamily: "Urbanist" }}>
                  <strong>Dubai Desert Safari, Dune Bashing, Camel Ride, Barbecue, Entertainment & Dinner</strong>
                </p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>✓ Free cancellation available</p>
                  <p>✓ Mobile e-ticket accepted</p>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700" style={{ fontFamily: "Urbanist" }}>Total price</span>
                  <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Urbanist" }}>USD {attraction.price}</span>
                </div>
                <p className="text-xs text-gray-500" style={{ fontFamily: "Urbanist" }}>Includes all taxes and charges</p>
              </div>

              {/* Book Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors" style={{ fontFamily: "Urbanist" }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
