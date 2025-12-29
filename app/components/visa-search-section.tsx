import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchSection() {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Looking for specific information?</h3>
        <p className="text-slate-500 text-lg">Search product info, FAQs</p>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <Input
          type="text"
          placeholder="Type a keyword"
          className="pl-14 py-8 text-xl border-slate-300 rounded-lg focus-visible:ring-blue-500"
        />
      </div>
    </section>
  )
}
