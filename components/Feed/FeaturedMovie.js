import Image from 'next/image';
import { AiFillInfoCircle } from 'react-icons/ai';
import { img_src } from '../../utils';
import Button from '../shared/Button';

const FeaturedMovie = ({ movie }) => {
	return (
		<div className="px-5">
			<div className="max-h-80 rounded-2xl overflow-hidden relative">
				<Image
					src={
						movie.backdrop_path
							? img_src + movie.backdrop_path
							: 'https://via.placeholder.com/100.png'
					}
					alt="Alt"
					height={500}
					width={500}
					className="w-full h-auto"
					priority
				/>
				<div className="p-10 w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
					<div className="flex justify-between items-end w-full pt-48">
						<div className="w-2/3">
							<h1 className="text-2xl font-semibold text-secondary pb-2">
								{movie.title || movie.name}
							</h1>
							<p className="text-secondary-600 text-justify text-sm">
								{movie.overview.length > 150
									? movie.overview.slice(0, 150) + '...'
									: movie.overview}
							</p>
						</div>
						<div className="">
							<Button
								btn_text="More Info"
								btn_link={`/${movie.media_type}/${movie.id}`}
								btn_icon={<AiFillInfoCircle className="mr-2" />}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedMovie;
