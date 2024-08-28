/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "chatsy-dark": "#111",
                "chatsy-secondary-dark": "#222",
                "chatsy-ternary-dark": "#333",
                "chatsy-orange-primary": "#c46b23",
                "chatsy-almost-black": "#0a0a0a",
            },
            keyframes: {
                "beat": {
                    "0%, 100%": {
                        "width": "100px",
                        "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
                    },
                    "50%": {
                        "width": "160px",
                        "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
                    },
                }
            },
            animation: {
                "beat": "beat 1s infinite",
            },
        },
    },
    plugins: [],
};

