"use client"

import { useState } from "react"
import {
  Plane,
  Hotel,
  Car,
  Store,
  Clock,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import { Footer } from "../components/footer"
import Newsletter from "../components/newsletter"
import NewHeader from "../components/new-header"
import { useRouter } from "next/navigation"

export default function TravelBooking() {
  const [purchaseConditionsOpen, setPurchaseConditionsOpen] = useState(false)
  const [refundRulesOpen, setRefundRulesOpen] = useState(false)
  const [voucherOpen, setVoucherOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("pay-now")
  const [termsAccepted, setTermsAccepted] = useState(false)

   const router = useRouter();
    const makePayment = () => {
    router.push("/payment") // change route as needed
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <NewHeader/>

      {/* Main Content */}
     <main className="w-full px-4 py-8 overflow-hidden">
        <div className="bg-blue-50 rounded-xl shadow-lg p-6 md:p-8 ">
          {/* Trip Summary */}
          <section className="mb-8" >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trip Summary</h2>

            {/* Outbound Flight */}
        <div className="mb-6">
  <div className="flex items-start gap-2 mb-4">
    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-1">
      <Plane size={14} />
    </div>

    <div className="flex flex-col">
      <span className="text-sm text-gray-600">Thu, 30 May 2024</span>
      <span className="font-medium text-gray-800">
        Dubai (DBI) – London (LDN)
      </span>
    </div>
  </div>



              <div className="grid md:grid-cols-4 gap-4 text-sm border-b pb-4">
                <div className="text-gray-600 font-medium">Departure</div>
                <div className="text-gray-600 font-medium lg:ml-90">Arrival</div>
                <div className="text-gray-600 font-medium md:col-span-2 lg:ml-90">Class | Baggage Allowance</div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 pt-4 items-start">
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    10:25 <span className="text-lg">DBI</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">International airport in</div>
                  <div className="text-xs text-gray-600">Dubai, United Arab</div>
                  <div className="text-xs text-gray-600">Emirates</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <Clock size={20} className="text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600 mt-2">08 h 16 min</div>
                  <div className="text-xs text-gray-600">1 stop</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    18:25 <span className="text-lg">LDN</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">London City Airport</div>
                  <div className="text-xs text-gray-600">Hartmann Rd, London</div>
                  <div className="text-xs text-gray-600">E16 2PX, United</div>
                  <div className="text-xs text-gray-600">Kingdom</div>
                </div>

                <div className="text-right md:text-left">
  <div className="flex items-center justify-end md:justify-start gap-4">
    <span className="text-sm text-gray-800">Economy (Q)</span>

    <button className="text-blue-600 text-sm hover:underline lg:ml-50">
      + More
    </button>
  </div>

  <span className="block text-sm text-gray-800 mt-1">
    Adult: 30kg
  </span>
</div>


              </div>
            </div>

            {/* Return Flight */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                  <Plane size={14} className="rotate-180" />
                </div>

                  <div className="flex flex-col">
      <span className="text-sm text-gray-600">Sat, 15 Jun</span>
      <span className="font-medium text-gray-800">
       London (LDN) – Dubai (DBI)
      </span>
    </div>
             
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-sm border-b pb-4">
                <div className="text-gray-600 font-medium">Departure</div>
                <div className="text-gray-600 font-medium  lg:ml-90">Arrival</div>
                <div className="text-gray-600 font-medium md:col-span-2  lg:ml-90">Class | Baggage Allowance</div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 pt-4 items-start">
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    10:25 <span className="text-lg">LDN</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">London City Airport</div>
                  <div className="text-xs text-gray-600">Hartmann Rd, London</div>
                  <div className="text-xs text-gray-600">E16 2PX, United</div>
                  <div className="text-xs text-gray-600">Kingdom</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <Clock size={20} className="text-gray-600" />
                  </div>
                  <div className="text-xs text-gray-600 mt-2">08 h 16 min</div>
                  <div className="text-xs text-gray-600">1 stop</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    18:25 <span className="text-lg">DBI</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">International airport in</div>
                  <div className="text-xs text-gray-600">Dubai, United Arab</div>
                  <div className="text-xs text-gray-600">Emirates</div>
                </div>

                 <div className="text-right md:text-left">
  <div className="flex items-center justify-end md:justify-start gap-4">
    <span className="text-sm text-gray-800">Economy (Q)</span>

    <button className="text-blue-600 text-sm hover:underline lg:ml-50">
      + More
    </button>
  </div>

  <span className="block text-sm text-gray-800 mt-1">
    Adult: 30kg
  </span>
</div>


              </div>
            </div>
          </section>

          {/* Passenger Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Passenger Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Passenger Name</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Passport</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Date of birth</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-gray-800">David</td>
                    <td className="py-3 px-2 text-gray-500">-</td>
                    <td className="py-3 px-2 text-gray-800">5 April 1993</td>
                    <td className="py-3 px-2 text-gray-800">Adult</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-2 text-gray-800">John Doe</td>
                    <td className="py-3 px-2 text-gray-500">-</td>
                    <td className="py-3 px-2 text-gray-800">23 June 1996</td>
                    <td className="py-3 px-2 text-gray-800">Adult</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Details */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Passenger Name</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Email</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-2 text-gray-800">David</td>
                    <td className="py-3 px-2 text-gray-800">Primary Passenger</td>
                    <td className="py-3 px-2 text-gray-800">example@gmail.com</td>
                    <td className="py-3 px-2 text-gray-800">08-87556632</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seats */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Seats</h2>

            {/* Dubai - London */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-gray-800">Dubai - London</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Passenger</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">DBI - LDN</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">LDN - DBI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2 text-gray-800">David</td>
                      <td className="py-3 px-2 text-gray-800">19D B666 D PKR</td>
                      <td className="py-3 px-2 text-gray-800">No seat selected</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-gray-800">John Doe</td>
                      <td className="py-3 px-2 text-gray-800">19D B666 D PKR</td>
                      <td className="py-3 px-2 text-gray-800">No seat selected</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* London - Dubai */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">London - Dubai</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Passenger</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">DBI - LDN</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">LDN - DBI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-2 text-gray-800">David</td>
                      <td className="py-3 px-2 text-gray-800">19D B666 D PKR</td>
                      <td className="py-3 px-2 text-gray-800">No seat selected</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-gray-800">John Doe</td>
                      <td className="py-3 px-2 text-gray-800">19D B666 D PKR</td>
                      <td className="py-3 px-2 text-gray-800">No seat selected</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Purchase Conditions */}
          <section className="mb-4">
            <button
              onClick={() => setPurchaseConditionsOpen(!purchaseConditionsOpen)}
              className="w-full flex items-center justify-between py-4 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
            >
              <span className="text-lg font-semibold text-gray-800">Purchase Conditions</span>
              {purchaseConditionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {purchaseConditionsOpen && (
              <div className="p-4 bg-gray-50 text-sm text-gray-600 mt-1 rounded-b-lg">
                Purchase conditions content goes here...
              </div>
            )}
          </section>

          {/* Refund Fare Rules */}
          <section className="mb-8">
            <button
              onClick={() => setRefundRulesOpen(!refundRulesOpen)}
              className="w-full flex items-center justify-between py-4 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
            >
              <span className="text-lg font-semibold text-gray-800">Refund Fare Rules</span>
              {refundRulesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {refundRulesOpen && (
              <div className="p-4 bg-gray-50 text-sm text-gray-600 mt-1 rounded-b-lg">
                Refund fare rules content goes here...
              </div>
            )}
          </section>

          {/* Bottom Section - Voucher and Price */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Redeem Voucher */}
            <div>
              <button
                onClick={() => setVoucherOpen(!voucherOpen)}
                className="w-full flex items-center justify-between py-3 mb-4"
              >
                <span className="text-lg font-semibold text-gray-800">Redeem Voucher</span>
                {voucherOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {voucherOpen && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-700">APPLY ONE VOUCHER PER PERSON</span>
                    <button className="text-sm text-blue-600 hover:underline">Help</button>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option>David</option>
                    </select>
                    <input
                      type="text"
                      placeholder="235-4567-9633"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                      ✓
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition">
                      Add one other voucher
                    </button>
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                      Submit Voucher
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Price</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trip price</span>
                  <span className="font-medium text-gray-800">PKR 40080.00</span>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b">
                  <span className="text-gray-600">Platform taxes (for all passengers)</span>
                  <span className="font-medium text-gray-800">PKR 17580.00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-lg font-semibold text-gray-800">Payable amount</span>
                  <span className="text-lg font-bold text-gray-800">PKR 57680.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose how to pag</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("pay-now")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition lg:w-100 ${
                  paymentMethod === "pay-now" ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "pay-now" ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "pay-now" && <div className="w-3 h-3 rounded-full bg-blue-600"></div>}
                </div>
                <span className="font-medium text-gray-800">Pay Now</span>
              </button>

              <button
                onClick={() => setPaymentMethod("cash-avail")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition lg:w-100 lg:ml-[-280px] ${
                  paymentMethod === "cash-avail"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center  ${
                    paymentMethod === "cash-avail" ? "border-blue-600" : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "cash-avail" && <div className="w-3 h-3 rounded-full bg-blue-600 "></div>}
                </div>
                <span className="font-medium text-gray-800">Cash + Avail</span>
              </button>
            </div>
          </section>

          {/* Final Amount */}
          <div className="text-center mb-6 lg:text-right">
            <p className="text-2xl font-bold text-gray-800">
              Payable amount : <span className="text-gray-800">PKR 56809.00</span>
            </p>
          </div>

          {/* Terms and Actions */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read and accept the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  fare and refund rules
                </a>{" "}
                stated above, and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  general conditions of carriage
                </a>{" "}
                applicable to my flight
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
                Back
              </button>
              <button
                disabled={!termsAccepted}
                onClick={makePayment}
                className={`px-8 py-3 rounded-lg font-medium transition ${
                  termsAccepted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
         <Newsletter/>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
