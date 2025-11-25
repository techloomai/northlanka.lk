"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export function Notify() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-secondary py-20 text-white md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Stay Updated
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Our full site is on the way. Join the early access list.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Be the first to receive launch news, travel offers, and curated
            itineraries from North Lanka Tours & Travels.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <BeamForm
            email={email}
            setEmail={setEmail}
            submitted={submitted}
            onSubmit={handleSubmit}
          />
        </div>

        {submitted && (
          <p className="mt-4 text-center text-sm text-accent">
            Thanks! We&apos;ll keep you posted.
          </p>
        )}
      </div>
    </section>
  );
}

type BeamFormProps = {
  email: string;
  submitted: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const BeamForm = ({ email, submitted, onSubmit, setEmail }: BeamFormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const turn = useMotionValue(0);

  useEffect(() => {
    const controls = animate(turn, 1, {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [turn]);

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, rgba(220,38,38,0) 70%, rgba(251,191,36,0.9) 100%)`;

  return (
    <form
      onSubmit={onSubmit}
      onClick={() => inputRef.current?.focus()}
      className="relative flex w-full max-w-2xl items-center gap-2 rounded-full border border-white/30 bg-white/10 py-2 pl-6 pr-2 text-white shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur"
    >
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="w-full bg-transparent text-base text-white placeholder:text-white/70 focus:outline-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={submitted}
        required
      />
      <button
        onClick={(e) => e.stopPropagation()}
        type="submit"
        disabled={submitted}
        className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-primary to-primary/80 px-5 py-3 text-sm font-semibold text-white transition-transform active:scale-[0.985] disabled:opacity-70"
      >
        <span>{submitted ? "Added" : "Notify Me"}</span>
        <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
      </button>
      <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
        <motion.div
          style={{
            backgroundImage,
          }}
          className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border"
        />
      </div>
    </form>
  );
};

