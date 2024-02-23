/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('./images/logical_hero.webp')",
			},
			colors: {
				principal: '#b91c1c',
				secondary: '#F3F3F3'
			}
		},
	},
	plugins: [],
}
