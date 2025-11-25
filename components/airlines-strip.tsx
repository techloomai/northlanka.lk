"use client";

import { Badge } from "@/components/ui/badge";

const airlines = [
  "SriLankan Airlines",
  "Emirates",
  "Air Canada",
  "China Eastern",
  "Air India",
  "Etihad Airways",
  "British Airways",
  "Japan Airlines (JAL)",
  "IndiGo",
  "Qatar Airways",
  "Lufthansa",
  "Cathay Pacific",
  "SpiceJet",
  "Gulf Air",
  "Turkish Airlines",
  "Qantas",
];

export function AirlinesStrip() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          Airlines We Work With
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {airlines.map((airline) => (
            <Badge
              key={airline}
              variant="outline"
              className="px-4 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              {airline}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

