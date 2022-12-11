import Movies from '../components/Movies';
import Layout from '../layout/Layout';
import { getUpcoming } from '../services/TMDB';

const UpcomingPage = ({ upcomingMovies }) => {
	return (
		<Layout title="Filmy DB | Upcoming">
			<Movies movies={upcomingMovies} media_type='movie' title="Upcoming Movies" />
		</Layout>
	);
};

export default UpcomingPage;

export const getStaticProps = async () => {
	return {
		props: {
			upcomingMovies: await getUpcoming(),
		},
	};
};
