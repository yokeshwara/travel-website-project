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

  const [dateValue, setDateValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [tripType, setTripType] = useState<"Return" | "One Way">("Return");

  const [travelClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const passengerRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  /* ================= VALIDATION ================= */
  const isFormValid =
    from.trim() !== "" &&
    to.trim() !== "" &&
    dateValue.trim() !== "" &&
    adults + children > 0;

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    if (!isFormValid) return;

    router.push(
      `/flights?from=${from}&to=${to}&date=${dateValue}&trip=${tripType}&adults=${adults}&children=${children}&class=${travelClass}`
    );
  };

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        passengerRef.current &&
        !passengerRef.current.contains(e.target as Node)
      ) {
        setOpenPassenger(false);
      }

      if (
        dateRef.current &&
        !dateRef.current.contains(e.target as Node)
      ) {
        setOpenDate(false);
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
            <Link href="/" className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">
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
                  placeholder="From"
                />
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full font-medium outline-none"
                  placeholder="To"
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
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value as any)}
                className="w-full font-medium outline-none bg-transparent"
              >
                <option value="Return">Return</option>
                <option value="One Way">One Way</option>
              </select>
            </div>

            {/* Date */}
            <div
              ref={dateRef}
              className="relative border rounded-lg px-4 pt-4 pb-3 cursor-pointer"
            >
              <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Depart - Return
              </span>

              <p onClick={() => setOpenDate(true)}>
                {dateValue || "Select dates"}
              </p>

              {openDate && (
                <div className="absolute top-[120%] left-0 z-50 w-full lg:w-[720px]">
                  <DatePicker
                    onApply={(data: any) => {
                      setDateValue(`${data.pickupDate} - ${data.dropDate}`);
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

              {openPassenger && (
                <div className="absolute top-[120%] right-0 w-full sm:w-[340px] bg-[#f7f9fc] rounded-xl shadow-lg p-4 z-50">

                  {/* Adults */}
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold">Adults</p>
                    <div className="flex items-center gap-3">
                      <button onClick={(e) => { e.stopPropagation(); setAdults(Math.max(1, adults - 1)); }}>
                        <Minus size={14} />
                      </button>
                      <span>{adults}</span>
                      <button onClick={(e) => { e.stopPropagation(); setAdults(adults + 1); }}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center mb-6">
                    <p className="font-semibold">Children</p>
                    <div className="flex items-center gap-3">
                      <button onClick={(e) => { e.stopPropagation(); setChildren(Math.max(0, children - 1)); }}>
                        <Minus size={14} />
                      </button>
                      <span>{children}</span>
                      <button onClick={(e) => { e.stopPropagation(); setChildren(children + 1); }}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenPassenger(false);
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
          <div className="flex justify-between items-center mt-6">
            <button className="flex items-center gap-2 text-sm text-gray-600">
              <Plus size={16} /> Add Promo Code
            </button>

            <button
              onClick={handleSearch}
              disabled={!isFormValid}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition
                ${
                  isFormValid
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              <Send size={16} /> Show Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
