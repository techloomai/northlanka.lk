"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

// Red paper plane illustration (larger version)
const PaperPlaneIllustration = () => (
  <div className="absolute right-0 top-0 -z-10 opacity-10 md:opacity-20">
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M50 200L350 50L275 200L350 350L50 200Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export function HeroComingSoon() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-gray-100 py-20 md:py-32">
      <PaperPlaneIllustration />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6">
            Tours & Travels · Jaffna, Sri Lanka
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-secondary md:text-6xl lg:text-7xl">
            North Lanka Tours & Travels
          </h1>

          {/* Subheading */}
          <p className="mb-4 text-lg text-muted-foreground md:text-xl">
            Explore, Experience, Enjoy – Book your air tickets, visas, and
            tours with us.
          </p>

          {/* Coming Soon Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary">
              Coming Soon
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="mailto:northlankatvls@gmail.com?subject=Travel%20Inquiry%20-%20North%20Lanka">
                <Mail className="h-5 w-5" />
                Get Travel Assistance
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="tel:+94710780240">
                <Phone className="h-5 w-5" />
                Call Our Agent
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

