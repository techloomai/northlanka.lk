"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

export function HeroComingSoon() {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);
    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(220, 38, 38, 0)" }, { duration: 1.5 });
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(220, 38, 38, 1)" }, { duration: 0.15 });
  };

  return (
    <section className="relative bg-secondary overflow-hidden">
      <div
        ref={scope}
        className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-secondary/20"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <Badge variant="outline" className="pointer-events-auto mb-4 border-white/20 text-white">
          Tours & Travels · Jaffna, Sri Lanka
        </Badge>
        <h1 className="text-center text-5xl font-black uppercase text-white sm:text-6xl md:text-7xl lg:text-8xl">
          North Lanka Tours & Travels
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-base font-light text-white/80 md:text-lg lg:text-xl">
          Explore, Experience, Enjoy – Book your air tickets, visas, and tours with us.
        </p>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-sm font-semibold text-white">
            Coming Soon
          </span>
        </div>
        <div className="pointer-events-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
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
            className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
            asChild
          >
            <a href="tel:+94710780240">
              <Phone className="h-5 w-5" />
              Call Our Agent
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

