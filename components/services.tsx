"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Air Tickets",
    description:
      "Book international and domestic flights with competitive prices. We work with major airlines worldwide to get you the best deals for your travel needs. From economy to business class, we ensure you find the perfect flight at the right price.",
    imgSrc:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Visa Services",
    description:
      "Expert assistance with visitor, student, and business visa applications. We guide you through the entire process to ensure smooth visa approvals. Our team stays updated with the latest requirements and regulations for destinations worldwide.",
    imgSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Tours & Hotel Arrangements",
    description:
      "Custom itineraries tailored to your preferences and hotel bookings at the best rates. Experience unforgettable journeys with our personalized tour packages. From luxury resorts to budget-friendly stays, we arrange everything for your perfect vacation.",
    imgSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
  },
];

const Solution = ({
  title,
  description,
  index,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  imgSrc: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              opacity: 1,
            }}
            className="text-xl font-medium w-fit bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 text-secondary/80"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-linear-to-r from-primary to-primary/90 text-white"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
      className="absolute inset-0 z-10 bg-linear-to-r from-primary to-primary/90"
      />
      <div className="absolute inset-0 z-0 bg-gray-200" />
    </div>
  );
};

export function Services() {
  const [open, setOpen] = useState(servicesData[0].id);
  const imgSrc = servicesData.find((s) => s.id === open)?.imgSrc;

  return (
    <section id="services" className="px-8 py-12 md:py-20 bg-background">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <h3 className="text-4xl font-bold mb-8 text-secondary">What We Do</h3>
          <div className="flex flex-col gap-4">
            {servicesData.map((service) => {
              return (
                <Solution
                  {...service}
                  key={service.id}
                  open={open}
                  setOpen={setOpen}
                  index={service.id}
                />
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            <em>Home Based Service</em>
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl aspect-4/3 lg:aspect-auto lg:h-[600px]"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

