export const internationalizeNumber = (value) => {
	return Math.abs(Number(value)) >= 1e9 // if gather than 1 billion
		? (Math.abs(Number(value)) / 1e9).toFixed(2) + 'B'
		: Math.abs(Number(value)) >= 1e6 // else if gather than 1 million
		? (Math.abs(Number(value)) / 1e6).toFixed(2) + 'M'
		: Math.abs(Number(value)) >= 1e3 // else if gather than 1 thousand
		? (Math.abs(Number(value)) / 1e3).toFixed(2) + 'K'
		: Math.abs(Number(value)); // else
};

export const img_src = 'https://image.tmdb.org/t/p/w500';
