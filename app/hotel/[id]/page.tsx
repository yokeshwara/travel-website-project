"use client"
import { Footer } from "@/app/components/footer"
import NewHeader from "@/app/components/new-header"

import { Star, MapPin, Heart, Share2, Check, MapPinIcon, ChevronDown, Users, Utensils, ChevronRight, Camera, ShoppingBag, Martini, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Accessibility,
  ParkingSquare,
  Wifi,
  Building2,
  Waves,
  Car,
  HeartPulse,
  Umbrella,
  Bell,
  User,
  Gamepad2,
  CheckCheckIcon
} from "lucide-react"
import Image from "next/image"
import { Newsletter } from "@/app/components/newsletter"
export default function HotelDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
   const [showAll, setShowAll] = useState(false)




  const tabs = ["Overview", "Popular", "Location", "Media", "Reviews"]

  const ratingData = [
  { label: "Good value", value: 4.4 },
  { label: "Facilities", value: 4.2 },
  { label: "Quality of service", value: 4.4 },
  { label: "Ease of access", value: 4.5 },
  ]

  const instructions = [
  "Extra-person charges may apply and vary depending on property policy",
  "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
  "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
  "The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation",
  "Guests must contact this property in advance to reserve cribs/infant beds and rollaway/extra beds",
  "This property accepts credit cards, debit cards, and cash",
  "Safety features at this property include a fire extinguisher and a first aid kit",
  "This property affirms that it follows the cleaning and disinfection practices of ALLSAFE (Accor Hotels)",
  "Please note that cultural norms and guest policies may differ by country and by property; the policies listed are provided by the property",
  "Safety features at this property include a fire extinguisher and a first aid kit",
]

  const visibleItems = showAll ? instructions : instructions.slice(0, 7)
  const amenities = [
    { icon: "🏊", label: "Swimming", info: "Good" },
    { icon: "🍽️", label: "Restaurant", info: "Excellent" },
    { icon: "🎉", label: "Fun & Games", info: "Very Good" },
    { icon: "🏋️", label: "Sports", info: "Good" },
  ]

  const nearbyLocations = [
  { name: "Da Gama", distance: "4 minutes" },
  { name: "Iris Village", distance: "4 minutes" },
  { name: "Da Gama", distance: "4 minutes" },
  { name: "Iris Village", distance: "4 minutes" },
  { name: "Da Gama", distance: "4 minutes" },
  { name: "Iris Village", distance: "4 minutes" },
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
  {
    title: "Accessibility",
    icon: Accessibility,
    items: ["Wheelchair-accessible", "Lift access"],
  },
  {
    title: "Internet",
    icon: Wifi,
    items: ["Wi-fi"],
  },
  {
    title: "Conveniences",
    icon: Building2,
    items: [
      "Air conditioning in public areas",
      "Hotel safe",
      "Currency exchange facilities",
      "Shop",
    ],
  },
  {
    title: "Pool",
    icon: Waves,
    items: ["Outdoor freshwater pool"],
  },
  {
    title: "Parking",
    icon: ParkingSquare,
    items: ["Car park"],
  },
  {
    title: "Transportation",
    icon: Car,
    items: ["Car hire", "Airport Shuttle"],
  },
  {
    title: "Wellness",
    icon: HeartPulse,
    items: [
      "Gym",
      "Sauna",
      "Steam bath",
      "Hot tub",
      "Massage",
      "Hairdressing salon",
      "Beauty salon",
      "Spa centre",
      "Fitness",
    ],
  },
  {
    title: "Outdoors",
    icon: Umbrella,
    items: ["Sun loungers", "Parasols"],
  },
  {
    title: "Guest Services",
    icon: Bell,
    items: [
      "24-hour reception",
      "Check-in hour",
      "Check-out hour",
      "Room service",
      "Laundry service",
      "Medical service",
      "Multilingual staff",
      "Bellboy service",
    ],
  },
  {
    title: "Family friendly",
    icon: User,
    items: ["Babysitting service", "Children playground"],
  },
  {
    title: "Things to do",
    icon: Gamepad2,
    items: ["Nightclub", "Squash", "Golf", "Tennis", "Badminton"],
  },
]

