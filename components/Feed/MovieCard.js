import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { img_src } from '../../utils';

const MovieCard = ({ movie, media_type }) => {
	return (
		<Link href={`/${movie.media_type || media_type}/${movie.id}`}>
			<div className="rounded-2xl overflow-hidden w-48 h-72 shadow-md relative mr-4">
				<Image
					src={
						movie.poster_path
							? img_src + movie.poster_path
							: 'https://via.placeholder.com/500.png'
					}
					alt={movie.name || movie.title}
					height={350}
					width={250}
					className="hover:scale-110 transition-all h-full w-auto"
				/>
				<p className="absolute right-0 top-0 bg-blur backdrop-blur-sm px-2 py-1 text-lg font-semibold text-white rounded-bl-2xl flex items-center">
					<AiFillStar className="text-yellow-400" />
					<span className="pl-2">{movie.vote_average.toFixed(1)}</span>
				</p>
			</div>
		</Link>
	);
};
export default MovieCard;
