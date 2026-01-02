import BookingForm from "../components/attractions-booking-form"
import ExploreInterests from "../components/attractions-explore-interests"
import FeaturedDestinations from "../components/attractions-featured-destinations"
import AttractionsHero from "../components/attractions-hero"
import PopularDestinations from "../components/attractions-popular-destinations"
import RecommendedDestinations from "../components/attractions-recommended-destinations"
import Services from "../components/attractions-services"
import SignUpSection from "../components/attractions-signup"
import { Footer } from "../components/footer"
import Header from "../components/header"
import { Newsletter } from "../components/newsletter"

import TravelBlog from "../components/travel-blog"

export const metadata = {
  title: "Travel - Capture Wanderlust",
  description: "Explore destinations and book amazing travel experiences",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AttractionsHero /> 
      <BookingForm />
      <PopularDestinations />
      <SignUpSection />
      <ExploreInterests />
      <FeaturedDestinations />
      <Services />
      <RecommendedDestinations />
      <TravelBlog />    
       <Newsletter />
      <Footer /> 
    </main>
  )
}
