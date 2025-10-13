import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0C0F22',
        'midnight-blue': '#0F1230',
        'electric-purple': '#7C5CFF',
        'neon-blue': '#00B2FF',
        
        
      },
    },
  },
  plugins: [],
} satisfies Config;
