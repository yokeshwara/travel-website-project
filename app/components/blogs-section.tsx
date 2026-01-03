import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plane, Hotel, Facebook, Twitter, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function BlogsSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/traditional-asian-temple-with-people.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to usecentives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 2,
      image: "/person-standing-on-mountain-top-with-yellow-jacket.jpg",
      title: "Kid-Approved Destinations and Activities",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 3,
      image: "/person-with-arms-raised-on-scenic-mountain-overloo.jpg",
      title: "Exploring Scenic Road Trip Routes",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 4,
      image: "/hiker-with-backpack-overlooking-blue-lake-and-moun.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 5,
      image: "/traditional-asian-temple-interior-with-people.jpg",
      title: "The 2020 Guide for White Men in Tech",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 6,
      image: "/traveler-with-backpack-by-mountain-lake.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 7,
      image: "/person-celebrating-on-mountain-peak-with-cloudy-sk.jpg",
      title: "Eco-Friendly Travel Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 8,
      image: "/traditional-asian-temple-with-tourists.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 9,
      image: "/asian-temple-interior-with-people-walking.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 10,
      image: "/backpacker-overlooking-scenic-blue-mountain-lake.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 11,
      image: "/traditional-temple-with-visitors.jpg",
      title: "Eco-Friendly Travel Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
    {
      id: 12,
      image: "/person-arms-raised-celebrating-on-mountain.jpg",
      title: "Unveiling Off-the-Beaten-Path Destinations",
      description: "How to use centives of what advantages to make the world a more equal place",
      date: "2nd January 2022",
    },
  ]

  const instagramPhotos = [
    "/tropical-beach-palms.png",
    "/ancient-temple.png",
    "/mountain-sunset-vista.png",
    "/tropical-beach-resort.png",
    "/placeholder.svg?height=150&width=150",
    "/placeholder.svg?height=150&width=150",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/person-jumping-celebrating-on-mountain-peak-with-a.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/20"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-2 tracking-wide" style={{ fontFamily: "Urbanist" }}>Travel Mania</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-balance" style={{ fontFamily: "Urbanist" }}>TRAVEL BLOG</h1>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto">
            <div className="w-full md:w-48">
              <select className="w-full border border-gray-300 rounded-md px-4 py-2.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "Urbanist" }}>
                <option>Latest Blog</option>
                <option>Popular Blog</option>
                <option>Trending Blog</option>
              </select>
            </div>
            <div className="flex-1 w-full max-w-2xl flex gap-2">
              <Input type="text" placeholder="Search news..." className="flex-1 border-gray-300 focus:ring-blue-500" />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6" style={{ fontFamily: "Urbanist" }}>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
               <Link key={post.id} href={`/blogs/${post.id}`}>
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2" style={{ fontFamily: "Urbanist" }}>{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ fontFamily: "Urbanist" }}>{post.description}</p>
                  <p className="text-gray-500 text-sm font-medium" style={{ fontFamily: "Urbanist" }}>{post.date}</p>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base" style={{ fontFamily: "Urbanist" }}>Read More</Button>
          </div>
        </div>
      </section>

     
 
    </div>
  )
}
