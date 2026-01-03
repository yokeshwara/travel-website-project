

import { Suspense } from "react";
import FlightsClient from "../components/flights-client";

export default function FlightsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading flights...</div>}>
      <FlightsClient />
    </Suspense>
  );
}
