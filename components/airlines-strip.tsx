"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Local airline assets keep the marquee independent of third-party image hosts.
const airlinesTop = [
  {
    name: "SriLankan Airlines",
    logo: "/airlines/srilankan.png",
  },
  {
    name: "Emirates",
    logo: "/airlines/emirates.png",
  },
  {
    name: "Qatar Airways",
    logo: "/airlines/qatar.png",
  },
  {
    name: "Etihad Airways",
    logo: "/airlines/etihad.png",
  },
  {
    name: "British Airways",
    logo: "/airlines/british-airways.png",
  },
  {
    name: "Lufthansa",
    logo: "/airlines/lufthansa.png",
  },
  {
    name: "Turkish Airlines",
    logo: "/airlines/turkish.png",
  },
  {
    name: "Air Canada",
    logo: "/airlines/air-canada.png",
  },
];

const airlinesBottom = [
  {
    name: "Japan Airlines",
    logo: "/airlines/japan-airlines.png",
  },
  {
    name: "Cathay Pacific",
    logo: "/airlines/cathay-pacific.png",
  },
  {
    name: "Qantas",
    logo: "/airlines/qantas.png",
  },
  {
    name: "Air India",
    logo: "/airlines/air-india.png",
  },
  {
    name: "IndiGo",
    logo: "/airlines/indigo.png",
  },
  {
    name: "SpiceJet",
    logo: "/airlines/spicejet.png",
  },
  {
    name: "China Eastern",
    logo: "/airlines/china-eastern.png",
  },
  {
    name: "Gulf Air",
    logo: "/airlines/gulf-air.png",
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
      className="flex shrink-0 gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="w-32 md:w-40 h-24 md:h-28 shrink-0 p-3 flex justify-center items-center hover:bg-primary/10 text-secondary transition-colors rounded-lg border border-border/50 bg-white/50 backdrop-blur-sm">
      <Image
        src={logo}
        alt={name}
        width={200}
        height={80}
        className="h-16 w-full object-contain"
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

