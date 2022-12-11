import DpAndMoodToggler from '../shared/DpAndMoodToggler';
import Widget from './Widget';

const RightAside = () => {
	return (
		<div className="h-screen w-[250px] pr-5 sticky top-0 overflow-x-hidden overflow-y-scroll">
			<DpAndMoodToggler />
			<Widget />
		</div>
	);
};

export default RightAside;
