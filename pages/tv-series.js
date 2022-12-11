import Movies from '../components/Movies';
import Layout from '../layout/Layout';
import { getPopular } from '../services/TMDB';

const TvSeriesPage = ({ popularMovies }) => {
	return (
		<Layout title="Popular Tv Series">
			<Movies movies={popularMovies} media_type='tv' title="Popular Tv Series" />
		</Layout>
	);
};

export default TvSeriesPage;

export const getStaticProps = async () => {
	return {
		props: {
			popularMovies: await getPopular('tv'),
		},
	};
};
