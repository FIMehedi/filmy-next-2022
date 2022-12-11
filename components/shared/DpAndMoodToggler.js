import Image from 'next/image';
import { BsSunFill } from 'react-icons/bs';

const DpAndMoodToggler = () => {
	return (
		<div className="flex justify-end sticky top-0 py-5 bg-primary">
			<div className="flex justify-center items-center rounded-full h-14 w-14 bg-primary-alt cursor-pointer">
				<BsSunFill className="text-secondary text-3xl" />
			</div>
			<div className="rounded-full overflow-hidden h-14 w-14 ml-4 cursor-pointer">
				<Image src="/profile.png" alt="Profile" width={100} height={100} />
			</div>
		</div>
	);
};

export default DpAndMoodToggler;
