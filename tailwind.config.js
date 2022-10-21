/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#013479",
				"primary-pink": "#FF9CA2",
				"secondary-pink": "#FFF1F2",
				"tertiary-pink": "#FAEFF1",
				"primary-gray": "#6C6666",
				"secondary-gray": "#BCC8D8",
				"tertiary-gray": "#FAFAFA",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			rotate: {
				60: "60deg",
			},
		},
	},
	plugins: [],
};
