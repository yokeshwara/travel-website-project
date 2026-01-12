"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  onApply: (data: {
    pickupDate: string;
    dropDate: string;
    pickupTime: string;
    dropTime: string;
  }) => void;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function DatePicker({ onApply }: DatePickerProps) {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [pickupDay, setPickupDay] = useState<number | null>(null);
  const [dropDay, setDropDay] = useState<number | null>(null);

  const [pickupTime, setPickupTime] = useState("11:00");
  const [dropTime, setDropTime] = useState("11:00");

  /* ================= HELPERS ================= */

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const formatDate = (day: number) =>
    `${day} ${MONTHS[month]} ${year}`;

  /* ================= RENDER ================= */

  return (
    <div className="bg-[#f6f8fb] rounded-xl shadow-xl p-6 w-full">
      {/* Calendars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* PICKUP */}
        {[pickupDay, dropDay].map((selectedDay, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-4">
              <ChevronLeft
                className="cursor-pointer"
                onClick={prevMonth}
              />
              <h3 className="font-medium">
                {MONTHS[month]} {year}
              </h3>
              <ChevronRight
                className="cursor-pointer"
                onClick={nextMonth}
              />
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-2">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {/* Empty slots */}
              {[...Array(firstDayOfMonth)].map((_, i) => (
                <span key={`empty-${i}`} />
              ))}

              {/* Days */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const active = selectedDay === day;

                return (
                  <button
                    key={day}
                    onClick={() =>
                      idx === 0
                        ? setPickupDay(day)
                        : setDropDay(day)
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
          onClick={() => {
            if (!pickupDay || !dropDay) return;

            onApply({
              pickupDate: formatDate(pickupDay),
              dropDate: formatDate(dropDay),
              pickupTime,
              dropTime,
            });
          }}
          className="bg-blue-600 text-white py-3 rounded-lg mt-6 md:mt-0"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
