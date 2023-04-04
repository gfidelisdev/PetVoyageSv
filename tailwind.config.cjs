/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark']
	}
};
