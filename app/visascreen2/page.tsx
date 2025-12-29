import { Footer } from "react-day-picker";
import NewHeader from "../components/new-header";
import Newsletter from "../components/newsletter";
import { VisaHeroSection3 } from "../components/visa-hero-section3";


export default function TravelPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewHeader />
      <VisaHeroSection3 />
      <Newsletter />
      <Footer />
    </main>
  )
}
