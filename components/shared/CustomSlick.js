import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CustomSlick = ({ additional_setting, children }) => {
	const settings = {
		variableWidth: true,
		adaptiveHeight: true,
		arrows: true,
		dots: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		infinite: true,
		// nextArrow: <CustomArrow icon={<GrFormNext />} isNext={true} />,
		// prevArrow: <CustomArrow icon={<GrFormPrevious />} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		...additional_setting,
	};

	return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlick;
