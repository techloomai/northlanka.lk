"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";

export function Notify() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            Stay Updated
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our full website is on the way. Be the first to know when we launch.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
              disabled={submitted}
            />
            <Button
              type="submit"
              size="lg"
              disabled={submitted}
              className="w-full sm:w-auto"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Thanks!
                </>
              ) : (
                <>
                  <Mail className="h-5 w-5" />
                  Notify Me
                </>
              )}
            </Button>
          </form>
          {submitted && (
            <p className="mt-4 text-sm text-primary">
              Thanks! We&apos;ll keep you posted.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

