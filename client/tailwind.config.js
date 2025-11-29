/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0052FF', // Example blue
                secondary: '#0A0F29', // Dark blue/black
                accent: '#00D2FF', // Light blue
                success: '#00C853',
                danger: '#FF3D00',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
