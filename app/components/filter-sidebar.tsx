"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "deals",
    "categories",
    "rating",
    "property",
    "amenities",
    "features",
    "starRatings",
    "dining",
    "needs",
    "area",
  ])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const filterGroups = [
    {
      id: "deals",
      title: "Filter by",
      items: [
        { name: "All deals", count: 540 },
        { name: "Last minute deals", count: 240 },
      ],
    },
    {
      id: "categories",
      title: "Popular Categories",
      items: [
        { name: "Breakfast Included", count: 124 },
        { name: "Apartments", count: 89 },
        { name: "Deals", count: 75 },
        { name: "Affordable", count: 234 },
        { name: "Beach hotels", count: 127 },
        { name: "Luxury Amenities", count: 48 },
        { name: "Motels & Lodges", count: 39 },
        { name: "Armored Sleek Residences", count: 17 },
      ],
    },
    {
      id: "rating",
      title: "Guest Rating",
      items: [
        { name: "Excellent (4+)", count: 156 },
        { name: "Good (3-3.9)", count: 203 },
        { name: "Fair (2-2.9)", count: 125 },
        { name: "Poor (1-1.9)", count: 56 },
      ],
    },
    {
      id: "property",
      title: "Property Type",
      items: [
        { name: "Hotels", count: 234 },
        { name: "Apartments", count: 206 },
        { name: "Hostels", count: 78 },
        { name: "Villas", count: 125 },
        { name: "Bungalows", count: 89 },
        { name: "Airbnbs", count: 156 },
      ],
    },
    {
      id: "amenities",
      title: "Amenities",
      items: [
        { name: "Pool Facilities", count: 234 },
        { name: "Non-smoking rooms", count: 145 },
        { name: "Parking (free)", count: 203 },
        { name: "Wifi (free)", count: 189 },
      ],
    },
    {
      id: "features",
      title: "Top Things to do",
      items: [
        { name: "Palace Tours", count: 234 },
        { name: "Desert Safari", count: 178 },
        { name: "Beach (sand)", count: 234 },
        { name: "Restaurants", count: 567 },
        { name: "Nightclubs", count: 234 },
      ],
    },
    {
      id: "starRatings",
      title: "Star Rating by Location",
      items: [
        { name: "1 Star (Budget)", count: 89 },
        { name: "2 Star (Economy)", count: 156 },
        { name: "3 Star (Comfort)", count: 234 },
        { name: "4 Star (Upscale)", count: 167 },
        { name: "5 Star (Luxury)", count: 98 },
      ],
    },
    {
      id: "dining",
      title: "Dining Options",
      items: [
        { name: "Free parking (324)", count: 324 },
        { name: "Non-smoking rooms (158)", count: 158 },
        { name: "Parking can (301)", count: 301 },
        { name: "Free WiFi (289)", count: 289 },
      ],
    },
    {
      id: "needs",
      title: "Best Preferences",
      items: [
        { name: "Entire amenities (209)", count: 209 },
        { name: "Breakfast Included (175)", count: 175 },
        { name: "All-inclusive (102)", count: 102 },
        { name: "Beach & included (87)", count: 87 },
        { name: "Free parking & included (134)", count: 134 },
        { name: "Breakfast & included (156)", count: 156 },
      ],
    },
    {
      id: "area",
      title: "Area",
      items: [
        { name: "Downtown", count: 234 },
        { name: "Marina", count: 156 },
        { name: "JBR", count: 203 },
      ],
    },
  ]

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter by</h3>

        <div className="space-y-4">
          {filterGroups.map((group) => (
            <div key={group.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <button
                onClick={() => toggleSection(group.id)}
                className="flex items-center justify-between w-full py-2 text-gray-900 font-medium hover:text-primary transition"
              >
                <span>{group.title}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${expandedSections.includes(group.id) ? "rotate-180" : ""}`}
                />
              </button>

              {expandedSections.includes(group.id) && (
                <div className="space-y-3 mt-3">
                  {group.items.map((item) => (
                    <label key={item.name} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="text-xs text-gray-500 ml-auto">({item.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
