"use client"

import Newsletter from "../components/newsletter"
import { Footer } from "../components/footer"
import StaysHeader from "../components/stays-header"
import StaysHeroSection from "../components/stays-hero-section"
import FilterSidebar from "../components/filter-sidebar"
import HotelCard from "../components/hotel-card"
import HotelListings from "../components/hotel-listings"



export default function FindStays() {
  return (
    <div className="min-h-screen bg-background">
      {/* <FilterSidebar/> */}
      <StaysHeader />
      <StaysHeroSection />
      <HotelListings/>
      
      <Newsletter />
      <Footer />
    </div>
  )
}
