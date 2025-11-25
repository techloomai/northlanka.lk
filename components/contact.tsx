"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const tabs = [
  {
    id: 1,
    title: "Phone",
    icon: Phone,
    heading: "Talk to Our Travel Coordinators",
    content: (
      <>
        <a href="tel:+94710780240" className="text-primary hover:underline">
          +94 71 078 0240
        </a>
        <br />
        <a href="tel:+94212223996" className="text-primary hover:underline">
          +94 21 222 3996
        </a>
      </>
    ),
    note: "WhatsApp & calls available daily 9:00 AM – 9:00 PM IST.",
  },
  {
    id: 2,
    title: "Email",
    icon: Mail,
    heading: "Email Our Travel Desk",
    content: (
      <a
        href="mailto:northlankatvls@gmail.com"
        className="text-primary hover:underline"
      >
        northlankatvls@gmail.com
      </a>
    ),
    note: "Share your preferred destination, travel dates, and we’ll plan the rest.",
  },
  {
    id: 3,
    title: "Location",
    icon: MapPin,
    heading: "Home-Based Service Hub",
    content: (
      <p className="text-secondary">
        Seerani Junction, Keerimalai Road,
        <br />
        Sandilipay 60098, Jaffna, Sri Lanka.
      </p>
    ),
    note: "By appointment only. Contact us to arrange a visit or consultation.",
  },
  {
    id: 4,
    title: "Website",
    icon: Globe,
    heading: "Official Website",
    content: (
      <Link
        href="https://www.northlanka.lk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        www.northlanka.lk
      </Link>
    ),
    note: "Our full website relaunch is underway. Bookmark us for updates.",
  },
];

export function Contact() {
  const [selected, setSelected] = useState(1);
  const activeTab = tabs.find((tab) => tab.id === selected) ?? tabs[0];
  const ActiveIcon = activeTab.icon;

  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl">
          Contact & Location
        </h2>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`rounded-lg transition-colors ${
                  selected === tab.id ? "bg-primary" : "bg-secondary"
                }`}
              >
                <button
                  onClick={() => setSelected(tab.id)}
                  className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium uppercase tracking-wide transition-all md:text-sm ${
                    selected === tab.id
                      ? "-translate-y-1 border-primary bg-white text-primary"
                      : "border-secondary bg-white text-secondary hover:-rotate-2"
                  }`}
                >
                  {tab.title}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-secondary">
              <ActiveIcon className="h-6 w-6 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {activeTab.title}
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-secondary">
              {activeTab.heading}
            </h3>
            <div className="mt-4 text-lg text-muted-foreground">
              {activeTab.content}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{activeTab.note}</p>
          </div>

          <div className="mt-6 rounded-lg border bg-background p-4 text-sm text-muted-foreground">
            <strong className="text-secondary">Services:</strong> Air Tickets,
            Visa services, Tour & Hotel Arrangements.
            <br />
            <em className="text-xs">(Home Based Service)</em>
          </div>
        </div>
      </div>
    </section>
  );
}

