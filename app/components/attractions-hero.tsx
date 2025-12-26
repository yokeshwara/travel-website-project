"use client"
export default function AttractionsHero() {
  return (
    <section
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-cover bg-center"
      style={{
        backgroundImage: "url(/attractions-hero-image.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80 text-sm font-medium mb-2">Helping Others</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">CAPTURE WANDERLUST</h1>
        <p className="text-white/90 text-lg mb-8">Special offers to suit your plan</p>
      </div>
    </section>
  )
}
