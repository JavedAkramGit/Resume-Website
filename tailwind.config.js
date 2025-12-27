/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'night-blue': '#030208',
                'aura-cyan': '#00B8CC',
                'aura-purple': '#6629A3',
                'aura-magenta': '#CC29A3',
                midnight: "#030712",
                "neon-cyan": "#22D3EE",
                "neon-purple": "#6366F1",
            },
            fontFamily: {
                sans: ['Space Grotesk', 'Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 10s infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00E6FF, 0 0 10px #00E6FF' },
                    '100%': { boxShadow: '0 0 20px #00E6FF, 0 0 30px #00E6FF' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
            },
        },
    },
    plugins: [],
}
