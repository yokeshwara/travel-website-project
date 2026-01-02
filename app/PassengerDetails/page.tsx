
import { Footer } from "../components/footer"
import { Newsletter } from "../components/newsletter"

import  {PassengerForm}  from "../components/passenger-form"
import { TripSummary } from "../components/trip-summary"


export default function PassengerDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">Passenger Details</h1>
            <p className="text-sm text-muted-foreground">
              Please enter names as they appear on passport or travel documents. Tips on adding passenger name
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <PassengerForm />
            </div>
            <div className="lg:col-span-1">
              <TripSummary />
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}
