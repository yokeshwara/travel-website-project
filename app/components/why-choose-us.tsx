export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            <div className="flex gap-6 items-end">

              {/* Left Large Image */}
              <div className="w-1/2">
                <div className="h-[520px] rounded-xl overflow-hidden">
                  <img
                    src="/man.png"
                    alt="Traveler waiting at airport"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Smaller Image */}
              <div className="w-1/2">
                <div className="h-[420px] rounded-xl overflow-hidden">
                  <img
                    src="/women.png"
                    alt="Woman with luggage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

            {/* Blue Info Box */}
            <div className="absolute -bottom-10 left-10 right-10 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-sm leading-relaxed">
                Dolor a consectetur sagittis viverra quisque. Auctor sed hendrerit.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Chose Us
            </h2>

            <p className="text-gray-500 mb-6">
              Search Flights & Places Hire to our most popular destinations
            </p>

            <div className="space-y-6 text-gray-600 leading-8 text-base">
              <p>
                At FlightFinder, we’re dedicated to making your travel experience
                seamless and stress-free. Here's why savvy travelers trust us for
                their flight bookings — we have been wing with hundreds of clients
                across all industries.
              </p>

              <p>
                Our dyed-in-the-wool, as we have been wing with hundreds of clients
                across all industries. The main motto of is to focus on designing,
                developing, marketing websites, and have expertise in Magento all
                versions that are performance minded.
              </p>

              <p>
                We have been wing with hundreds of clients across all industries.
                Our dyed-in-the-wool, as well as customer-focused approach ensures
                reliable and affordable travel planning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
