"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Bus } from "lucide-react"
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
  isWithinInterval,
  isBefore,
} from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CalendarPicker() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
     const router = useRouter();
  const [range, setRange] = React.useState<{
    start: Date | null
    end: Date | null
  }>({
    start: null,
    end: null,
  })

  const prevMonth = () => setCurrentDate(addMonths(currentDate, -1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  /** ✅ DATE CLICK HANDLER */
  const onDateClick = (day: Date) => {
    if (!range.start || (range.start && range.end)) {
      // First click OR reset
      setRange({ start: day, end: null })
    } else if (range.start && !range.end) {
      // Second click
      if (isBefore(day, range.start)) {
        setRange({ start: day, end: range.start })
      } else {
        setRange({ start: range.start, end: day })
      }
    }
  }

  const renderMonth = (monthDate: Date) => {
    const days = eachDayOfInterval({
      start: startOfWeek(startOfMonth(monthDate)),
      end: endOfWeek(endOfMonth(monthDate)),
    })


    

    return (
      <div className="w-full">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <span className="text-lg font-bold text-gray-800">
            {format(monthDate, "MMMM yyyy")}
          </span>

          <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 mb-4 text-[10px] font-bold text-gray-500 uppercase">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center">
              {d}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {days.map((day, idx) => {
            const isSelected =
              (range.start && isSameDay(day, range.start)) ||
              (range.end && isSameDay(day, range.end))

            const isInRange =
              range.start &&
              range.end &&
              isWithinInterval(day, { start: range.start, end: range.end })

            const isCurrentMonth = isSameMonth(day, monthDate)

            return (
              <div
                key={idx}
                onClick={() => isCurrentMonth && onDateClick(day)}
                className={cn(
                  "cursor-pointer rounded-md py-2 text-sm transition-all",
                  !isCurrentMonth && "text-gray-300 cursor-not-allowed",
                  isCurrentMonth && "text-gray-700 hover:bg-blue-100",
                  isSelected && "bg-blue-600 text-white font-bold",
                  isInRange && !isSelected && "bg-blue-50 text-blue-600"
                )}
              >
                {format(day, "d")}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 md:px-0">
      {/* Header */}
      <div className="absolute -top-14 left-0 md:left-8 flex items-center gap-4 rounded-t-2xl bg-white px-6 py-4 shadow border">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Bus className="h-6 w-6" />
        </div>
        <span className="text-lg font-bold text-gray-800">
          Select Travel Date
        </span>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl md:rounded-tl-none">
        <div className="grid gap-12 lg:grid-cols-2">
          {renderMonth(currentDate)}
          <div className="hidden lg:block">
            {renderMonth(addMonths(currentDate, 1))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-400">Selected Dates</p>
            <p className="font-bold">
              {range.start ? format(range.start, "dd MMM") : "--"} →{" "}
              {range.end ? format(range.end, "dd MMM") : "--"}
            </p>
          </div>

          <Button onClick={()=>router.push(`${'/visa1'}`)}className="h-12 w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
