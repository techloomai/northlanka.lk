"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/north-lanka-logo.png"
              alt="North Lanka Tours & Travels Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-secondary">
              NORTH LANKA
            </span>
            <span className="text-xs text-muted-foreground">
              Tours & Travels
            </span>
          </div>
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:flex"
          >
            <a href="https://wa.me/94710780240" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href="tel:+94710780240">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

