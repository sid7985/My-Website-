import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#00B8A9",
                    dark: "#009688",
                    light: "#4DD0C4",
                },
                accent: {
                    DEFAULT: "#FF6B35",
                    dark: "#E55A2B",
                    light: "#FF8A5C",
                },
                background: {
                    DEFAULT: "#0F172A",
                    light: "#1E293B",
                    lighter: "#334155",
                },
                surface: {
                    DEFAULT: "#1E293B",
                    light: "#334155",
                },
                status: {
                    active: "#22C55E",
                    beta: "#EAB308",
                    archived: "#EF4444",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "fade-in-up": "fadeInUp 0.5s ease-out",
                "slide-in-right": "slideInRight 0.5s ease-out",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                gradient: "gradient 8s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            backgroundSize: {
                "300%": "300%",
            },
        },
    },
    plugins: [],
};

export default config;
