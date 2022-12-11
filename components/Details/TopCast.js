import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { img_src } from '../../utils';
import CustomSlick from '../shared/CustomSlick';

const TopCast = ({ topCast }) => {
	const additional_setting = {
		infinite: false,
		autoplay: false,
		slidesToScroll: 1,
		slidesToShow: 5,
	};

	return (
		<>
			<h3 className="py-2 text-lg text-secondary font-normal">
				Top Cast <FaAngleRight className="inline" />
			</h3>
			<CustomSlick additional_setting={additional_setting}>
				{topCast?.map((cast) => (
					<div key={cast.id} className="mr-4">
						<div className="rounded-full overflow-hidden w-36 h-36 mx-auto mb-2">
							<Image
								src={
									cast.profile_path
										? img_src + cast.profile_path
										: 'https://via.placeholder.com/500.png'
								}
								alt={cast.name}
								width={300}
								height={300}
								priority
							/>
						</div>
						<h4 className="text-center text-secondary">{cast.name}</h4>
						<p className="text-center text-secondary-700">{cast.character}</p>
					</div>
				))}
			</CustomSlick>
		</>
	);
};

export default TopCast;
