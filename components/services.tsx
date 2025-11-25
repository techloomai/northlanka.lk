"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, FileCheck, Hotel } from "lucide-react";

const services = [
  {
    title: "Air Tickets",
    description:
      "Book international and domestic flights with competitive prices. We work with major airlines worldwide to get you the best deals for your travel needs.",
    icon: Plane,
  },
  {
    title: "Visa Services",
    description:
      "Expert assistance with visitor, student, and business visa applications. We guide you through the process to ensure smooth visa approvals.",
    icon: FileCheck,
  },
  {
    title: "Tours & Hotel Arrangements",
    description:
      "Custom itineraries tailored to your preferences and hotel bookings at the best rates. Experience unforgettable journeys with our personalized tour packages.",
    icon: Hotel,
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          What We Do
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <em>Home Based Service</em>
        </p>
      </div>
    </section>
  );
}

