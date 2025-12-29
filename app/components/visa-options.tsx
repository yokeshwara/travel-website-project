import { Button } from "@/components/ui/button"

const OPTIONS = [
  {
    id: 1,
    title: "Airport to Airport Tickets Only",
    price: "989",
    image: "/option1.jpg",
  },
  {
    id: 2,
    title: "Visa Change Oman Exit By Land",
    price: "950",
    image: "/option2.jpg",
  },
  {
    id: 3,
    title: "A2A Visa Change - Same Day",
    price: "1299",
    image: "/option3.jpg",
  },
]

export default function VisaOptions() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">UAE VISA CHANGE | DUBAI VISA CHANGE?</h2>
        <p className="text-slate-600">Apply your UAE VISA CHANGE with South Travel for a hassle-free experience.</p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {OPTIONS.map((opt) => (
          <div
            key={opt.id}
            className="flex flex-col md:flex-row items-center justify-between p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow gap-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <img
                src={opt.image || "/placeholder.svg"}
                alt={opt.title}
                className="w-32 h-20 object-cover rounded shadow-sm"
              />
              <h4 className="text-lg font-medium text-slate-800 text-center md:text-left">{opt.title}</h4>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 whitespace-nowrap">
              <p className="text-slate-600">
                Starts from <span className="text-blue-600 font-bold">AED {opt.price}</span> /person
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto px-8">VIEW DETAILS</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
