import { Footer } from "../components/footer";
import Header from "../components/header";
import { Newsletter } from "../components/newsletter";

import { CalendarPicker } from "../components/visa-calendar-picker";


export default function Visa2() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Calendar */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="visa2.png"
            alt="City background"
            className="h-full w-full object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <Header />

        {/* Calendar Content Overlay */}
        <div className="relative z-10 flex min-h-[70vh] items-end justify-center pb-0 pt-32">
          <CalendarPicker />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
