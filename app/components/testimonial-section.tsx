import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "Urbanist" }}>Mission and Values</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Urbanist" }}>
              What people says about Golobe facilities
            </h2>

            <div className="space-y-5 text-muted-foreground leading-8 mb-8" style={{ fontFamily: "Urbanist" }}>
              <p>
                Our platform is designed for intrepid travelers of all ages and backgrounds who
                crave immersive experiences, cultural discovery, and off-the-beaten-path adventures.
              </p>
              <p>
                Whether you're a solo backpacker, a family seeking memorable vacations, or a seasoned
                globetrotter, there's something for everyone at Travel Mania.
              </p>
              <p>
                Our platform is designed for intrepid travelers of all ages and backgrounds who crave
                immersive experiences, cultural discovery, and off-the-beaten-path adventures.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Save Time and Effort",
                "Ensure Transparency",
                "Offer Competitive Prices",
                "Empower Travelers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3" style={{ fontFamily: "Urbanist" }}>
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex gap-4 h-[500px]">

            {/* Left Image */}
            <div className="w-1/2 rounded-lg overflow-hidden">
              <img
                src="/women-left-side.png"
                alt="Traveler"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="w-1/2 rounded-lg overflow-hidden">
              <img
                src="/women-right-side.png"
                alt="Traveler"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CENTER BLUE BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base shadow-lg lg:mt-55" style={{ fontFamily: "Urbanist" }}>
                Explore The World
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
