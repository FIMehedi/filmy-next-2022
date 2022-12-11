import { GoSearch } from 'react-icons/go';

const Search = () => {
	return (
		<div className="text-secondary-600 font-medium h-fit relative m-5">
			<GoSearch className="absolute top-[17px] left-[30px] m-0 p-0 text-2xl" />
			<input
				className="bg-primary-alt text-secondary py-3 pl-20 w-full h-full text-xl placeholder:text-secondary-600 rounded-[30px] outline-none"
				type="text"
				placeholder="Search for movies, TV shows..."
			/>
		</div>
	);
};

export default Search;
