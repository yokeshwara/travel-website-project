import Header from "@/app/components/header"
import HeroSection from "@/app/components/hero-section"
import PlanTrip from "@/app/components/plan-trip"
import PopularHotels from "@/app/components/popular-hotels"
import PopularDestinations from "@/app/components/popular-destinations"
import Statistics from "@/app/components/statistics"
import FlightsHotels from "@/app/components/flights-hotels"

import { Footer } from "./components/footer"
import { Newsletter } from "./components/newsletter"
import DestinationGrid from "./components/destination-grid"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PlanTrip />
      <PopularHotels />
      <PopularDestinations />
      <Statistics />
      <FlightsHotels />
      <DestinationGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}
