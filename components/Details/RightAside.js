import { internationalizeNumber } from '../../utils';

const RightAside = ({ movie }) => {
	let languageNames = new Intl.DisplayNames(['en'], { type: 'language' });

	const getReleaseDate = (date) => {
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const YYYY = date?.slice(0, 4);
		const MM = date?.slice(5, 7);
		const DD = date?.slice(8, 10);

		return `${monthNames[parseInt(MM) - 1]} ${DD}, ${YYYY}`;
	};

	return (
		<div className="w-1/3">
			<div className="pl-8 pb-3">
				<h3 className="text-lg text-secondary">Status</h3>
				<p className="text-secondary text-base">{movie?.status}</p>
			</div>
			<div className="pl-8 pb-3">
				<h3 className="text-lg text-secondary">Release Date</h3>
				<p className="text-secondary text-base">
					{getReleaseDate(movie?.release_date || movie?.first_air_date)}
				</p>
			</div>
			{movie?.budget ? (
				<div className="pl-8 pb-3">
					<h3 className="text-lg text-secondary">Budget</h3>
					<p className="text-secondary text-base">
						{internationalizeNumber(movie?.budget)}
					</p>
				</div>
			) : (
				''
			)}
			{movie?.revenue ? (
				<div className="pl-8 pb-3">
					<h3 className="text-lg text-secondary">Revenue</h3>
					<p className="text-secondary text-base">
						{internationalizeNumber(movie?.revenue)}
					</p>
				</div>
			) : (
				''
			)}
			<div className="pl-8 pb-3">
				<h3 className="text-lg text-secondary">Original Language</h3>
				<p className="text-secondary text-base">
					{movie?.original_language
						? languageNames.of(movie?.original_language)
						: 'Unknown'}
				</p>
			</div>
		</div>
	);
};

export default RightAside;
