import Head from 'next/head';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="flex justify-between relative bg-primary">
				<LeftAside />
				{children}
				<RightAside />
			</div>
		</>
	);
};

export default Layout;