const reviews = [
  {
    name: "Rholindah",
    country: "Uganda",
    avatar: "/profile1.png", // replace with real image
    text: "Superb experience with luxurious accommodations and attentive staff. Highly recommend for comfortable getaway",
    visit: "Visited with a partner or spouse",
    date: "Posted 12 January 2024 on Booking.com",
  },
  {
    name: "Danisa",
    country: "Zimbabwe",
    avatar: "/profile2.png", // replace with real image
    text: "Superb experience with luxurious accommodations and attentive staff. Highly recommend for comfortable getaway",
    visit: "Visited with family",
    date: "Posted 28 December 2023 on Booking.com",
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

  const ratings = [
  {
    score: "8.4",
    title: "Very good",
    category: "Sightseeing",
    icon: Camera,
  },
  {
    score: "9.6",
    title: "Superb",
    category: "Eating",
    icon: Utensils,
  },
  {
    score: "7.4",
    title: "Good",
    category: "Shopping",
    icon: ShoppingBag,
  },
  {
    score: "9.6",
    title: "Superb",
    category: "Nightlife",
    icon: Martini,
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
          <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={16} className="text-green-600" />
        <h2 className="text-sm font-semibold text-gray-900">
          Superb location for Eating!
        </h2>
      </div>

      <p className="text-xs text-gray-500 mb-5">
        Based on 130,476 interactions by locals and travellers
      </p>

      {/* Ratings row */}
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        {ratings.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className="flex items-center gap-3 min-w-[160px]"
            >
              {/* Dotted circle */}
              <div className="relative h-12 w-12 flex items-center justify-center rounded-full border-2 border-dashed border-green-600">
                <span className="text-sm font-bold text-gray-900">
                  {item.score}
                </span>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-semibold text-green-600">
                  {item.title}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-700">
                  <Icon size={12} className="text-green-600" />
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          )
        })}
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Urbanist" }}>Available Rooms</h2>
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
                <h3 className="text-lg font-bold text-blue-600 mb-4" style={{ fontFamily: "Urbanist" }}>{room.name}</h3>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCheckIcon size={16} className="text-green-600" />
                    <span>{room.accessibility}</span>
                  </div>
                </div>

                <button className="mt-auto pt-6 text-blue-600 font-semibold hover:underline text-sm" style={{ fontFamily: "Urbanist" }}>
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
                        <span className="font-semibold text-gray-900" style={{ fontFamily: "Urbanist" }}>{option.type}</span>
                        {option.type === "Breakfast included" && (
                          <span className="text-xs text-gray-500">(info icon)</span>
                        )}
                      </div>
                      <div className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded" style={{ fontFamily: "Urbanist" }}>
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
                        <div className="flex items-center gap-2 text-sm text-gray-600 ml-6" style={{ fontFamily: "Urbanist" }}>
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
                        <span className="font-semibold" style={{ fontFamily: "Urbanist" }}>$30</span> per night (12 nights)
                        <br />
                        <span className="text-xs" style={{ fontFamily: "Urbanist" }}>VAT included</span>
                      </div>

                      {/* Book Button */}
                      <button onClick={bookNow} className="lg:w-23  lg:ml-115 bg-blue-600 text-white font-bold py-0 hover:bg-blue-700 transition-colors" style={{ fontFamily: "Urbanist" }}>
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
     <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-8" style={{ fontFamily: "Urbanist" }}>
        Facilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {facilities.map((section) => {
          const Icon = section.icon

          return (
            <div key={section.title}>
              {/* Category title */}
              <div className="flex items-center gap-2 mb-3">
                <Icon size={18} className="text-gray-700" />
                <h3 className="font-semibold text-gray-900 text-sm">
                  {section.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check
                      size={14}
                      className="text-gray-400 mt-0.5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
      {/* Location Section */}
  \<div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Urbanist" }}>
        Location
      </h2>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              <span className="text-sm font-semibold text-green-600"  style={{ fontFamily: "Urbanist" }}>
                Nearby Top Locations
              </span>
            </div>

            <span className="text-sm text-gray-500"  style={{ fontFamily: "Urbanist" }}>
              Walk / Distance
            </span>
          </div>

          {/* List */}
          <ul className="space-y-3">
            {nearbyLocations.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-sm text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span>{item.name}</span>
                </div>

                <span className="text-gray-600"  style={{ fontFamily: "Urbanist" }}>
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE – MAP */}
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4"  style={{ fontFamily: "Urbanist" }}>Description of the Accommodation</h2>
        <p className="text-gray-700 leading-relaxed"  style={{ fontFamily: "Urbanist" }}>
           This hotel is located on Casablanca Road in the Al Garhoud district, just 5 minutes from Dubai International Airport. The hotel is only a few minutes away from Dubai Creek Golf and Yacht Club, Dubai. The hotel's restaurants provide a wide selection of cuisine created by their award-winning master chefs, from Thai and Italian to Lebanese. The luxury hotel offers a nightclub, a café and a bar. In addition guests canfind the very best conference facilities and services available. Alternatively guests can simply relax with a host of recreational activities. Car park is available for those arriving by car.The rooms and suites are spacious and very comfortable. Each room comes with an en suite bathroom. All of them are well-equipped as standard.There is a swimming pool and paddling pool in the grounds. Guests can relax in the  hot tub, work out in the gym, or play tennis golf and squash.
        </p>
       <br></br>
          <h2 className="text-1xl font-bold text-gray-900 mb-4"  style={{ fontFamily: "Urbanist" }}>Amenities</h2>
     <p className="text-gray-700 leading-relaxed"  style={{ fontFamily: "Urbanist" }}>
          Pamper yourself with a visit to the spa, which offers massages. You can take advantage of recreational amenities such as a health club, an outdoor pool, and a sauna. Additional amenities at this hotel include complimentary wireless Internet access, concierge services, and gift shops/newsstands.
        </p>
      
       
      </div>

      {/* Check-in and Important Information */}
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-6"  style={{ fontFamily: "Urbanist" }}>
        Checkin and important information
      </h2>

      {/* Content */}
      <div className="space-y-6 text-sm text-gray-600">
        {/* Check-in */}
        <div>
          <p className="font-semibold text-gray-900 mb-1"  style={{ fontFamily: "Urbanist" }}>
            Check-In
          </p>
          <p>Checkin time 2:00 PM – 12:00 PM</p>
          <p>Minimum check-in age: 18</p>
        </div>

        {/* Check-out */}
        <div>
          <p className="font-semibold text-gray-900 mb-1"  style={{ fontFamily: "Urbanist" }}>
            Check-Out
          </p>
          <p>Checkout time 12:00 PM</p>
        </div>
      </div>
    </div>

     <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-6"  style={{ fontFamily: "Urbanist" }} >
        Instructions
      </h2>

      {/* List */}
      <ul className="space-y-4">
        {visibleItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Blue bullet */}
            <span className="mt-1 h-3 w-3 rounded-full border-2 border-blue-600 flex-shrink-0" />
            
            {/* Text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>

      {/* Show more */}
      {instructions.length > 7 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <span>{showAll ? "Show less" : "Show more"}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>

      {/* Reviews Section - Completely redesigned with score-based layout */}
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 mb-4"  style={{ fontFamily: "Urbanist" }}>
        User ratings
      </h2>

      {/* Overall rating */}
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        <span className="text-lg font-bold text-gray-900"  style={{ fontFamily: "Urbanist" }}>8.4</span>
        <span className="text-sm font-semibold text-gray-700"  style={{ fontFamily: "Urbanist" }}>
          Fabulous
        </span>
        <span className="text-sm text-gray-500"  style={{ fontFamily: "Urbanist" }}>
          (1694 reviews)
        </span>
        <a
          href="#"
          className="ml-4 text-sm font-medium text-blue-600 hover:underline"
          style={{ fontFamily: "Urbanist" }}
        >
          See all reviews
        </a>
      </div>

      {/* Rating bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {ratingData.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-800">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {item.value}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-orange-500 rounded-full"
                style={{ width: `${(item.value / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900"  style={{ fontFamily: "Urbanist" }}>
          What guests loved most
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
           style={{ fontFamily: "Urbanist" }}
        >
          See all reviews
        </a>
      </div>

      {/* Reviews */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-sm flex-shrink-0 rounded-lg border border-gray-200 p-4 bg-white"
            >
              {/* User */}
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.country}
                  </p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {review.text}
              </p>

              {/* Visit type */}
              <p className="text-xs text-gray-500 mb-1">
                {review.visit}
              </p>

              {/* Date */}
              <p className="text-[11px] text-gray-400">
                {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* Right arrow (desktop hint like screenshot) */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white shadow">
          <ChevronRight size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6"  style={{ fontFamily: "Urbanist" }}>Frequently Asked Questions</h2>
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

      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
      <div className="w-full max-w-3xl text-left">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900"  style={{ fontFamily: "Urbanist" }}> 
          Looking for specific information?
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-gray-500"  style={{ fontFamily: "Urbanist" }}>
          Search product info, FAQs, reviews
        </p>

        {/* Search box */}
        <div className="relative mt-6">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Type a keyword"
            className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm
            focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Feedback */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-500"  style={{ fontFamily: "Urbanist" }}>Want to suggest something?</span>
          <button className="rounded-md border border-blue-500 px-3 py-1 text-blue-600 hover:bg-blue-50 transition"  style={{ fontFamily: "Urbanist" }}>
            Leave feedback
          </button>
        </div>
      </div>
    </div>

      {/* Newsletter Section */}
      <Newsletter/>

      {/* Footer */}
      <Footer />
    </div>
  )
}
