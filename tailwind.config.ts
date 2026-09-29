import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            screens: { lg: "960px" }, // original breakpoint was 960px
            colors: {
                bg: "#070a14",
                bg2: "#0b1020",
                panel: "#10162a",
                panel2: "#141c33",
                line: "rgba(255,255,255,.08)",
                line2: "rgba(255,255,255,.14)",
                ink: "#eaf0ff",
                muted: "#9aa6c4",
                muted2: "#6f79b9",
                brand: "#7c5cff",
                brand2: "#22d3ee",
                brand3: "#ff7ad9",
                accent: "#5eead4",
                warn: "#fbbf24",
                green: "#34d399",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
            },
            backgroundImage: {
                grad: "linear-gradient(120deg,#7c5cff 0%,#22d3ee 55%,#5eead4 100%)",
                gradSoft: "linear-gradient(120deg,rgba(124,92,255,.18),rgba(34,211,238,.12))",
                glow:
                    "radial-gradient(1200px 700px at 80% -10%,rgba(124,92,255,.20),transparent 60%),radial-gradient(900px 600px at 0% 10%,rgba(34,211,238,.14),transparent 55%)",
            },
            boxShadow: {
                card: "0 24px 60px -22px rgba(0,0,0,.7)",
            },
            keyframes: {
                dot: {
                    "0%,60%,100%": { transform: "translateY(0)", opacity: ".5" },
                    "30%": { transform: "translateY(-5px)", opacity: "1" },
                },
                floaty: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            animation: {
                dot: "dot 1.2s infinite",
                floaty: "floaty 6s ease-in-out infinite",
                floaty2: "floaty 7s ease-in-out .5s infinite",
            },
        },
    },
    plugins: [],
};

export default config;