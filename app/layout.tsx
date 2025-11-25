import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "North Lanka Tours & Travels | Air Tickets, Visa & Tours – Coming Soon",
  description:
    "North Lanka Tours & Travels in Jaffna, Sri Lanka. Book air tickets, visa services, and custom tour arrangements. Explore, Experience, Enjoy!",
  keywords: [
    "travel agency Jaffna",
    "air tickets Sri Lanka",
    "visa services",
    "tour arrangements",
    "hotel bookings",
    "North Lanka Tours",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
