import { Building2, Users, Globe, Calendar } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "1000+",
    label: "Properties",
  },
  {
    icon: Users,
    value: "4500+",
    label: "Customers",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries",
  },
  {
    icon: Calendar,
    value: "8000+",
    label: "Bookings",
  },
]

export default function Statistics() {
  return (
    <section className="py-12 lg:py-2 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-lg p-6 lg:p-8 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
