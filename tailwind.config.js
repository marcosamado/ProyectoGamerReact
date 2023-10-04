/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brownMain: "rgb(34 34 34)",
                orangeMain: "rgb(203 20 24)" 
            }
        },
    },
    plugins: [],
};
