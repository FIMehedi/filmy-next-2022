export const API = process.env.API;
export const API_KEY = process.env.API_KEY;

const fetchData = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data.results ? data.results : data;
	} catch (error) {
		console.log(error.message);
	}
};

export const getTrending = () => {
	return fetchData(`${API}trending/all/week?api_key=${API_KEY}`);
};

export const getPopular = (type, page = 1) => {
	return fetchData(`${API}${type}/popular?api_key=${API_KEY}&page=${page}`);
};

export const getUpcoming = (page = 1) => {
	return fetchData(`${API}movie/upcoming?api_key=${API_KEY}&page=${page}`);
};

export const getDetails = (type, id) => {
	return fetchData(`${API}${type}/${id}?api_key=${API_KEY}`);
};

export const getCredits = (type, id) => {
	return fetchData(`${API}${type}/${id}/credits?api_key=${API_KEY}`);
};

export const getLatest = (type) => {
	return fetchData(`${API}${type}/latest?api_key=${API_KEY}`);
};
