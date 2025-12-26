"use client"
import { Footer } from "@/app/components/footer"
import NewHeader from "@/app/components/new-header"
import Newsletter from "@/app/components/newsletter"
import { Star, MapPin, Heart, Share2, Check, MapPinIcon, ChevronDown, Users, Utensils } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function HotelDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const tabs = ["Overview", "Popular", "Location", "Media", "Reviews"]

  const amenities = [
    { icon: "🏊", label: "Swimming", info: "Good" },
    { icon: "🍽️", label: "Restaurant", info: "Excellent" },
    { icon: "🎉", label: "Fun & Games", info: "Very Good" },
    { icon: "🏋️", label: "Sports", info: "Good" },
  ]

   const router = useRouter();
      const bookNow = () => {
      router.push("/guestdetails") // change route as needed
    }

  const rooms = [
    {
      id: 1,
      image: "/hotel1.png",
      name: "Classic king bed",
      guests: "2 adults",
      accessibility: "Wheelchair-accessible",
      bookingOptions: [
        {
          type: "Breakfast included",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["Pay now", "Non-refundable"],
          refund: "+$22",
        },
        {
          type: "Room only",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["FREE cancellation before 28 August 2024", "Pay on 28 August 2024"],
        },
        {
          type: "Breakfast included",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["Pay now", "Non-refundable"],
          refund: "+$22",
        },
      ],
    },
    {
      id: 2,
      image: "/hotel2.png",
      name: "Classic double or twin bed",
      guests: "2 adults",
      accessibility: "Wheelchair-accessible",
      bookingOptions: [
        {
          type: "Breakfast included",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["Pay now", "Non-refundable"],
          refund: "+$22",
        },
        {
          type: "Room only",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["FREE cancellation before 28 August 2024", "Pay on 28 August 2024"],
        },
      ],
    },
    {
      id: 3,
      image: "/hotel3.png",
      name: "Classic double or twin bed",
      guests: "2 adults",
      accessibility: "Wheelchair-accessible",
      bookingOptions: [
        {
          type: "Room only",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["FREE cancellation before 28 August 2024", "Pay on 28 August 2024"],
        },
        {
          type: "Breakfast included",
          price: 360,
          originalPrice: 600,
          discount: 40,
          details: ["Pay now", "Non-refundable"],
          refund: "+$22",
        },
      ],
    },
  ]

  const locationRatings = [
    { icon: "🏛️", score: 8.4, label: "Very good", category: "Sightseeing" },
    { icon: "🍴", score: 9.6, label: "Superb", category: "Eating" },
    { icon: "🛍️", score: 7.4, label: "Good", category: "Shopping" },
    { icon: "🍸", score: 9.6, label: "Superb", category: "Nightlife" },
  ]

  const facilities = [
    ["Free WiFi", "Air Conditioning", "Room Service", "Parking"],
    ["Swimming Pool", "Fitness Center", "Spa & Wellness", "Restaurant"],
    ["Business Center", "Conference Rooms", "Concierge", "Laundry Service"],
    ["24/7 Security", "Safe Box", "Reception", "Doctor on Call"],
  ]

  const reviews = [
    {
      id: 1,
      rating: 8.0,
      label: "Excellent",
      category: "Cleanliness",
      author: "John David",
      date: "2 months ago",
      text: "Wonderful stay at this amazing hotel. The staff were very helpful and the rooms were spotless.",
      verified: true,
      helpful: 23,
    },
    {
      id: 2,
      rating: 9.0,
      label: "Excellent",
      category: "Service",
      author: "Sarah Johnson",
      date: "3 months ago",
      text: "Outstanding experience! Everything was perfect from check-in to check-out.",
      verified: true,
      helpful: 45,
    },
    {
      id: 3,
      rating: 8.5,
      label: "Very Good",
      category: "Value for Money",
      author: "Michael Chen",
      date: "1 month ago",
      text: "Loved the location and the facilities are top-notch. Highly recommended!",
      verified: true,
      helpful: 12,
    },
  ]

  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer:
        "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.",
    },
    {
      question: "Is breakfast included in the room rate?",
      answer:
        "Continental breakfast is included in most room packages. Please check your specific booking for details.",
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we offer complimentary parking for all our guests.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods.",
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Cancellations made 48 hours before arrival are eligible for a full refund.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NewHeader/>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-600">
          Home / Hotels / Dubai / Manarat Grand Al Bustan Dubai
        </div>
      </div>

      {/* Hotel Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Manarat Grand Al Bustan Dubai</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">4.5 (2,847 reviews)</span>
            <span className="text-blue-600 font-semibold">Prime Location</span>
          </div>
          <div className="flex gap-3 mt-3 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Heart size={18} />
              <span>Save</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <img
              src="/room1.png"
              alt="Hotel corridor"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2  md:col-span-2">
            <img src="/room2.png" alt="Bedroom" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/room3.png" alt="Lobby" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/room4.png" alt="Lounge" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/room5.png" alt="Dining" className="w-full h-32 md:h-44 object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`pb-2 font-semibold transition-colors ${
                activeTab === tab.toLowerCase()
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.label} className="border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300">
            <div className="text-3xl mb-2">{amenity.icon}</div>
            <div className="font-semibold text-gray-900">{amenity.label}</div>
            <div className="text-sm text-green-600 font-semibold">{amenity.info}</div>
          </div>
        ))}
      </div> */}

       {/* Location Ratings Section - New section with location ratings matching design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <MapPin size={20} className="text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Superb location for Eating!</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">Based on 130,476 interactions by locals and travellers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationRatings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
                <div className="z-10 text-center">
                  <div className="text-2xl font-bold text-gray-900">{item.score}</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-green-600 mb-1">{item.label}</div>
              <div className="text-sm text-gray-700">{item.category}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Check-in/Checkout/Guests Inputs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-y border-gray-200 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check in</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check out</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select number of guests</option>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>
        </div>
      </div>

     

      {/* Rooms Section - Completely redesigned to match booking layout from image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Rooms</h2>
        <div className="space-y-8">
          {rooms.map((room) => (
            <div key={room.id} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Room Image and Details */}
              <div className="border border-gray-300 rounded-lg p-6 flex flex-col">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-blue-600 mb-4">{room.name}</h3>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span>{room.accessibility}</span>
                  </div>
                </div>

                <button className="mt-auto pt-6 text-blue-600 font-semibold hover:underline text-sm">
                  See room details →
                </button>
              </div>

              {/* Right Column - Booking Options */}
              <div className="space-y-4">
                {room.bookingOptions.map((option, optIndex) => (
                  <div key={optIndex} className="border border-gray-300 rounded-lg p-6">
                    {/* Header with type and discount */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {option.type === "Breakfast included" ? (
                          <Utensils size={18} className="text-green-600" />
                        ) : (
                          <span className="text-lg">🏨</span>
                        )}
                        <span className="font-semibold text-gray-900">{option.type}</span>
                        {option.type === "Breakfast included" && (
                          <span className="text-xs text-gray-500">(info icon)</span>
                        )}
                      </div>
                      <div className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded">
                        -{option.discount}% TODAY
                      </div>
                    </div>

                    {/* Details list */}
                    <div className="mb-4 space-y-2">
                      {option.details.map((detail, detIndex) => (
                        <div key={detIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check size={16} className="text-green-600 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                      {option.refund && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 ml-6">
                          <Heart size={16} className="flex-shrink-0" />
                          <span>Protect my booking with Refund Protect {option.refund}</span>
                        </div>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-900">${option.price}</span>
                        <span className="text-gray-500 line-through text-lg">${option.originalPrice}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">$30</span> per night (12 nights)
                        <br />
                        <span className="text-xs">VAT included</span>
                      </div>

                      {/* Book Button */}
                      <button onClick={bookNow} className="lg:w-23  lg:ml-115 bg-blue-600 text-white font-bold py-0 hover:bg-blue-700 transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.flat().map((facility, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <Check size={20} className="text-green-600 flex-shrink-0" />
              <span>{facility}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPinIcon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Al Bustan</p>
                <p className="text-gray-600">Dubai, UAE</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Distance from Airport:</span> 25 km
              </p>
              <p>
                <span className="font-semibold">Distance from City Center:</span> 10 km
              </p>
              <p>
                <span className="font-semibold">Distance from Beach:</span> 15 km
              </p>
            </div>
          </div>
          <div className="">
            <div className="text-center">
              <img
        src="/map.png"   
        alt="Hotel Location Map"
        className="w-full h-full object-cover"
      />
              
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of the Accommodation</h2>
        <p className="text-gray-700 leading-relaxed">
          Manarat Grand Al Bustan Dubai is a luxurious five-star hotel located in the heart of Dubai's finest
          neighborhood. With stunning architecture and world-class amenities, this hotel offers an unforgettable
          experience. The property features 250 elegantly appointed rooms and suites, each with modern conveniences and
          premium furnishings. Our guests enjoy access to multiple restaurants, bars, a state-of-the-art fitness center,
          and a luxurious spa.
        </p>
      </div>

      {/* Check-in and Important Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Check-in and important information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Basic info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Earliest check-in</h3>
              <p className="text-gray-600 text-sm">From 2:00 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Strict checkout</h3>
              <p className="text-gray-600 text-sm">By 11:00 AM</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Special check-in instructions</h3>
              <p className="text-gray-600 text-sm">Contact the property for detailed arrival instructions</p>
            </div>
          </div>

          {/* Right side - Requirements */}
          <div className="space-y-3">
            {[
              "Valid photo ID required at check-in",
              "Guests can request a late checkout - subject to availability for a charge",
              "Early checkout allowed on request",
              "Gate/lock code provided to guests",
            ].map((rule, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section - Completely redesigned with score-based layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Overall Rating Card */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">8.5</div>
              <div className="text-sm font-semibold text-gray-700 mb-2">Excellent</div>
              <p className="text-xs text-gray-600">Based on 2,847 reviews</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Category Ratings */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{review.category}</h3>
                    <p className="text-xs text-gray-600 mt-1">by {review.author}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{review.rating}</div>
                      <div className="text-xs text-gray-600">{review.label}</div>
                    </div>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
                      <span className="text-sm font-bold text-green-600">{review.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        <h3 className="text-lg font-bold text-gray-900 mb-4">What guests loved the most</h3>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{review.rating}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold">
                        Verified
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{review.category}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-semibold">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="text-blue-600 text-xs font-semibold hover:underline">
                  Helpful? ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                />
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter/>

      {/* Footer */}
      <Footer />
    </div>
  )
}
