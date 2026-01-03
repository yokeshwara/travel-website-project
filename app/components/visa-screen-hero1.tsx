export default function VisaScreenHero1() {
  return (
    <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/keyboard.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h3 className="text-xl md:text-2xl font-light mb-2" style={{ fontFamily: "Urbanist" }}>Helping Others</h3>
        <h1 className="text-4xl md:text-7xl font-black tracking-widest mb-4">CAPTURE WANDERLUST</h1>
        <p className="text-lg md:text-xl font-light" style={{ fontFamily: "Urbanist" }}>Special offers to suit your plan</p>
      </div>
    </section>
  )
}
