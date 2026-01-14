"use client";

import { Search, ChevronDown, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useRouter, useSearchParams } from "next/navigation"

import { Footer } from "../components/footer";
import  HeroSection  from "../components/hero-section";
import { Newsletter } from "./newsletter";


export default function FlightClient() {

      const params = useSearchParams();
      const router = useRouter()

  const from = params.get("from");
  const to = params.get("to");
  const date = params.get("date");
  const flightResults = Array(6).fill({
    airline: "Emirates",
    route: "Fly to Kos with Emirates",
    segments: [
      { departure: "07:30", arrival: "09:20", location1: `${from}`, location2: `${to}`, duration: "1hr 40m" },
      { departure: "09:30", arrival: "15:30", location1: `${from}`, location2: `${to}`, duration: "2hr 42m" },
    ],
    price: "$980",

    
  })

      const bookNow = () => {
        router.push("/PassengerDetails") // change route as needed
      }

  return (
    <div className="min-h-screen bg-gray-50 lg:mt-50">
        {/* <HeroSection/> */}
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Search className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <span>{from}</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{to}</span>
              </div>
              <div className="text-sm opacity-90" style={{ fontFamily: "Urbanist" }}>1 adult | economy</div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 text-sm">
            <button className="flex items-center gap-1 hover:opacity-80" style={{ fontFamily: "Urbanist" }}>
              <ChevronLeft className="h-4 w-4" />
              <span>Thu, 30 May</span>
            </button>
            
            <ChevronRight className="h-4 w-4" />
            <button className="flex items-center gap-1 hover:opacity-80 ml-2 md:ml-4" style={{ fontFamily: "Urbanist" }}>
              <ChevronLeft className="h-4 w-4" />
              <span>Sat, 15 Jun</span>
            </button>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
        {/* Get Price Alerts & Results Count */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <button className="text-sm hover:underline" style={{ fontFamily: "Urbanist" }}>Get Price Alerts</button>
            <span className="text-sm font-medium" style={{ fontFamily: "Urbanist" }}>236 Results</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm" style={{ fontFamily: "Urbanist" }}>Sort by</span>
            <Select defaultValue="best">
              <SelectTrigger className="w-[140px] bg-white">
                <SelectValue placeholder="Best" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="best">Best</SelectItem>
                <SelectItem value="cheapest">Cheapest</SelectItem>
                <SelectItem value="fastest">Fastest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg p-4 space-y-3">
              <FilterSection title="Stops" />
              <FilterSection title="Departure times" />
              <FilterSection title="Journey duration" />
              <div className="pt-2">
                <div className="text-sm font-medium mb-3" style={{ fontFamily: "Urbanist" }}>2.5 hours - 30.5 hours</div>
                <Slider defaultValue={[25, 75]} max={100} step={1} className="mb-2" />
              </div>
              <FilterSection title="Airlines" />
              <FilterSection title="Airports" />
              <FilterSection title="Flight emissions" />
            </div>
          </aside>

          {/* Flight Results */}
          <div className="lg:col-span-3 space-y-4">
            {flightResults.map((flight, idx) => (
              <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 w-full">
                    {/* Airline Logo */}
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                    </div>

                    {/* Flight Details */}
                    <div className="flex-1 space-y-4 w-full">
                      <div className="text-sm font-medium" style={{ fontFamily: "Urbanist" }}>{flight.route}</div>

                      {/* First Segment */}
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="text-left min-w-[60px]">
                          <div className="text-xl font-bold" style={{ fontFamily: "Urbanist" }}>{flight.segments[0].departure}</div>
                          <div className="text-xs text-gray-500" style={{ fontFamily: "Urbanist" }}>{flight.segments[0].location1}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center min-w-0">
                          <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "Urbanist" }}>{flight.segments[0].duration}</div>
                          <div className="w-full h-px bg-gray-300 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="text-right min-w-[60px]">
                          <div className="text-xl font-bold" style={{ fontFamily: "Urbanist" }}>{flight.segments[0].arrival}</div>
                          <div className="text-xs text-gray-500" style={{ fontFamily: "Urbanist" }}>{flight.segments[0].location2}</div>
                        </div>
                      </div>

                      {/* Second Segment */}
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="text-left min-w-[60px]">
                          <div className="text-xl font-bold" style={{ fontFamily: "Urbanist" }}>{flight.segments[1].departure}</div>
                          <div className="text-xs text-gray-500">{flight.segments[1].location1}</div>
                        </div>
                        <div className="flex-1 flex flex-col items-center min-w-0">
                          <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "Urbanist" }}>{flight.segments[1].duration}</div>
                          <div className="w-full h-px bg-gray-300 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="text-right min-w-[60px]">
                          <div className="text-xl font-bold" style={{ fontFamily: "Urbanist" }}>{flight.segments[1].arrival}</div>
                          <div className="text-xs text-gray-500" style={{ fontFamily: "Urbanist" }}>{flight.segments[1].location2}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Book Button */}
                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 w-full md:w-auto md:min-w-[120px]">
                    <div className="text-2xl font-bold" style={{ fontFamily: "Urbanist" }}>{flight.price}</div>
                    <Button  onClick={bookNow} className="bg-blue-600 hover:bg-blue-700 text-white px-6" style={{ fontFamily: "Urbanist" }}>Book Now</Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 py-8">
              <button className="p-2 hover:bg-gray-200 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="px-4 py-2 hover:bg-gray-200 rounded">1</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">2</button>
              <button className="px-4 py-2 hover:bg-gray-200 rounded">3</button>
              <button className="px-4 py-2 hover:bg-gray-200 rounded">4</button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 hover:bg-gray-200 rounded">24</button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
      <Newsletter />
      </div>

      {/* Footer */}
     
     <Footer />
    </div>
  )
}

function FilterSection({ title }: { title: string }) {
  return (
    <button className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-blue-600">
      <span>{title}</span>
      <ChevronDown className="h-4 w-4" />
    </button>
  )
}
