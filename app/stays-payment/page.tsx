"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Plane, Building, Car, Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import { Footer } from "../components/footer"
import Newsletter from "../components/newsletter"
import NewHeader from "../components/new-header"
import Image from "next/image"
import { CancelHotelModal } from "../components/cancel-hotel-modal"


export default function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    nameOnCard: "",
    email: "",
    country: "",
    postalCode: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    agreeToTerms: false,
    newsletterEmail: "",
  })

  const paymentMethods = [
    {
      id: "amex",
      name: "American Express",
      logo: "payment1.png",
    },
    {
      id: "diners",
      name: "Diners Club",
      logo: "payment2.png",
    },
    {
      id: "discover",
      name: "Discover",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg",
    },
    { id: "jcb", name: "JCB", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" },
    { id: "maestro", name: "Maestro", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" },
    {
      id: "mastercard",
      name: "Mastercard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
    },
    { id: "uatp", name: "UATP", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" },
    { id: "visa", name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  
   const back = () => {
    setSelectedPaymentMethod("")
  }
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
       <NewHeader/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment Form - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card Currency Info */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">Pay in your card currency</h2>
              <p className="text-sm text-slate-600">
                As a Visa or Mastercard credit cardholder, you can pay in the currency of the country where your card
                was issued.
              </p>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Select your preferred payment method</h2>

              {/* Debit/Credit Cards */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-700 mb-3">Debit / Credit cards</h3>
               <div className="flex flex-wrap gap-2">
  {paymentMethods.map((method) => (
    <button
      key={method.id}
      onClick={() => setSelectedPaymentMethod(method.id)}
      className={`p-3 border-2 rounded-md transition-colors ${
        selectedPaymentMethod === method.id
          ? "border-blue-600 bg-blue-50"
          : "border-gray-200 hover:border-blue-400"
      }`}
    >
      <div className="w-16 h-10 flex items-center justify-center">
        <Image
          src={method.logo}
          alt={method.name}
          width={48}
          height={30}
          className="object-contain"
        />
      </div>
    </button>
  ))}
</div>

              </div>

              {/* More Payment Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-700 mb-3">More payment options</h3>
                <button
                  onClick={() => setSelectedPaymentMethod("visa")}
                  className={`px-4 py-2 border-2 rounded-md font-semibold ${
                    selectedPaymentMethod === "visa"
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-200 text-slate-700"
                  }`}
                >
                  VISA
                </button>
              </div>
                {selectedPaymentMethod && (
                <>
              {/* Payment Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Debit/ Credit Card Number</label>
                  <Input
                    type="text"
                    name="cardNumber"
                    placeholder="Enter the card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Card Expiry</label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        name="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month.toString().padStart(2, "0")}>
                            {month.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <select
                        name="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">CVV/CVC</label>
                    <Input
                      type="text"
                      name="cvv"
                      placeholder="CVV/CVC"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={4}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name on Card</label>
                  <Input
                    type="text"
                    name="nameOnCard"
                    placeholder="Enter the name printed on Card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address (optional)</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Billing Address</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Country Region</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select country/region</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="IN">India</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Postal/zip code</label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address line 1</label>
                    <Input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address line 2 (optional)</label>
                    <Input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Town/ City</label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">State (optional)</label>
                    <Input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-6 flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                />
                <label htmlFor="terms" className="text-sm text-slate-700 cursor-pointer">
                  I agree to the Travel Mania{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button onClick={() => setShowCancelModal(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base">
                  Confirm Payment
                </Button>
                <button onClick={back} className="w-full text-slate-600 hover:text-slate-800 font-medium">Back</button>
                 
              </div>
              </>
              )}
            </div>

          </div>

          {/* Booking Summary - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h3 className="text-sm font-medium text-slate-600 mb-2">Booking summary</h3>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Mövenpick Grand Al Bustan Dubai</h2>
              <p className="text-sm text-slate-600">07 Sept 2024 - 21 Sept 2024 ( 14 nights )</p>
               <h4 className="text-sm font-medium text-slate-600 mb-2">Total : $364</h4>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <Newsletter/>
      </main>

       <CancelHotelModal isOpen={showCancelModal} onClose={() => setShowCancelModal(false)} />

      {/* Footer */}
       <Footer/>
    </div>
  )
}
