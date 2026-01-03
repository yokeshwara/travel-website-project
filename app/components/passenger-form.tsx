"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PenSquare, CheckSquare, ChevronDown, Plus } from "lucide-react"
import SeatSelectionModal from "../components/SeatSelectionModal";

export function PassengerForm() {
  const [expanded, setExpanded] = useState<number>(1)
  const [openSeats, setOpenSeats] = useState(false);


  return (
    <div className="space-y-6">
      {/* Benefits Card */}
      <Card className="p-6 bg-secondary border-none">
        <p className="text-sm font-medium mb-4" style={{ fontFamily: "Urbanist" }}>Log in to your account to unlock extra benefits</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-card rounded">
              <PenSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ fontFamily: "Urbanist" }}>Save on your booking when you</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "Urbanist" }}>pay using Cash + Avios</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-card rounded">
              <CheckSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ fontFamily: "Urbanist" }}>Auto-fill your travel</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "Urbanist" }}>details</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Passenger 1 Form */}
      <Card className="p-6 border-none bg-secondary">
        <h2 className="text-lg font-semibold mb-6" style={{ fontFamily: "Urbanist" }}>Passenger 1 (Adult)</h2>

        {/* Title Selection */}
        <div className="mb-6">
          <Label className="text-sm font-medium mb-3 block">Title</Label>
          <div className="flex gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="title" value="mr" defaultChecked className="w-4 h-4 text-primary" />
              <span className="text-sm" style={{ fontFamily: "Urbanist" }}>Mr</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="title" value="mrs" className="w-4 h-4 text-primary" />
              <span className="text-sm" style={{ fontFamily: "Urbanist" }}>Mrs</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="title" value="ms" className="w-4 h-4 text-primary" />
              <span className="text-sm" style={{ fontFamily: "Urbanist" }}>Ms</span>
            </label>
          </div>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="fullname" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Full Name/Middle Name
            </Label>
            <Input id="fullname" className="bg-card border-border" />
          </div>
          <div>
            <Label htmlFor="lastname" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Last Name
            </Label>
            <Input id="lastname" className="bg-card border-border" />
          </div>
        </div>

        {/* Date of Birth and Nationality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="dob" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Date of birth
            </Label>
            <Input id="dob" placeholder="DD/MM/YYYY" className="bg-card border-border text-muted-foreground" />
          </div>
          <div>
            <Label htmlFor="nationality" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Nationality
            </Label>
            <div className="relative">
              <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm appearance-none" style={{ fontFamily: "Urbanist" }}>
                <option>Select</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Pakistan</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Travel Documents */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-3" style={{ fontFamily: "Urbanist" }}>Travel Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="doctype" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
                Document Type
              </Label>
              <div className="relative">
                <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm appearance-none" style={{ fontFamily: "Urbanist" }}>
                  <option>Select</option>
                  <option>Passport</option>
                  <option>ID Card</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <Label htmlFor="country" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
                Select Country
              </Label>
              <div className="relative">
                <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm appearance-none" style={{ fontFamily: "Urbanist" }}>
                  <option>Select</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Frequent Flyer */}
        <button className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Plus className="h-4 w-4" style={{ fontFamily: "Urbanist" }} />
          Do you have a Frequent Flyer number?
        </button>
      </Card>

      {/* Passenger 2 */}
      <Card className="p-6 border-none bg-secondary">
        <button
          onClick={() => setExpanded(expanded === 2 ? 0 : 2)}
          className="w-full flex items-center justify-between"
        >
          <h2 className="text-lg font-semibold">Passenger 2 (Adult)</h2>
          <ChevronDown className={`h-5 w-5 transition-transform ${expanded === 2 ? "rotate-180" : ""}`} />
        </button>
        {expanded !== 2 && <p className="text-sm text-muted-foreground mt-4 text-center" style={{ fontFamily: "Urbanist" }}>Expand to add details</p>}
      </Card>

      {/* Contact Details */}
      <Card className="p-6 border-none bg-secondary">
        <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: "Urbanist" }}>Contact Details</h2>
        <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: "Urbanist" }}>
          Please provide your contact details so that we can notify you the updates on your flight
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="contact" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Select Primary Contact
            </Label>
            <div className="relative">
              <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm appearance-none">
                <option>Select</option>
                <option>Email</option>
                <option>Phone</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div>
            <Label htmlFor="contactcountry" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Select Country
            </Label>
            <div className="relative">
              <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm appearance-none" style={{ fontFamily: "Urbanist" }}>
                <option>Select</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Phone Number
            </Label>
            <Input id="phone" className="bg-card border-border" />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium mb-2 block" style={{ fontFamily: "Urbanist" }}>
              Email
            </Label>
            <Input id="email" type="email" className="bg-card border-border" />
          </div>
        </div>
      </Card>

      {/* Promotional Section */}
      <Card className="p-0 border-none bg-secondary overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src="/passenger-details-image.png" alt="London" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-2/3 p-6 flex items-center">
            <div className="flex items-center justify-between w-full gap-4">
              <p className="text-sm" style={{ fontFamily: "Urbanist" }}>
                Receive exclusive offers to more amazing destinations like{" "}
                <span className="font-semibold">England</span>
              </p>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Remember Details */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm cursor-pointer" style={{ fontFamily: "Urbanist" }}>
            Remember the above passenger details for future bookings
          </label>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only" style={{ fontFamily: "Urbanist" }}>Info</span>
          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs">
            i
          </div>
        </Button>
      </div>

      {/* Select Seats Button */}
      <div className="flex justify-center pt-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12"  onClick={() => setOpenSeats(true)} style={{ fontFamily: "Urbanist" }}>
          Select Your Seats
        </Button>
      </div>
      <SeatSelectionModal
  open={openSeats}
  onClose={() => setOpenSeats(false)}
    onContinue={() => {
   
    setOpenSeats(true); // next step (seat modal)
  }}
/>

    </div>

    
  )
}
