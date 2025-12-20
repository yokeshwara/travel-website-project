"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  onApply: (data: {
    pickupDate: number;
    dropDate: number;
    pickupTime: string;
    dropTime: string;
  }) => void;
}

export default function DatePicker({ onApply }: DatePickerProps) {
  const [pickupDate, setPickupDate] = useState(7);
  const [dropDate, setDropDate] = useState(18);
  const [pickupTime, setPickupTime] = useState("11:00 AM");
  const [dropTime, setDropTime] = useState("11:00 AM");

  return (
    <div className="bg-[#f6f8fb] rounded-xl shadow-xl p-6 w-full">
      {/* Calendars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[pickupDate, dropDate].map((selected, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-4">
              <ChevronLeft className="cursor-pointer" />
              <h3 className="font-medium">June</h3>
              <ChevronRight className="cursor-pointer" />
            </div>

            <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-2">
              {["SUN","MON","TUE","WED","THU","FRI","SAT"].map(d => (
                <span key={d}>{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                const active =
                  idx === 0 ? day === pickupDate : day === dropDate;

                return (
                  <button
                    key={day}
                    onClick={() =>
                      idx === 0
                        ? setPickupDate(day)
                        : setDropDate(day)
                    }
                    className={`py-2 rounded-md text-sm ${
                      active
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-center">
        <div>
          <p className="text-sm font-medium mb-1">Pick-up Time</p>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Drop-off Time</p>
          <input
            type="time"
            value={dropTime}
            onChange={(e) => setDropTime(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <button
          onClick={() =>
            onApply({
              pickupDate,
              dropDate,
              pickupTime,
              dropTime,
            })
          }
          className="bg-blue-600 text-white py-3 rounded-lg mt-6 md:mt-0"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
