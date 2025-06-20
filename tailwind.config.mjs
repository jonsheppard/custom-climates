/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					blue: '#0D47A1',
					orange: '#F97316',
				},
				neutral: {
					light: '#F1F5F9', // slate-100
					medium: '#475569', // slate-600
					dark: '#1E293B',   // slate-800
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}; 