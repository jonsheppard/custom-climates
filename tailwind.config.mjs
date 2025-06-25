/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-blue': '#0955A9',
				'brand-black': '#000000',
				'brand-white': '#FFFFFF',
			},
			fontFamily: {
				'high-speed': ['High Speed', 'Arial Black', 'Helvetica Neue', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	],
} 