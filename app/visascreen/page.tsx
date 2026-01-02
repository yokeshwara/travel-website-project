

import { Footer } from "../components/footer"
import Header from "../components/header"
import { Newsletter } from "../components/newsletter"

import TransportSelection from "../components/transport-selection"

import VisaHeroSection from "../components/visa-hero-section"

export const metadata = {
  title: "Travel - Book Your Journey",
  description: "Book your travel safely and responsibly with our booking platform",
}

export default function Visascreen() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <VisaHeroSection />
      <TransportSelection />
      <Newsletter />
      <Footer />
    </div>
  )
}
