"use client"
const services = [
  {
    icon: "",
    title: "Explore top attractions",
    description: "Discover top-rated attractions, tours and activities at your destination",
  },
  {
    icon: "",
    title: "Fast and flexible",
    description: "Book hassle-free with a fast and secure booking platform",
  },
  {
    icon: "",
    title: "Support when you need it",
    description: "Round-the-clock multilingual support in your local currency",
  },
]


export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-2">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "Urbanist" }}>We've got you covered</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="text-center">
            <div className="text-5xl mb-4" style={{ fontFamily: "Urbanist" }}>{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Urbanist" }}>{service.title}</h3>
            <p className="text-gray-600" style={{ fontFamily: "Urbanist" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
