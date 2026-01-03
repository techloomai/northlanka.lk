import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.northlanka.lk";
const SITE_NAME = "North Lanka Tours & Travels";
const DEFAULT_DESCRIPTION =
  "North Lanka Tours & Travels in Jaffna, Sri Lanka. Book air tickets, visa services, and custom tour arrangements. Explore, Experience, Enjoy!";
const DEFAULT_OG_IMAGE = `${SITE_URL}/north-lanka-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "travel agency Jaffna",
    "air tickets Sri Lanka",
    "visa services",
    "tour arrangements",
    "hotel bookings",
    "North Lanka Tours",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#dc2626" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "North Lanka Tours & Travels | Air Tickets, Visa & Tours – Coming Soon",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "North Lanka Tours & Travels – Sri Lanka travel and ticketing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Lanka Tours & Travels | Air Tickets, Visa & Tours – Coming Soon",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "North Lanka Tours & Travels – Sri Lanka travel and ticketing services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "North Lanka Tours & Travels",
        url: SITE_URL,
        logo: `${SITE_URL}/north-lanka-logo.png`,
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
