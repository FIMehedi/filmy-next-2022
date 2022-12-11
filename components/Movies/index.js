import { useEffect, useState } from 'react';
import { getPopular } from '../../services/TMDB';
import MovieCard from '../Feed/MovieCard';
import Search from '../shared/Search';

const Movies = (params) => {
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState(params.movies);

	useEffect(() => {
		(async () => {
			if (page > 1) {
				const newMovies = await getPopular(params.media_type, page);
				const allMovies = [...movies, ...newMovies];
				setMovies(allMovies);
			}
		})();
	}, [page, params.media_type]);

	return (
		<div className="w-[calc(100%-475px)]">
			<Search />
			<h3 className="text-2xl font-medium text-secondary px-4 pb-4">
				{params.title}
			</h3>
			<div className="px-4 flex gap-2 gap-y-4 flex-wrap justify-between">
				{movies?.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						media_type={params.media_type}
					/>
				))}
			</div>
			<div className="text-center">
				<button
					onClick={() => setPage(page + 1)}
					className="px-4 py-2 bg-secondary text-primary font-medium text-lg rounded-md my-4"
				>
					Load More
				</button>
			</div>
		</div>
	);
};

export default Movies;
