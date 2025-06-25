/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	corePlugins: {
		container: false, // Disable Tailwind's container completely
	},
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
		// Custom container plugin
		function({ addComponents }) {
			addComponents({
				'.container': {
					width: '100%',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: '1rem',
					paddingRight: '1rem',
					'@media (min-width: 1024px)': {
						maxWidth: '1024px',
					},
					'@media (min-width: 1280px)': {
						maxWidth: '1280px',
					},
				}
			})
		}
	],
} 