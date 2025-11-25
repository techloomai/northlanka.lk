import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * Note: With Tailwind CSS v4, most configuration is done via CSS variables in globals.css.
 * This file is kept for reference and any additional configuration needs.
 * 
 * Brand Colors (defined in app/globals.css):
 * - primary: #dc2626 (bright red) - for logo, buttons, highlights
 * - secondary: #1e293b (deep navy/charcoal) - for headings
 * - accent: #fbbf24 (warm yellow) - for icons/buttons
 * - background: #fafafa (off-white/light gray) - page background
 */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors are defined via CSS variables in globals.css
      // This allows for easy theming and customization
    },
  },
  plugins: [],
};

export default config;

