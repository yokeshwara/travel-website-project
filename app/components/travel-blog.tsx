"use client";

import { useRouter } from "next/navigation";


const posts = [
  {
    id: 1,
    title: "Eco-Friendly Travel Destinations",
    excerpt: "How to use centuries of unfair advantage to make the world a more equal place",
    image: "/blog1.png",
    date: "2nd January 2025",
  },
  {
    id: 2,
    title: "Unveiling Off-the-Beaten-Path Destinations",
    excerpt: "How to use centuries of unfair advantage to make the world a more equal place",
    image: "/blog2.png",
    date: "2nd January 2025",
  },
  {
    id: 3,
    title: "Unveiling Off-the-Beaten-Path Destinations",
    excerpt: "How to use centuries of unfair advantage to make the world a more equal place",
    image: "/blog2.png",
    date: "2nd January 2025",
  },
]

export default function TravelBlog() {
   const router = useRouter();
  return (
    <section className="py-12 sm:py-16 lg:py-2 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 sm:mb-16" style={{ fontFamily: "Urbanist" }}>
          Our Latest Travel Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
              style={{ fontFamily: "Urbanist" }}
            >
              <div onClick={() => router.push(`/blogs/1`)} className="relative h-48 sm:h-56 overflow-hidden cursor-pointer">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6" style={{ fontFamily: "Urbanist" }}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs sm:text-sm font-bold text-gray-700">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
