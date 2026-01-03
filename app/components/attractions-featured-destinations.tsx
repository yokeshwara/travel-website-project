"use client"
function FeaturedDestinations() {
  const destinations = [
    {
      country: "Thailand",
      city: "Chiang Mai",
      image: "/Thailand-1.jpg",
      size: "large",
    },
    {
      country: "Brazil",
      city: "Rio de Janeiro",
      image: "/Brazil-1.png",
      size: "medium",
    },
    
    {
      country: "Thailand",
      city: "Chiang Mai",
      image: "/Thailand-2.png",
      size: "large",
    },
    {
      country: "Thailand",
      city: "Chiang Mai",
      image: "/Thailand-3.png",
      size: "large",
    },
    {
      country: "Brazil",
      city: "Rio de Janeiro",
      image: "/Brazil-2.png",
      size: "medium",
    },

    {
      country: "Brazil",
      city: "Rio de Janeiro",
      image: "/Brazil-3.png",
      size: "medium",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer
                ${dest.size === "large" ? "sm:row-span-2 min-h-[420px]" : "min-h-[260px]"}
              `}
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "Urbanist" }}>{dest.country}</h3>
                <p className="text-sm text-white/90" style={{ fontFamily: "Urbanist" }}>{dest.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedDestinations;
