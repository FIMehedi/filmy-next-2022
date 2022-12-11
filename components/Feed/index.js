import Search from '../shared/Search';
import FeaturedMovie from './FeaturedMovie';
import MovieCards from './MovieCards';

const Feed = ({ trending, popularMovies, popularTvs, upcomingMovies }) => {
	const featured = trending[0];

	return (
		<div className="w-[calc(100%-475px)]">
			<Search />
			<FeaturedMovie movie={featured} />
			<MovieCards movies={trending} title="Trending" see_more_link="/link" />
			<MovieCards
				movies={popularMovies}
				title="Popular Movies"
				see_more_link="/movies"
				media_type="movie"
			/>
			<MovieCards
				movies={popularTvs}
				title="Popular Tv Series"
				see_more_link="/link"
				media_type="tv"
			/>
			<MovieCards
				movies={upcomingMovies}
				title="Upcoming Movies"
				see_more_link="/link"
				media_type="movie"
			/>
		</div>
	);
};

export default Feed;
