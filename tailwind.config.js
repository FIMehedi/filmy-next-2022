/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

const colorPalette = {
	primary: {
		primary: 'rgba(3, 37, 65, 1)',
		'primary-100': 'rgba(3, 37, 65, 0.1)',
		'primary-200': 'rgba(3, 37, 65, 0.2)',
		'primary-300': 'rgba(3, 37, 65, 0.3)',
		'primary-400': 'rgba(3, 37, 65, 0.4)',
		'primary-500': 'rgba(3, 37, 65, 0.5)',
		'primary-600': 'rgba(3, 37, 65, 0.6)',
		'primary-700': 'rgba(3, 37, 65, 0.7)',
		'primary-800': 'rgba(3, 37, 65, 0.8)',
		'primary-900': 'rgba(3, 37, 65, 0.9)',
		'primary-alt': 'rgba(22, 57, 86, 0.6)',
		secondary: 'rgba(61, 210, 204, 1)',
		'secondary-100': 'rgba(61, 210, 204, 0.1)',
		'secondary-200': 'rgba(61, 210, 204, 0.2)',
		'secondary-300': 'rgba(61, 210, 204, 0.3)',
		'secondary-400': 'rgba(61, 210, 204, 0.4)',
		'secondary-500': 'rgba(61, 210, 204, 0.5)',
		'secondary-600': 'rgba(61, 210, 204, 0.6)',
		'secondary-700': 'rgba(61, 210, 204, 0.7)',
		'secondary-800': 'rgba(61, 210, 204, 0.8)',
		'secondary-900': 'rgba(61, 210, 204, 0.9)',
		muted: 'rgba(102, 102, 102, 1)',
		blur: 'rgba(232, 232, 232, 0.15)',
	},
};

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				...colorPalette.primary,
			},
			colors: {
				...colorPalette.primary,
			},
			fontFamily: {
				poppins: ['Poppins', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
