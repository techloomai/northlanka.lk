"use client";

import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          Contact & Location
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-secondary">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+94710780240"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +94 71 078 0240
                    </a>
                    <br />
                    <a
                      href="tel:+94212223996"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +94 21 222 3996
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:northlankatvls@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      northlankatvls@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Website</p>
                    <Link
                      href="https://www.northlanka.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      www.northlanka.lk
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Seerani Junction, Keerimalai Road,
                      <br />
                      Sandilipay 60098, Jaffna, Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Services:</strong> Air
                Tickets, Visa services, Tour & Hotel Arrangements.
                <br />
                <em className="text-xs">(Home Based Service)</em>
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="flex flex-col">
            <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed bg-background">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="mb-2 font-semibold text-secondary">
                  Google Map Coming Soon
                </p>
                <p className="text-sm text-muted-foreground">
                  Seerani Junction, Keerimalai Road,
                  <br />
                  Sandilipay, Jaffna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

