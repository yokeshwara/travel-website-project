import { Plane, Hotel, Car, MapPin, Mail, Phone, Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-blue-700 via-blue-600 to-teal-400">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/customer-service-representatives-in-office.jpg')",
          }}
        />

        {/* Navigation */}
        {/* <nav className="relative z-10 container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8 text-white text-sm">
              <button className="flex items-center gap-2 hover:opacity-80 transition">
                <Plane className="w-4 h-4" />
                <span className="hidden sm:inline">Find Flight</span>
              </button>
              <button className="flex items-center gap-2 hover:opacity-80 transition">
                <Hotel className="w-4 h-4" />
                <span className="hidden sm:inline">Find Stays</span>
              </button>
              <button className="flex items-center gap-2 hover:opacity-80 transition">
                <Car className="w-4 h-4" />
                <span className="hidden sm:inline">Airport Taxi</span>
              </button>
            </div>

            <div className="absolute left-1/2 top-4 md:top-6 -translate-x-1/2">
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold text-white">TRAVEL</h1>
                <p className="text-xs text-yellow-400 tracking-widest">BOOKING</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/20 text-sm px-3 md:px-4">
                Login
              </Button>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 text-sm px-3 md:px-6">Sign up</Button>
            </div>
          </div>
        </nav> */}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-[calc(100%-80px)] text-center">
          <p className="text-white text-sm md:text-base mt-30 font-semibold">Contact</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            WE ARE ALWAYS OPEN TO TALK
          </h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 md:mb-16 text-gray-800">Contact With Us</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start lg:ml-40">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-xl font-semibold text-[#0B1B3A] mb-3">Get In Touch</h3>

            <p className="text-sm text-gray-500 max-w-sm mb-10 leading-6">
              Please let us know if you have any questions or concerns and we will get back to you
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-7 mb-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0B1B3A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B1B3A]">Email Address</p>
                  <p className="text-sm text-gray-500">marketing@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0B1B3A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B1B3A]">Phone number</p>
                  <p className="text-sm text-gray-500">+34-455-5432-236</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0B1B3A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B1B3A]">Location</p>
                  <p className="text-sm text-gray-500 max-w-xs">2464 Royal Ln. Mesa, New Jersey 45463</p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden max-w-md">
              <img src="/aerosters.png" alt="Travel team" className="w-full object-cover" />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <h3 className="text-xl font-semibold text-[#0B1B3A] mb-8">Send A Message</h3>

            <form className="space-y-6 max-w-md">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3A] mb-2">Full Name</label>
                <Input placeholder="Full Name" className="h-12" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3A] mb-2">Phone</label>
                <Input placeholder="Enter your phone" className="h-12" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3A] mb-2">Email</label>
                <Input placeholder="Enter your email" className="h-12" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#0B1B3A] mb-2">Message</label>
                <Textarea placeholder="Type message..." rows={2} className="resize-none" />
              </div>

              {/* BUTTON */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-sm">Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Subscribe for</h3>
              <p className="text-xl md:text-2xl">Latest Newsletter</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input type="email" placeholder="Your Email Address" className="bg-white w-full sm:w-80 px-6 py-6" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
   
    </div>
  )
}
