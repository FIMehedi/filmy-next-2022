import TopCast from './TopCast';

const LeftAside = ({ movie, credits }) => {
	const director = credits?.crew?.filter((cr) => cr.job === 'Director') || [];
	const novel = credits?.crew?.filter((cr) => cr.job === 'Novel') || [];
	const screenplay =
		credits?.crew?.filter((cr) => cr.job === 'Screenplay') || [];

	const topCast =
		credits?.cast?.length > 8 ? credits?.cast?.slice(0, 8) : credits?.cast;

	return (
		<div className="w-2/3">
			<h3 className="py-2 text-lg text-secondary font-normal">Overview</h3>
			<p className="text-secondary-800 text-justify font-normal text-base">
				{movie?.overview}
			</p>
			<ul className="pt-3">
				{director.length ? (
					<li className="text-base font-medium text-secondary">
						<span className="pr-2">Director :</span>
						{'\t' + director?.map((dr) => dr.name)}
					</li>
				) : (
					''
				)}
				{novel.length ? (
					<li className="text-base font-medium text-secondary">
						<span className="pr-2">Novel :</span>
						{novel?.map((nv) => nv.name)}
					</li>
				) : (
					''
				)}
				{screenplay.length ? (
					<li className="text-base font-medium text-secondary">
						<span className="pr-2">Screenplay :</span>
						{screenplay?.map((sp) => sp.name)}
					</li>
				) : (
					''
				)}
			</ul>

			<TopCast topCast={topCast} />

			{/* <MovieCards title="Similar Movies" see_more_link="/" /> */}
		</div>
	);
};

export default LeftAside;
