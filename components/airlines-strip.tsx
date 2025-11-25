"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Airline logo data with image URLs
// Using a CDN service for airline logos - these can be replaced with actual logo files if needed
const airlinesTop = [
  {
    name: "SriLankan Airlines",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/SriLankan-Airlines-Logo.png",
  },
  {
    name: "Emirates",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Emirates-Logo.png",
  },
  {
    name: "Qatar Airways",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Qatar-Airways-Logo.png",
  },
  {
    name: "Etihad Airways",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Etihad-Airways-Logo.png",
  },
  {
    name: "British Airways",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/British-Airways-Logo.png",
  },
  {
    name: "Lufthansa",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Lufthansa-Logo.png",
  },
  {
    name: "Turkish Airlines",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Turkish-Airlines-Logo.png",
  },
  {
    name: "Air Canada",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Air-Canada-Logo.png",
  },
];

const airlinesBottom = [
  {
    name: "Japan Airlines",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Japan-Airlines-Logo.png",
  },
  {
    name: "Cathay Pacific",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Cathay-Pacific-Logo.png",
  },
  {
    name: "Qantas",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Qantas-Logo.png",
  },
  {
    name: "Air India",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Air-India-Logo.png",
  },
  {
    name: "IndiGo",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/IndiGo-Logo.png",
  },
  {
    name: "SpiceJet",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/SpiceJet-Logo.png",
  },
  {
    name: "China Eastern",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/China-Eastern-Logo.png",
  },
  {
    name: "Gulf Air",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Gulf-Air-Logo.png",
  },
];

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="w-24 md:w-32 h-24 md:h-32 flex justify-center items-center hover:bg-primary/10 text-secondary transition-colors rounded-lg border border-border/50 bg-white/50 backdrop-blur-sm">
      <Image
        src={logo}
        alt={name}
        width={80}
        height={80}
        className="object-contain p-2 grayscale hover:grayscale-0 transition-all"
        unoptimized
      />
    </div>
  );
};

const LogoItemsTop = () => (
  <>
    {airlinesTop.map((airline) => (
      <LogoItem key={airline.name} name={airline.name} logo={airline.logo} />
    ))}
  </>
);

const LogoItemsBottom = () => (
  <>
    {airlinesBottom.map((airline) => (
      <LogoItem key={airline.name} name={airline.name} logo={airline.logo} />
    ))}
  </>
);

export function AirlinesStrip() {
  return (
    <section id="airlines" className="bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6 mb-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          Airlines We Work With
        </h2>
      </div>
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
}

