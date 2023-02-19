/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#36393E',
                secondary: '#D0d3dc',
                dark: '#0f172a',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
