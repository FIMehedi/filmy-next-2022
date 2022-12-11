import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ name, link, icon }) => {
	const router = useRouter();


	return (
		<li>
			<Link
				href={link}
				className={`flex items-center text-xl font-medium px-10 py-5 w-full text-secondary-600 border-r-4 border-transparent ${
					router.pathname === link && 'nav-active nav-hover'
				} hover:nav-hover`}
			>
				{icon}
				<span className="pl-3">{name}</span>
			</Link>
		</li>
	);
};

export default NavItem;
