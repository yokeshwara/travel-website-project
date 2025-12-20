import { Facebook, Instagram, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Stephen A.com",
    role: "Travel Manager",
    image: "/professional-woman-in-yellow-blazer.jpg",
  },
  {
    name: "Annabela Finn",
    role: "Finance Manager",
    image: "/professional-man-in-suit-and-tie.jpg",
  },
  {
    name: "Rebecca Tyler",
    role: "Travel Guide",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Rey Jackson",
    role: "Travel Guide",
    image: "/professional-woman-dark-hair.png",
  },
  {
    name: "Kane William",
    role: "CEO/Founder",
    image: "/professional-bearded-man.png",
  },
  {
    name: "Laura Tyler",
    role: "Marketing Manager",
    image: "/professional-woman-in-black.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
            Welcome to TravelTeam where your travel dreams take flight! We are not just another booking platform – we
            are your step dedicated the everything we need to turn your where travel desire into unforgettable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 h-[400px]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-primary text-white p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-white/90">{member.role}</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
