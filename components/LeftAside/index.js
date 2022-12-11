import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCalendar, AiOutlineHome } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import NavItem from './NavItem';

const LeftSideNav = () => {
	return (
		<aside className="h-screen flex flex-col pt-14 pb-10 justify-between bg-primary-alt rounded-r-[45px] sticky top-0 max-w-[225px] w-fit">
			<div className="px-10">
				<Link href="/">
					<Image
						src="/logo-with-name.svg"
						alt="Logo"
						width={118}
						height={42}
						priority
						className="w-auto h-auto"
					/>
				</Link>
			</div>
			<nav>
				<ul>
					<NavItem name="Home" link="/" icon={<AiOutlineHome />} />
					<NavItem name="Movies" link="/movies" icon={<BsCameraReels />} />
					<NavItem
						name="TV Series"
						link="/tv-series"
						icon={<MdOutlineOndemandVideo />}
					/>
					<NavItem
						name="Upcoming"
						link="/upcoming"
						icon={<AiOutlineCalendar />}
					/>
				</ul>
			</nav>
			<div className="mx-auto">
				<Link
					href="/"
					className="flex items-center text-xl font-medium w-fit py-2 px-4 rounded border-2 border-secondary-600 text-secondary-600 bg-transparent hover:bg-secondary-800 hover:text-primary transition-all"
				>
					<RiLogoutBoxRLine />
					<span className="pl-3">Logout</span>
				</Link>
			</div>
		</aside>
	);
};

export default LeftSideNav;
