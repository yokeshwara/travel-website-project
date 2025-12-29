import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function VisaHeroSection3() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-medium text-gray-700 mb-6">AIRPORT TO AIRPORT TICKETS ONLY</h1>

        <div className="mb-8">
          <h2 className="text-[#2b6be2] font-bold text-lg mb-1">EXIT FROM DUBAI</h2>
          <p className="font-bold text-gray-800 text-sm">Holders of Employment Visa Only</p>
        </div>

        <ul className="space-y-4 text-sm text-gray-600 mb-10">
          <li className="flex gap-3 bg-blue-50/50 p-3 rounded-sm">
            <span className="text-gray-400 mt-1.5">•</span>
            <p>
              For Airport to Airport Visa Change,{" "}
              <span className="font-bold text-gray-800">you need to have your Employment Visa on-hand</span> and a
              round-trip confirmed air ticket back to Dubai.
            </p>
          </li>
          <li className="flex gap-3 p-3">
            <span className="text-gray-400 mt-1.5">•</span>
            <p>
              You don't need to leave the airport at your destination (you are a Transit Passenger, no passing through
              Immigration/Passport control) as you only have to spend a few hours until your return flight back to
              Dubai, normally within a couple of hours or within the same day.
            </p>
          </li>
          <li className="flex gap-3 bg-blue-50/50 p-3 rounded-sm">
            <span className="text-gray-400 mt-1.5">•</span>
            <p>
              Below are the Most Popular Destination for an Airport to Airport Visa Run from Dubai because of cheap air
              fare, flexible flight schedules, and plenty of seats availability:
            </p>
          </li>
          <li className="flex gap-3 p-3">
            <span className="text-gray-400 mt-1.5">•</span>
            <p>Airport to Airport Exit to Muscat, Oman</p>
          </li>
          <li className="flex gap-3 bg-blue-50/50 p-3 rounded-sm">
            <span className="text-gray-400 mt-1.5">•</span>
            <p>Airport to Airport Exit to Manama, Bahrain</p>
          </li>
        </ul>

        <p className="text-sm text-gray-600 mb-8 italic">
          Let us know your preferred travel date and we will provide you with best price for your round trip air ticket.
        </p>

        <hr className="border-gray-200 mb-12" />

        <div id="application-form">
          <h2 className="text-2xl font-medium text-gray-700 mb-8">APPLICATION FORM</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Name</label>
                <Input placeholder="Full Name" className="border-gray-300 h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Email</label>
                <Input type="email" placeholder="Valid Email Address" className="border-gray-300 h-11" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Nationality</label>
                <Select>
                  <SelectTrigger className="border-gray-300 h-11 text-gray-400">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Mobile No</label>
                <Input placeholder="Contact Number" className="border-gray-300 h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Travel Date</label>
                <div className="relative">
                  <Input type="text" placeholder="mm/dd/yy" className="border-gray-300 h-11 pr-10" />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Message / Additional Request</label>
              <Textarea placeholder="" className="border-gray-300 min-h-[180px] resize-none" />
            </div>

            <p className="text-xs text-gray-500 italic">
              * Please review your application and ensure that all the required fields are filled up.
            </p>

            {/* reCAPTCHA Mockup */}
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-sm flex items-center justify-between max-w-[300px]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-sm bg-white" />
                <span className="text-sm text-gray-700">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/recaptcha-logo.png" alt="recaptcha" className="w-8 h-8 opacity-60" />
                <div className="text-[8px] text-gray-400 leading-none mt-0.5">reCAPTCHA</div>
                <div className="text-[6px] text-gray-400 leading-none">Privacy - Terms</div>
              </div>
            </div>

            <Button className="bg-[#2b6be2] hover:bg-blue-700 text-white font-bold px-12 h-11 rounded-md">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 p-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <img src="/profile-image.png" alt="Traveler" className="w-full h-full object-cover" />
          </div>
          <div className="px-4 pb-6 space-y-6">
            <h3 className="text-[#f54236] font-bold text-center text-sm tracking-wide">
              AIRPORT TO AIRPORT TICKETS ONLY
            </h3>

            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-gray-600">STARTING RATE</span>
              <div className="bg-[#1a1a1a] text-white px-4 py-2 font-bold text-xl rounded-sm">AED 989</div>
            </div>

            <Button className="w-full bg-[#2b6be2] hover:bg-blue-700 text-white font-bold h-11 rounded-md uppercase text-xs tracking-wider">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="px-2">
          <h4 className="text-gray-700 font-bold mb-4">Need South Travels Assistance?</h4>
          <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
            <p>
              Start Your Journey With Our Professional Travel Agency. Explore Incredible Destinations And Create Lasting
              Memories With Our Personalised Travel Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
