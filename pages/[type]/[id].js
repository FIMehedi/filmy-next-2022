import Head from 'next/head';
import Details from '../../components/Details';
import LeftSideNav from '../../components/LeftAside';
import DarkMoodToggler from '../../components/shared/DarkMoodToggler';
import Search from '../../components/shared/Search';
import { getCredits, getDetails } from '../../services/TMDB';

const DetailsPage = ({ movieDetails, credits }) => {
	return (
		<>
			<Head>
				<title>Movie Details</title>
			</Head>
			<div className="flex justify-between relative bg-primary">
				<LeftSideNav />
				<div className="w-[calc(100%-225px)]">
					<div className="flex justify-between">
						<div className="w-full">
							<Search />
						</div>
						<div className="w-[250px] pr-5">
							<DarkMoodToggler />
						</div>
					</div>
					<Details movie={movieDetails} credits={credits} />
				</div>
			</div>
		</>
	);
};

export default DetailsPage;

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			movieDetails: await getDetails(params.type, params.id),
			credits: await getCredits(params.type, params.id),
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
