import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: [
        {
          ligthTheme: {
            "primary": "#c084fc",
            "secondary": "#facc15",
            "accent": "#fda4af",
            "neutral": "#6b7280",
            "base-100": "#f3f4f6",
            "info": "#5b21b6",
            "success": "#00ff00",
            "warning": "#ef4444",
            "error": "#ff0000",
          },
        },
      ],
    },
  },
  plugins: [daisyui],
};