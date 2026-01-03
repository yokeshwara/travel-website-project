
import { Suspense } from "react"
import NewHeader from "../components/new-header"

import { Footer } from "../components/footer"
import VisaScreenHero1 from "../components/visa-screen-hero1"
import VisaOptions from "../components/visa-options"
import VisaDetails from "../components/visa-details"
import Faq from "../components/visa-faq"
import SearchSection from "../components/visa-search-section"
import { Newsletter } from "../components/newsletter"

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <NewHeader />
      <main>
        <VisaScreenHero1 />
        <Suspense fallback={null}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <VisaOptions />
            <VisaDetails />
            <Faq />
            <SearchSection />
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <p className="text-xl font-medium"  style={{ fontFamily: "Urbanist" }}>Want to suggest something?</p>
              <button className="px-8 py-2 border-2 border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 transition-colors"  style={{ fontFamily: "Urbanist" }}>
                Leave feedback
              </button>
            </div>
           
          </div>
           <Newsletter />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
