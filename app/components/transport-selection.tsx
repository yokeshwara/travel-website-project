"use client"

import Image from "next/image"

interface Transport {
  id: number
  image: string
  title: string
  from: string
  to: string
  vehicle: string
  departure: string
  baggage: string
  type: string
  cancellation: string[]
  inclusions: string[]
  exclusions: string[]
  summary: string[]
}

const transports: Transport[] = [
  {
    id: 1,
    image: "/bus2.png",
    title: "Oman Package By Bus",
    from: "Dubai, Fish Round About",
    to: "Oman",
    vehicle: "Mitsubishi Rosa, Bus",
    departure: "10:45 AM",
    baggage: "1 KG",
    type: "Shared • With Return",
    cancellation: [
      "Cancellation Deadline: 2024-09-22",
      "Charge Before Deadline: 200 AED",
      "Charge After Deadline: 200 AED",
      "Charge On Trip Date: 400 AED",
    ],
    inclusions: [
      "10 Days Oman Visa",
      "Two-way transportation",
      "Border exit fees",
      "One night free accommodation",
    ],
    exclusions: [
      "UAE tourist visa",
      "Food & Drinks",
      "Saturday not available",
      "Pax must arrive by 10:45 AM",
    ],
    summary: [
      "Total Rate: 700 AED",
      "Total Tax: 0 AED",
      "Waiting Charge: 0 AED",
      "Seats Available: 0",
      "Visa Included: 10 Days Tourist Visa",
    ],
  },
  {
    id: 2,
    image: "/man with bus.png",
    title: "Oman Package By Luxury Bus",
    from: "Dubai",
    to: "Oman",
    vehicle: "Luxury Coach",
    departure: "9:30 AM",
    baggage: "2 KG",
    type: "Shared • With Return",
    cancellation: [
      "Cancellation Deadline: 2024-10-01",
      "Charge Before Deadline: 150 AED",
      "Charge After Deadline: 250 AED",
    ],
    inclusions: [
      "Luxury transportation",
      "Oman Tourist Visa",
      "Hotel Pickup & Drop",
    ],
    exclusions: [
      "Meals",
      "Personal expenses",
      "Insurance",
    ],
    summary: [
      "Total Rate: 900 AED",
      "Seats Available: 5",
      "Instant Confirmation",
    ],
  },
]

export default function TransportSelection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-10 lg:mt-50">

        <div className="max-w-7xl mx-auto"> 
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-balance"> Select the following transfer type to book </h2> 
        <p className="text-gray-600 mb-12"></p>
        </div>
      {transports.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border shadow-sm p-6"
        >
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IMAGE */}
            <div className="relative lg:h-100 lg:w-120 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p><strong>From:</strong> {item.from}</p>
              <p><strong>To:</strong> {item.to}</p>
              <p><strong>Vehicle:</strong> {item.vehicle}</p>
              <p><strong>Departure:</strong> {item.departure}</p>
              <p><strong>Maximum Baggage Weight:</strong> {item.baggage}</p>
              <p className="font-medium">{item.type}</p>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

              {/* Cancellation */}
              <div>
                <h4 className="font-semibold mb-3">Cancellation Policy :</h4>
                <ul className="space-y-2">
                  {item.cancellation.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Inclusions */}
              <div className="md:border-l md:pl-6">
                <h4 className="font-semibold mb-3">Inclusions :</h4>
                <ul className="space-y-2">
                  {item.inclusions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="md:border-l md:pl-6">
                <h4 className="font-semibold mb-3">Exclusions :</h4>
                <ul className="space-y-2">
                  {item.exclusions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Summary */}
              <div className="md:border-l md:pl-6">
                <h4 className="font-semibold mb-3">Summary :</h4>
                <ul className="space-y-2">
                  {item.summary.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* BOOK BUTTON */}
          <div className="flex justify-end mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-md font-semibold">
              Book
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
