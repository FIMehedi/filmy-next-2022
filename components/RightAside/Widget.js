const Widget = ({ w_name, w_list }) => {
	return (
		<div className="text-secondary ">
			<h2 className="font-medium text-xl pb-4">Categories</h2>
			<ul className="bg-primary-alt p-5 rounded-3xl">
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
				<li className="flex justify-between items-center text-lg border-b-2 border-secondary-500 py-1">
					<label htmlFor="action">Action</label>
					<input
						className="w-4 h-4 outline-none bg-gray-400 accent-secondary"
						type="checkbox"
						name="action"
						id="action"
					/>
				</li>
			</ul>
		</div>
	);
};

export default Widget;
