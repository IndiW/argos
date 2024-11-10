/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		fontSize: {
    			xs: '0.4rem',
    			sm: '0.8rem',
    			base: '1rem',
    			xl: '1.5rem',
    			'2xl': '2rem',
    			'3xl': '2.8rem',
    			'4xl': '4rem',
    			'5xl': '3.052rem'
    		},
    		letterSpacing: {
    			normal: '0em',
    			wide: '0.3em',
    			wider: '0.6em',
    			widest: '9em'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	}
    },
    plugins: [require("tailwindcss-animate")],
} 