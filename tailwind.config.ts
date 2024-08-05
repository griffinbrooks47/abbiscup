import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'vp-nav': 'calc(100vh - 15rem)',
        'vp-full': 'calc(100vh - 9rem)',
        'section': '55vh',
        'section-mobile': '60vh',
        'section-resource': '40vh',
      },
      backgroundColor: {
        'blue-gradient': 'linear-gradient(90deg, rgba(179,228,250,1) 0%, rgba(121,209,246,1) 100%);'
      }
    },
  },
  plugins: [],
};
export default config;
