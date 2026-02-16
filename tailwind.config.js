/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tengri-blue': '#003366',
                'sky-blue': '#4F97A3',
                'sagaalgan-white': '#F5F5F5',
                'steppe-sand': '#D2B48C',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
