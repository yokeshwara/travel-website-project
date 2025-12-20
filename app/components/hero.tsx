export function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/airplane-wing-in-blue-sky-with-clouds.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-600/40" />
      </div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm md:text-base uppercase tracking-wider mb-2 font-light">why us</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">ABOUT US</h1>
      </div>
    </section>
  )
}
