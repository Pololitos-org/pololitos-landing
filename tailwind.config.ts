import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Pololitos Brand Colors
        'brand-blue': '#4949e9',
        'brand-lime': '#dcf343',
        'brand-red': '#fe5a51',
        'brand-yellow': '#ffd524',
        'brand-purple': '#9d86fa',
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
