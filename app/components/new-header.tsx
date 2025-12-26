import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Building2, Car, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewHeader() {
  return (
    <div>
      {/* Navigation Header */}
      <header className="bg-[#3B82F6] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              <a href="/" className="flex items-center gap-2 hover:text-white/90 transition">
                <Plane className="w-4 h-4" />
                Find Flight
              </a>
              <a href="/find-stays" className="flex items-center gap-2 hover:text-white/90 transition">
                <Building2 className="w-4 h-4" />
                Find Stays
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white/90 transition">
                <Car className="w-4 h-4" />
                Airport Taxi
              </a>
              <a href="/attractions" className="flex items-center gap-2 hover:text-white/90 transition">
                <MapPin className="w-4 h-4" />
                Attractions
              </a> 
            </nav>

            {/* Center Logo */}
             <Link href="/" className="flex items-center lg:mr-90">
                          <Image
                            src="/travel-logo.png"
                            alt="Travel Mania"
                            width={160}
                            height={40}
                            className="object-contain"
                          />
                        </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="text-sm hover:text-white/90 transition hidden sm:block">Login</button>
              <Button className="bg-white text-[#3B82F6] hover:bg-white/90 text-sm px-4 py-2 h-auto rounded-md">
                Sign up
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="lg:hidden flex items-center justify-between pb-4 text-xs border-t border-white/20 pt-4">
            <a href="/" className="flex flex-col items-center gap-1">
              <Plane className="w-4 h-4" />
              <span>Flight</span>
            </a>
            <a href="/find-stays" className="flex flex-col items-center gap-1">
              <Building2 className="w-4 h-4" />
              <span>Stays</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1">
              <Car className="w-4 h-4" />
              <span>Taxi</span>
            </a>
            <a href="/find-stays" className="flex flex-col items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Stays</span>
            </a>
          </nav>
        </div>
      </header>

    
   

   
    </div>
  )
}
