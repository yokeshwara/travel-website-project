

import { WhyChooseUs } from "@/app/components/why-choose-us"
import { BookAdventure } from "@/app/components/book-adventure"
import { GatewaySection } from "@/app/components/gateway-section"
import { TeamSection } from "@/app/components/team-section"
import { TestimonialSection } from "@/app/components/testimonial-section"
import { PartnersSection } from "@/app/components/partners-section"


import Header from "../components/header"


import { HeroSection } from "../components/hero"

import { Footer } from "../components/footer"
import { Newsletter } from "../components/newsletter"


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <BookAdventure />
      <GatewaySection />
      <TeamSection />
      <TestimonialSection />
      <PartnersSection />
      <Newsletter />
      <Footer />
    </div>
  )
}
