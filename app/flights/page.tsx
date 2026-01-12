

import { Suspense } from "react";
import FlightsClient from "../components/flights-client";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
export default function FlightsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading flights...</div>}>
       <Header />
      <HeroSection />
      <FlightsClient />
    </Suspense>
  );
}
