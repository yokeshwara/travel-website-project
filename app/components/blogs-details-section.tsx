import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Building2, Car, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NewHeader from "./new-header"

export default function BlogsDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
    
      <NewHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-3xl py-8 md:py-12 lg:py-16">
        {/* Article Title */}
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4 text-balance">
          Checking In: Exploring the Intersection of Hotels and Travel
        </h1>

        <p className="text-gray-500 text-sm mb-8">April 24, 2024</p>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="/tropical-resort-with-colorful-buildings-and-blue-p.jpg"
            alt="Tropical resort with pool and colorful buildings"
            className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome, fellow wanderers, to the nexus of comfort, adventure, and hospitality — the world of hotels and
            travel. In this blog, we embark on a journey to unravel the mysteries, unveil the luxuries, and celebrate
            the diversity found within the realm of accommodation. From cozy bed and breakfasts nestled in quaint towns
            to towering skyscrapers adorned with five-star amenities, let's delve into what makes hotels an integral
            part of the travel experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
            The Art of Hospitality: Beyond a Place to Rest
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At its core, a hotel is more than just a place to lay your head at night. It's a sanctuary, a refuge from
            the chaos of the world, where weary travelers find solace and rejuvenation. The art of hospitality lies in
            the intricate dance between comfort and convenience, where every detail, from the plush pillows to the
            personalized service, is meticulously crafted to cater to the needs of guests.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
            The Rise of Sustainable Tourism: Eco-Friendly Stays
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            In an age where sustainability is paramount, hotels are leading the charge towards a greener, more
            eco-conscious future. From implementing energy-saving initiatives to reducing plastic waste and supporting
            local communities, many hotels are embracing sustainability as a core value. By choosing eco-friendly
            accommodation, travelers can minimize their environmental footprint while experiencing the beauty of the
            world in a responsible and ethical manner.
          </p>

          {/* Second Image */}
          <div className="rounded-2xl overflow-hidden my-8">
            <img
              src="/modern-resort-pool-area-with-loungers-and-tropical.jpg"
              alt="Modern resort pool area"
              className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
            Embracing the Journey: Making Memories That Last
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ultimately, the true magic of hotels and travel lies not in the destination itself, but in the journey — the
            people we meet, the experiences we share, and the memories we create along the way. Whether you're embarking
            on a grand adventure or seeking a quiet retreat from the hustle and bustle of everyday life, hotels are more
            than just places to stay — they're portals to new worlds, gateways to discovery, and the starting point for
            countless adventures yet to unfold.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            So dear travelers, as you embark on your next journey, may you find comfort in the embrace of a welcoming
            hotel, inspiration in the beauty of new surroundings, and joy in the moments that await. Until next time,
            happy travels!
          </p>
        </article>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Comments Section */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-600 mb-4">Join the conversation</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
            <textarea
              className="flex-1 border border-gray-300 rounded-lg p-4 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Comments"
            />
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
     

   
    </div>
  )
}
