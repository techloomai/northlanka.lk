"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

type NavLink = {
  title: string;
  sublinks: { title: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  {
    title: "Services",
    sublinks: [
      { title: "Air Tickets", href: "#services" },
      { title: "Visa Services", href: "#services" },
      { title: "Tours & Hotels", href: "#services" },
    ],
  },
  {
    title: "Partners",
    sublinks: [
      { title: "Airlines We Work With", href: "#airlines" },
      { title: "Tour Collaborations", href: "#services" },
    ],
  },
  {
    title: "Contact",
    sublinks: [
      { title: "Call Our Agent", href: "#contact" },
      { title: "Email Us", href: "#contact" },
    ],
  },
  {
    title: "Updates",
    sublinks: [
      { title: "Notify Me", href: "#stay-updated" },
      { title: "WhatsApp", href: "https://wa.me/94710780240" },
    ],
  },
  {
    title: "About",
    sublinks: [
      { title: "Home Based Service", href: "#contact" },
      { title: "Registration Status", href: "#contact" },
    ],
  },
];

export function Header() {
  return (
    <RoundedDrawerNav
      links={NAV_LINKS}
      navBackground="bg-secondary"
      bodyBackground="bg-background/0"
    />
  );
}

const RoundedDrawerNav = ({
  links,
  navBackground,
  bodyBackground,
  children,
}: {
  links: NavLink[];
  navBackground: string;
  bodyBackground: string;
  children?: ReactNode;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSublinks = useMemo(() => {
    if (!hovered) return [];
    const link = links.find((l) => l.title === hovered);
    return link ? link.sublinks : [];
  }, [hovered, links]);

  return (
    <>
      <nav
        onMouseLeave={() => setHovered(null)}
        className={`${navBackground} sticky top-0 z-50 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-secondary/90`}
      >
        <div className="mx-auto flex max-w-6xl items-start justify-between">
          <div className="flex items-start gap-6">
            <Logo />
            <DesktopLinks
              links={links}
              setHovered={setHovered}
              hovered={hovered}
              activeSublinks={activeSublinks}
            />
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+94710780240"
              className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent md:inline-flex"
            >
              Call +94 71 078 0240
            </Link>
            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="text-2xl text-white md:hidden"
              aria-label="Toggle menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <MobileLinks links={links} open={mobileNavOpen} />
      </nav>
      {children && (
        <motion.main layout className={`${navBackground} px-2 pb-2`}>
          <div className={`${bodyBackground} rounded-3xl`}>{children}</div>
        </motion.main>
      )}
    </>
  );
};

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 text-white">
    <div className="relative h-10 w-10">
      <Image
        src="/north-lanka-logo.png"
        alt="North Lanka Tours & Travels"
        fill
        className="object-contain"
        priority
      />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
        North Lanka
      </span>
      <span className="text-lg font-bold">Tours & Travels</span>
    </div>
  </Link>
);

const DesktopLinks = ({
  links,
  setHovered,
  hovered,
  activeSublinks,
}: {
  links: NavLink[];
  setHovered: Dispatch<SetStateAction<string | null>>;
  hovered: string | null;
  activeSublinks: NavLink["sublinks"];
}) => (
  <div className="hidden md:block">
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <button
          key={link.title}
          onMouseEnter={() => setHovered(link.title)}
          className={`text-sm font-semibold text-white transition hover:text-accent ${
            hovered === link.title ? "text-accent" : ""
          }`}
        >
          {link.title}
        </button>
      ))}
    </div>
    <AnimatePresence mode="popLayout">
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="space-y-3 py-4"
        >
          {activeSublinks.map((sublink) => (
            <Link
              key={sublink.title}
              href={sublink.href}
              className="block text-lg font-medium text-white transition hover:text-accent"
            >
              {sublink.title}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileLinks = ({
  links,
  open,
}: {
  links: NavLink[];
  open: boolean;
}) => (
  <AnimatePresence mode="popLayout">
    {open && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-4 grid grid-cols-2 gap-6 md:hidden"
      >
        {links.map((link) => (
          <div key={link.title} className="space-y-2">
            <span className="text-sm font-semibold text-white">
              {link.title}
            </span>
            {link.sublinks.map((sublink) => (
              <Link
                key={sublink.title}
                href={sublink.href}
                className="block text-sm text-white/70"
              >
                {sublink.title}
              </Link>
            ))}
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

