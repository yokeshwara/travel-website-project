import Header from "@/app/components/header"
import HeroSection from "@/app/components/hero-section"
import PlanTrip from "@/app/components/plan-trip"
import PopularHotels from "@/app/components/popular-hotels"
import PopularDestinations from "@/app/components/popular-destinations"
import Statistics from "@/app/components/statistics"
import FlightsHotels from "@/app/components/flights-hotels"
import DestinationGrid from "@/app/components/destination-grid"
import Newsletter from "../components/newsletter"
import { Footer } from "../components/footer"
import StaysHeader from "../components/stays-header"
import StaysHeroSection from "../components/stays-hero-section"
import TrendingDestinations from "../components/trending-destinations"
import StaysPopularHotels from "../components/stays-popular-hotels"
import DealsAndDiscounts from "../components/deals-discounts"
import GreeceBanner from "../components/greece-banner"
import DubaiHotels from "../components/dubai-hotels"
import TravelBlog from "../components/travel-blog"


export default function FindStays() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StaysHeroSection />
      <TrendingDestinations />
      <StaysPopularHotels />
      <DealsAndDiscounts />
      <GreeceBanner />
      <DubaiHotels />
      <TravelBlog />
      <Newsletter />
      <Footer />
    </div>
  )
}
