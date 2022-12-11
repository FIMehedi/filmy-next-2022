import Movies from '../components/Movies';
import Layout from '../layout/Layout';
import { getPopular } from '../services/TMDB';

const MoviesPage = ({ popularMovies }) => {
	return (
		<Layout title="Filmy DB | Movies ">
			<Movies movies={popularMovies} media_type='movie' title='Popular Movies' />
		</Layout>
	);
};

export default MoviesPage;

export const getStaticProps = async () => {
	return {
		props: {
			popularMovies: await getPopular('movie'),
		},
	};
};
