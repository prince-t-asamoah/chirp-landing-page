/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'dodger-blue': {
                    100: '#1da1f2',
                    90: '#34aaf3',
                    80: '#4ab4f5',
                    70: '#61bdf6',
                    60: '#77c7f7',
                    50: '#8ed0f9',
                    40: '#a5d9fa',
                    30: '#bbe3fb',
                    20: '#d2ecfc',
                    10: '#e8f6fe',
                },
            },
        },
    },
    plugins: [],
};
