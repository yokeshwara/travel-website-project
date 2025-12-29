"use client"


import { useRouter } from "next/navigation"


export default function VisaHeroSection2() {
  const router = useRouter()


  const handleSearch = () => {
    router.push("/searchresults")
  }

  return (
    <section className="relative min-h-screen pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/visa2.png"
          alt="Visa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Card */}
    
    </section>
  )
}
