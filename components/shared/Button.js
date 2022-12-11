import Link from 'next/link';

const Button = ({ btn_text, btn_link, btn_icon }) => {
	return (
		<Link
			href={btn_link}
			className="border-2 border-secondary text-secondary px-4 py-2 rounded bg-secondary-300 flex items-center hover:text-primary hover:bg-secondary transition-all"
		>
			{btn_icon}
			{btn_text}
		</Link>
	);
};
export default Button;
