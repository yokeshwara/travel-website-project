"use client";
import { Button } from "@/components/ui/button"
import { Router, Send } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FlightsHotels() {
    const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
   const router = useRouter();
    const [dateValue, setDateValue] = useState("07 June 22 - 18 June 22");
    const [from, setFrom] = useState("Dubai");
    const [to, setTo] = useState("England");
      const [travelClass, setTravelClass] = useState("Economy");
    const handleSearch = () => {
    router.push(
      `/flights?from=${from}&to=${to}&date=${dateValue}&adults=${adults}&children=${children}&class=${travelClass}`
    );

    
  };

    
        const searchHotels = () => {
        router.push("/searchresults") // change route as needed
      }
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:ml-30 lg:w-315">

          {/* Flights */}
          <div className="relative overflow-hidden rounded-2xl min-h-[400px] group cursor-pointer">
            <img
              src="/plane-image.png"
              alt="Flights"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-3" style={{ fontFamily: "Urbanist" }}>
                Flights
              </h3>

              <p className="max-w-md mb-6 text-white/90" style={{ fontFamily: "Urbanist" }}>
                Search Flights & Places Hire to our most popular destinations
              </p>

              <Button onClick={handleSearch} className="flex items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3">
                <Send size={16} />
                Show Flights
              </Button>
            </div>
          </div>

          {/* Hotels */}
          <div className="relative overflow-hidden rounded-2xl min-h-[400px] group cursor-pointer">
            <img
              src="/nature-image.jpg"
              alt="Hotels"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-3" style={{ fontFamily: "Urbanist" }}>
                Hotels
              </h3>

              <p className="max-w-md mb-6 text-white/90" style={{ fontFamily: "Urbanist" }}>
                Search Hotels & Places Hire to our most popular destinations
              </p>

              <Button  onClick={searchHotels}  className="flex items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3" style={{ fontFamily: "Urbanist" }}>
                <Send size={16} />
                Show Hotels
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
