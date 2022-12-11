import Feed from '../components/Feed';
import Layout from '../layout/Layout';
import { getPopular, getTrending, getUpcoming } from '../services/TMDB';

export default function Home({
	trending,
	popularMovies,
	popularTvs,
	upcomingMovies,
}) {
	return (
		<Layout title="Filmy DB | Home">
			<Feed
				trending={trending}
				popularMovies={popularMovies}
				popularTvs={popularTvs}
				upcomingMovies={upcomingMovies}
			/>
		</Layout>
	);
}

export const getStaticProps = async () => {
	return {
		props: {
			trending: await getTrending(),
			popularMovies: await getPopular('movie'),
			popularTvs: await getPopular('tv'),
			upcomingMovies: await getUpcoming(),
		},
	};
};
