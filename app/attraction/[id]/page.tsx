"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Share2, ChevronDown, ChevronUp, Languages, Search, Info, Check } from "lucide-react"
import NewHeader from "@/app/components/new-header"

import { Footer } from "@/app/components/footer"
import { useRouter } from "next/navigation"
import { Newsletter } from "@/app/components/newsletter"

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

    const languages = ["Arabic", "English (UK)"];

      const ratingData = [
  { label: "Good value", value: 4.4 },
  { label: "Facilities", value: 4.2 },
  { label: "Quality of service", value: 4.4 },
  { label: "Ease of access", value: 4.5 },
  ]

       const router = useRouter();
          const clickNext = () => {
          router.push("/attraction-guestdetails") // change route as needed
        }
  

  return (
    <div className="w-full">
        <NewHeader/>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{attraction.title}</h1>
            <p className="text-gray-600 text-sm mb-3">{attraction.subtitle}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="font-semibold">{attraction.rating}</span>
                <span className="text-gray-600 text-sm">({attraction.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 md:whitespace-nowrap">
            <Share2 size={18} />
            Share this attraction
          </button>
        </div>

        {/* Image Gallery and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Content - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image with Thumbnail Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <img
              src="/desert1.png"
              alt="Hotel corridor"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2  md:col-span-2">
            <img src="/desert2.png" alt="Bedroom" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/desert3.png" alt="Lobby" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/desert4.png" alt="Lounge" className="w-full h-32 md:h-44 object-cover rounded-lg" />
            <img src="/desert5.png" alt="Dining" className="w-full h-32 md:h-44 object-cover rounded-lg" />
          </div>
        </div>
      </div>

            {/* Free Cancellation Badge */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-green-600 font-bold text-xl">✓</div>
                <div>
                  <p className="font-semibold text-green-900">Free cancellation available</p>
                  <p className="text-sm text-green-800">Service animals welcome</p>
                </div>
              </div>
            </div>

            {/* Description and Details */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                This experience will give you the chance to go on a desert safari and enjoy unforgettable and natural
                authentic and traditional entertainment along with the opportunity to enjoy a traditional barbecue
                dinner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This experience will give you the chance to go on a desert safari and enjoy unforgettable and natural
                authentic and traditional entertainment along with the opportunity to enjoy the chance to enjoy a
                traditional barbecue dinner and will have the opportunity to enjoy the chance to enjoy a traditional
                entertainment show as you enjoy as you enjoy the chance to enjoy a traditional barbecue dinner
              </p>
            </div>

            {/* What's Included / Not Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">What's included</h3>
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
                <h3 className="font-bold text-lg mb-4">What's not included</h3>
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


            <div className="bg-blue-50  p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Accessibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accessible to pushchairs/prams</li>
                <li>• Service animals welcome</li>
                <li>• Infant seats available</li>
            </ul>
            </div>

            {/* Health & Safety */}
            <div className="bg-blue-50  p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Health & safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Not recommended for pregnant women</li>
                <li>• Suitable for all fitness levels</li>
                <li>• Face masks provided</li>
                <li>• Temperature checks at entry</li>
              </ul>
            </div>

            {/* Restrictions */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Restrictions</h3>
              <p className="text-gray-700">Please only interact in a fun environment as instructed during Ramadan.</p>
            </div>

            {/* Languages */}
            
             <div className="mb-8">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Languages spoken by guide
      </h3>

      {/* Language pills */}
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div
            key={lang}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2
                       text-sm text-gray-800 bg-white"
          >
            <Languages size={16} className="text-gray-600" />
            <span>{lang}</span>
          </div>
        ))}
      </div>
    </div>

     <div className="w-full max-w-3xl lg:pb-10">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Additional information
      </h3>

      {/* Content */}
      <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
        <p>This tour is also offered in Hindu and Urdu languages.</p>
        <p>Please bring your ticket with you to the attraction.</p>
        <p>
          Be aware that operators may cancel for unforeseen reasons.
        </p>
        <p>
          You need to be 18 years or older to book or be accompanied by an adult.
        </p>
        <p>Operated by Dubai Desert Ride</p>
      </div>
    </div>

            {/* Location Map */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <div className="relative w-full h-80 rounded-lg overflow-hidden bg-gray-200 mb-4">
                <Image
                  src="/map.png"
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
                  <h4 className="font-semibold mb-2">Pick-up point</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Please note that pickup will run until all returns are available from accommodation and hotels in
                    Dubai and these shall be confirmed with the client.
                  </p>
                  <button className="text-blue-600 hover:underline text-sm font-semibold">Learn more</button>
                </div>
              </div>
            </div>

            {/* User Reviews */}
             <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
               {/* Header */}
               <h2 className="text-xl font-bold text-gray-900 mb-4">
                 User ratings
               </h2>
         
               {/* Overall rating */}
               <div className="flex items-center gap-3 mb-6">
                 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                 <span className="text-lg font-bold text-gray-900">8.4</span>
                 <span className="text-sm font-semibold text-gray-700">
                   Fabulous
                 </span>
                 <span className="text-sm text-gray-500">
                   (1694 reviews)
                 </span>
                 <a
                   href="#"
                   className="ml-4 text-sm font-medium text-blue-600 hover:underline"
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
         

            {/* What Guests Loved Most */}
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6">What guests loved most</h3>
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
                        <p className="font-semibold text-sm">{review.name}</p>
                        <p className="text-xs text-gray-600">Based on last 50+ bookings</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6">Frequently asked questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp size={20} className="text-gray-600" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-600" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Form */}
           <div className="lg:col-span-1">
      <div className="top-24 rounded-xl border border-gray-200 bg-white p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-4">Tickets and prices</h3>

        {/* Date section */}
        <p className="text-sm font-medium text-gray-900 mb-2">
          Search ticket availability by date
        </p>
        <button className="text-sm text-blue-600 mb-4">Show more dates</button>

        {/* Date cards */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto">
          {[
            { day: "Sat", date: "07", label: "Today", active: false },
            { day: "Sun", date: "08", label: "Tomorrow", active: true },
            { day: "Mon", date: "09", label: "", active: false },
            { day: "Tue", date: "10", label: "", active: false },
          ].map((d) => (
            <div
              key={d.date}
              className={`min-w-[72px] rounded-lg border text-center px-3 py-2 text-sm
                ${
                  d.active
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-200 text-gray-600"
                }`}
            >
              <div className="text-xs">{d.day}</div>
              <div className="text-lg font-semibold">{d.date}</div>
              <div className="text-xs">Nov</div>
              {d.label && (
                <div className="mt-1 rounded bg-blue-600 text-white text-[11px]">
                  {d.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Time */}
        <p className="text-sm font-medium mb-2">Select time</p>
        <button className="mb-6 rounded-full border border-blue-600 px-6 py-2 text-sm font-medium text-blue-600">
          14:00
        </button>

        {/* Booking card */}
        <div className="rounded-xl border-2 border-blue-600 p-4 space-y-4">
          <p className="text-sm font-semibold">
            Dubai Desert Safari, Dune Bashing, Camel Ride, Sandboarding & BBQ
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Info size={16} />
            Non-refundable
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={16} />
            Pickup included
          </div>

          {/* Language */}
          <div>
            <p className="text-sm font-medium mb-1">Language options</p>
            <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option>English - Tour guide</option>
            </select>
          </div>

          {/* Tickets */}
          <div>
            <p className="text-sm font-medium mb-3">How many tickets?</p>

            {/* Adults */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-sm font-medium">Adults</p>
                <p className="text-xs text-gray-500">Aged 11 to 65</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setAdults(adults - 1)}>-</button>
                <span className="font-medium">{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Children</p>
                <p className="text-xs text-gray-500">Aged 0 to 11</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setChildren(children - 1)}>-</button>
                <span className="font-medium">{children}</span>
                <button onClick={() => setChildren(children + 1)}>+</button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-lg font-semibold">US$145</p>
            <p className="text-xs text-gray-500">
              Includes taxes and charges
            </p>
          </div>

          {/* CTA */}
          <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  
        </div>
      </div>

           <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200">
            <div className="w-full max-w-3xl text-left">
              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Looking for specific information?
              </h2>
      
              {/* Subtitle */}
              <p className="mt-1 text-sm text-gray-500">
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
                <span className="text-gray-500">Want to suggest something?</span>
                <button className="rounded-md border border-blue-500 px-3 py-1 text-blue-600 hover:bg-blue-50 transition">
                  Leave feedback
                </button>
              </div>
            </div>
          </div>
      <Newsletter/>
      <Footer/>
    </div>
    
  )
}
