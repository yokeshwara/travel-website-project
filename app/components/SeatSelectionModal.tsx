"use client";

import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SeatSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function SeatSelectionModal({
  open,
  onClose,
  onContinue
}: SeatSelectionModalProps) {
  if (!open) return null;
 
   const router = useRouter();
 const handleContinue = () => {
    onClose();
    router.push("/seat-selection"); // <-- your next page
  };


  return (
   <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-2xl shadow-xl">
        {/* Header */}
        <div className="p-4 border-b text-center relative">
          <h2 className="text-lg font-semibold">
            Verify Passenger Details
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Passenger 1 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Adult</p>
              <p className="font-medium">David</p>
            </div>
            <Pencil className="h-5 w-5 text-muted-foreground cursor-pointer" />
          </div>

          {/* Passenger 2 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Adult</p>
              <p className="font-medium">John Doe</p>
            </div>
            <Pencil className="h-5 w-5 text-muted-foreground cursor-pointer" />
          </div>

          {/* Contact Details */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Contact Details
              </p>
              <p className="font-medium">example@gmail.com</p>
            </div>
            <Pencil className="h-5 w-5 text-muted-foreground cursor-pointer" />
          </div>

          {/* Info Text */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              Please check that the name entered matches the name on the passport.
            </p>
            <p>
              The details can not be edited after you continue.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-end gap-3">
          <Button variant="outline">
            Review
          </Button>
          <Button
            className="bg-primary text-primary-foreground"
             onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
