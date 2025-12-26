"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Plane,
  Bed,
  ArrowLeftRight,
  Plus,
  Send,
  ChevronDown,
  Minus,
} from "lucide-react";
import DatePicker from "@/app/DatePicker";
import Link from "next/link";

export default function HeroSection() {
  const router = useRouter();

  const [openDate, setOpenDate] = useState(false);
  const [openPassenger, setOpenPassenger] = useState(false);

  const [dateValue, setDateValue] = useState("07 June 22 - 18 June 22");
  const [from, setFrom] = useState("Dubai");
  const [to, setTo] = useState("England");

  const [travelClass, setTravelClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const passengerRef = useRef<HTMLDivElement>(null);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    router.push(
      `/flights?from=${from}&to=${to}&date=${dateValue}&adults=${adults}&children=${children}&class=${travelClass}`
    );
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        passengerRef.current &&
        !passengerRef.current.contains(e.target as Node)
      ) {
        setOpenPassenger(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[650px] pb-[160px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/banner.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Search Card */}
    <div className="relative z-10 flex justify-center"> 
    <div className="relative mt-[420px] w-[95%] max-w-6xl bg-white rounded-2xl shadow-xl p-6 lg:absolute lg:mt-0 lg:top-[580px]">
          {/* Tabs */}
          <div className="flex gap-8 border-b mb-6">
            <Link href="/flights" className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">
              <Plane size={18} /> Flights
            </Link>
            <Link href="/find-stays" className="flex items-center gap-2 pb-3 text-gray-500">
              <Bed size={18} /> Stays
            </Link>
              <Link href="/attractions" className="flex items-center gap-2 pb-3 text-gray-500">
              <Plane size={18} /> Attractions
            </Link>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr_2fr] gap-4">

            {/* From - To */}
            <div className="relative border rounded-lg px-4 pt-4 pb-3">
              <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                From - To
              </span>
              <div className="flex items-center gap-2">
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full font-medium outline-none"
                />
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full font-medium outline-none"
                />
                <button onClick={swapLocations}>
                  <ArrowLeftRight size={18} />
                </button>
              </div>
            </div>

            {/* Trip */}
            <div className="relative border rounded-lg px-4 pt-4 pb-3">
              <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Trip
              </span>
              <p className="font-medium">Return</p>
            </div>

            {/* Date */}
            <div className="relative border rounded-lg px-4 pt-4 pb-3 cursor-pointer">
              <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Depart - Return
              </span>
              <p onClick={() => setOpenDate(!openDate)}>{dateValue}</p>

              {openDate && (
                <div className="absolute top-[120%] left-0 z-50 w-full lg:w-[720px]">
                  <DatePicker
                    onApply={(data: any) => {
                      setDateValue(`${data.pickupDate} Jun - ${data.dropDate} Jun`);
                      setOpenDate(false);
                    }}
                  />
                </div>
              )}
            </div>

            {/* Passenger */}
            <div
              ref={passengerRef}
              className="relative border rounded-lg px-4 pt-4 pb-3 cursor-pointer"
              onClick={() => setOpenPassenger(!openPassenger)}
            >
              <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Passenger - Class
              </span>

              <div className="flex justify-between items-center">
                <p className="font-medium">
                  {adults + children} Passenger, {travelClass}
                </p>
                <ChevronDown size={18} />
              </div>

              {/* Dropdown */}
              {openPassenger && (
                <div className="absolute top-[120%] right-0 w-full sm:w-[340px] bg-[#f7f9fc] rounded-xl shadow-lg p-4 z-50">

                  {/* Class */}
                  <div className="border rounded-lg bg-white p-3 mb-4 flex justify-between">
                    <span>{travelClass}</span>
                    <ChevronDown size={18} />
                  </div>

                  {/* Adults */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-semibold">Adults</p>
                      <p className="text-xs text-gray-500">Aged 16+</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setAdults(Math.max(1, adults - 1));
                        }}
                        className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{adults}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setAdults(adults + 1);
                        }}
                        className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="font-semibold">Children</p>
                      <p className="text-xs text-gray-500">Aged 0–15</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setChildren(Math.max(0, children - 1));
                        }}
                        className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{children}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setChildren(children + 1);
                        }}
                        className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <p className="text-sm leading-relaxed text-gray-600 mb-4">
                   Your age at time of travel must be valid for the age category booked.
                   Airlines have restrictions on under 18s travelling alone.
                  </p>

                   <p className="text-sm leading-relaxed text-gray-600 mb-6">
                    Age limits and policies for travelling with children may vary so please
                    check with the airline before booking.
                   </p>


                  {/* Apply */}
                 <button
  onClick={(e) => {
    e.stopPropagation();
    setOpenPassenger(false);
    router.push("/PassengerDetails");
  }}
  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
>
  Apply
</button>

                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6 lg:ml-190">
            <button className="flex items-center gap-2 text-sm text-gray-600">
              <Plus size={16} /> Add Promo Code
            </button>

            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              <Send size={16} /> Show Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
