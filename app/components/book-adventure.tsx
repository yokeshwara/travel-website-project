import { Button } from "@/components/ui/button"

export function BookAdventure() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/wooden-bridge-path-through-green-forest.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Book Your Adventure Now!</h2>
        <p className="text-lg mb-8 text-white/90">Ready to explore? Start your journey today</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
          Discover Tours
        </Button>
      </div>
    </section>
  )
}
