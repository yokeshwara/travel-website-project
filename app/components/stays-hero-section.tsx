"use client"

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

export default function StaysHeroSection() {
  const router = useRouter();

  const [openDate, setOpenDate] = useState(false);
  const [openPassenger, setOpenPassenger] = useState(false);

  const [dateValue, setDateValue] = useState("07 Nov 22 - 13 Nov 22");
  const [from, setFrom] = useState("Dubai");
  const [to, setTo] = useState("England");

  const [location, setLocation] = useState("")
  const [dates, setDates] = useState("")
  const [people, setPeople] = useState("")

  const passengerRef = useRef<HTMLDivElement>(null);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    router.push(
      '/searchresults'
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
        <img src="/swimming-pool.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Search Card */}
    <div className="relative z-10 flex justify-center"> 
    <div className="relative mt-[420px] w-[95%] max-w-6xl bg-white rounded-2xl shadow-xl p-6 lg:absolute lg:mt-0 lg:top-[580px]">
          {/* Tabs */}

          <div className="flex gap-8 border-b mb-6">

          

            <Link href="/find-stays" className="flex items-center gap-2 pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">
              <Bed size={18} /> Stays
            </Link>

               <Link href="/flights" className="flex items-center gap-2 pb-3 text-gray-600 hover:text-primary transition">
              <Plane size={18} /> Flights
            </Link>

             <Link href="/attractions" className="flex items-center gap-2 pb-3 text-gray-600 hover:text-primary transition">
            <Plane size={18} />
            Attractions
          </Link>
           
           
          
            

          </div>

          {/* Fields */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Location Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">Stays In</label>
            <input
              type="text"
              placeholder="Dubai, UAE"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* Date Range Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">Number of Days</label>
            <input
              type="text"
              placeholder="01 Nov 22 - 11 Nov 22"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* People Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-700">People</label>
            <input
              type="text"
              placeholder="2 Adults, 0 Children"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
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
              <Send size={16} /> Show Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
