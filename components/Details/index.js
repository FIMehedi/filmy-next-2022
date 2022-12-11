import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { img_src, internationalizeNumber } from '../../utils';
import DetailsPageNotFound from '../shared/DetailsNotFound';
import DetailsPageSkeleton from '../shared/DetailsPageSkeleton';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

const Details = ({ movie, credits }) => {
	const minToHour = (minutes) => {
		const hour = Math.floor(minutes / 60);
		const rest_minutes = minutes % 60;
		return `${hour}h ${rest_minutes}m`;
	};

	if (!movie) return <DetailsPageSkeleton />;

	if (movie.success === false)
		return <DetailsPageNotFound msg={movie.status_message} />;

	return (
		<div className="px-5">
			<div className="max-h-[350px] rounded-2xl overflow-hidden relative mb-4">
				<Image
					src={
						movie?.backdrop_path
							? img_src + movie.backdrop_path
							: 'https://via.placeholder.com/500.png'
					}
					alt="Alt"
					width={600}
					height={600}
					className="w-full h-auto"
					priority
				/>
			</div>
			<div className="p-5 bg-primary-alt rounded-xl">
				<div className="flex justify-between pb-1">
					<h1 className="text-secondary text-xl font-normal flex items-center">
						{movie?.title || movie?.name}
						<BsDot className="inline" />
						{movie?.release_date?.slice(0, 4) ||
							movie?.first_air_date?.slice(0, 4)}
						<BsDot className="inline" />
						{movie?.runtime && minToHour(movie?.runtime)}
						{movie?.runtime && <BsDot className="inline" />}
						{movie?.genres?.map((genre) => (
							<span
								key={genre.id}
								className="text-sm border border-secondary px-2 py-1 rounded-2xl mr-2"
							>
								{genre.name}
							</span>
						))}
					</h1>
					<div className="flex items-center">
						<AiFillStar className="text-xl text-yellow-500 inline-block" />
						<span className="text-secondary text-lg font-normal px-1">
							{movie?.vote_average?.toFixed(1)}
						</span>
						<span className="text-secondary-600">
							| {internationalizeNumber(movie?.vote_count)}
						</span>
					</div>
				</div>

				<div className="flex">
					<LeftAside movie={movie} credits={credits} />
					<RightAside movie={movie} />
				</div>
			</div>
		</div>
	);
};
export default Details;
