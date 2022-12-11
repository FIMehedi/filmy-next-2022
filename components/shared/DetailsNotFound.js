const DetailsPageNotFound = ({ msg }) => {
	return (
		<div className="m-4 h-screen rounded-lg bg-primary-alt flex justify-center items-center text-center">
			<div className="">
				<p className="text-lg text-secondary py-4">404</p>
				<p className="text-base text-secondary py-4">{msg}</p>
			</div>
		</div>
	);
};

export default DetailsPageNotFound;
