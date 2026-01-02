import BookingForm from "../components/attractions-booking-form";
import DealsSection from "../components/attractions-deals-section";
import AttractionsHero from "../components/attractions-hero";
import AttractionsSection from "../components/attractions-section";
import { Footer } from "../components/footer";
import Header from "../components/header";
import { Newsletter } from "../components/newsletter";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
           <Header />
           <AttractionsHero /> 
           <BookingForm />
           <AttractionsSection />
      <DealsSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
