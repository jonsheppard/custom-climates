/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

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
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				heading: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		typography,
	],
}; 