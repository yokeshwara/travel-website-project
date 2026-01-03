import { Card } from "@/components/ui/card"
import { Plane } from "lucide-react"

export function TripSummary() {
  return (
    <Card className="p-6 sticky top-4 border-none bg-card">
      <h2 className="text-lg font-semibold mb-6 pb-4 border-b" style={{ fontFamily: "Urbanist" }}>Your trip summary</h2>

      {/* Outbound Flight */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "Urbanist" }}>Thu, 30 May</p>
            <p className="font-semibold" style={{ fontFamily: "Urbanist" }}>10:25</p>
            <p className="text-sm text-muted-foreground" style={{ fontFamily: "Urbanist" }}>DBI</p>
          </div>
          <div className="flex-1 px-4 pt-6">
            <div className="border-t-2 border-dashed border-border relative">
              <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rotate-90" />
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "Urbanist" }}>
            <p className="text-xs text-muted-foreground mb-1">Thu, 30 May</p>
            <p className="font-semibold">18:40</p>
            <p className="text-sm text-muted-foreground">LDN</p>
          </div>
        </div>

        <div className="flex items-start justify-between mb-4" style={{ fontFamily: "Urbanist" }}>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Thu, 30 May</p>
            <p className="font-semibold">10:25</p>
            <p className="text-sm text-muted-foreground">DBI</p>
          </div>
          <div className="flex-1 px-4 pt-6">
            <div className="border-t-2 border-dashed border-border relative">
              <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rotate-90" />
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "Urbanist" }}>
            <p className="text-xs text-muted-foreground mb-1">Thu, 30 May</p>
            <p className="font-semibold">16:40</p>
            <p className="text-sm text-muted-foreground">LDN</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mb-4" style={{ fontFamily: "Urbanist" }}>
        <p className="text-sm font-medium mb-3">Inbound flight</p>
        <div className="flex items-start justify-between mb-3">
          <div style={{ fontFamily: "Urbanist" }}>
            <p className="text-xs text-muted-foreground mb-1">Sat, 8 Jun</p>
            <p className="font-semibold">11:30</p>
            <p className="text-sm text-muted-foreground">LDN</p>
          </div>
          <div className="flex-1 px-4 pt-6">
            <div className="border-t-2 border-dashed border-border relative">
              <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rotate-90" />
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "Urbanist" }}>
            <p className="text-xs text-muted-foreground mb-1">Sat, 8 Jun</p>
            <p className="font-semibold">14:40</p>
            <p className="text-sm text-muted-foreground">DBI</p>
          </div>
        </div>

        <div className="flex items-start justify-between" style={{ fontFamily: "Urbanist" }}>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Sat, 8 Jun</p>
            <p className="font-semibold">10:25</p>
            <p className="text-sm text-muted-foreground">LDN</p>
          </div>
          <div className="flex-1 px-4 pt-6">
            <div className="border-t-2 border-dashed border-border relative">
              <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rotate-90" />
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "Urbanist" }}>
            <p className="text-xs text-muted-foreground mb-1">Sat, 8 Jun</p>
            <p className="font-semibold">16:40</p>
            <p className="text-sm text-muted-foreground">DBI</p>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t pt-4" style={{ fontFamily: "Urbanist" }}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Total trip price:</span>
          <span className="text-xl font-bold text-primary">60340.00 PKR</span>
        </div>
      </div>
    </Card>
  )
}
