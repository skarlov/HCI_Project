const colors = require('tailwindcss/colors')

module.exports = {
    // mode: 'jit',
    // purge: [
    //     './pages/**/*.{js,ts,jsx,tsx}',
    //     './components/**/*.{js,ts,jsx,tsx}',
    //     './modules/**/*.{js,ts,jsx,tsx}',
    // ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
                'raleway': ['"Raleway"', 'light', 'bold'],
                'shadow': ['"Shadow"'],
            },

            colors: {
                orange: colors.orange,
            },

            backgroundImage: {
                'web-main': "url('../assets/spiderweb.png')",
                'web-main-2': "url('../assets/spiderwebother.png')",
                'web-main-3': "url('../assets/spiderwebotherother.png')",
                'web-2': "url('../assets/spiderweb-2.png')",
                'web-3': "url('../assets/spiderweb-3.png')",
                'bats-white': "url('../assets/bats-white.png')",
                'web-footer-black': "url('../assets/web_footer_black.png')"
            },

            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 10)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
