import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./HoverCardDemo.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purplebg': '#240046',
        'cardpurple': '#03045e',
        'buttonpurple': '#7A62D9',
        'buttoncolor': '#4DC7D7',
      },
      keyframes: {
				slideUpAndFade: {
					"0%": { opacity: "0", transform: "translateY(2px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					"0%": { opacity: "0", transform: "translateX(-2px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideDownAndFade: {
					"0%": { opacity: "0", transform: "translateY(-2px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					"0%": { opacity: "0", transform: "translateX(2px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
				slideDownAndFade:
					"slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
				slideRightAndFade:
					"slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
			},
      
     
    },
  },
  plugins: [],
};
export default config;
