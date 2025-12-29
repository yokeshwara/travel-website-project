

import Image from "next/image"
import Newsletter from "../components/newsletter"
import Header from "../components/header"
import { Footer } from "../components/footer"
import { BookingCard } from "../components/visa-booking-card"

export default function Visa() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Blurred like the original */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/visa2.png"
            alt="City Background"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <Header />

        {/* Content Container */}
        <div className="relative z-10 w-full flex justify-center mt-12">
          <BookingCard />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter/>
      <Footer />

      {/* Bottom accent bar */}
      <div className="h-2 bg-blue-600 w-full" />
    </main>
  )
}
