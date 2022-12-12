import { BsSunFill } from 'react-icons/bs';

const DarkMoodToggler = () => {
	return (
		<div className="flex justify-end sticky top-0 py-5 bg-primary">
			<div className="flex justify-center items-center rounded-full h-14 w-14 bg-primary-alt cursor-pointer">
				<BsSunFill className="text-secondary text-3xl" />
			</div>
		</div>
	);
};

export default DarkMoodToggler;
