import Link from 'next/link';
import CustomSlick from '../shared/CustomSlick';
import MovieCard from './MovieCard';

const MovieCards = ({ movies, title, see_more_link, media_type }) => {

	return (
		<div className="m-5 rounded-xl bg-primary-alt">
			<div className="flex justify-between items-center py-2 p-4">
				<h2 className="text-2xl font-medium text-secondary">{title}</h2>
				<Link href={see_more_link} className="text-secondary-700">
					See all
				</Link>
			</div>
			<div className="px-4 pb-4">
				<CustomSlick>
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} media_type={media_type} />
					))}
				</CustomSlick>
			</div>
		</div>
	);
};
export default MovieCards;
