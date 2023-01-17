import React, { useState, useEffect } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 1 : prev => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 1 ? 0 : prev => prev + 1);
	};

	// useEffect(() => {
	// 	startSlider();
	// }, []);

	// const startSlider = () => {
	// 	setInterval(() => {
	// 		prevSlide();
	// 	}, 4000);
	// };
	const data = [
		{
			id: 1,
			subTitle: 'Hardware',
			t1: 'High quality, reliable,',
			t2: ' and backed up by a ',
			t3: 'dependable service network.',
			img: 'https://qodenext.com/images/banner/banner1.webp'
		},
		{
			id: 2,
			subTitle: 'Consumables',
			t1: 'Optimizing deliveries  ',
			t2: ' with data visibility ',
			t3: '  and Workforce Automation',
			img: 'https://qodenext.com/images/banner/banner2.webp'
		}
	];
	return (
		<div className="w-[200vw] flex select-one relative md:static ">
			{data.map(item => (
				<div
					className="w-screen transition-all duration-500 ease-linear snap-x snap-mandatory "
					key={item.id}
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
					<img
						src={item.img}
						alt="banner"
						className="sm:h-[100%] h-[400px]  w-[100%] rounded-none object-fit object-right"
					/>
					{/* <div className="absolute top-16 left-10 w-[80%] rounded  bg-white/[0.8] bg-none p-4 md:top-0 md:left-20 md:max-w-none md:bg-transparent md:p-8 sm:mt-[300px] mt-0">
						<h2 className="text-3xl font-semibold uppercase tracking-wider  text-green-700 md:text-6xl">
							{item.subTitle}
						</h2>
						<h1 className="mt-2 text-2xl font-bold tracking-wide  md:mt-4 md:text-5xl">
							{item.t1} <br></br>
							{item.t2} <br></br>
							{item.t3}
						</h1>

						<button className="mt-6 rounded-md bg-green-700  px-5 py-2 capitalize text-white hover:bg-green-800">
							Explore More
						</button>
					</div> */}
				</div>
			))}

			<div className="w-full absolute top-1/2 transform -translate-y-1/2 px-2 flex items-center justify-between ">
				<button
					onClick={prevSlide}
					className="text-4xl text-black/[0.6] hover:text-black transition duration-200">
					<FaChevronCircleLeft />
				</button>
				<button
					onClick={nextSlide}
					className="text-4xl text-black/[0.6] hover:text-black transition duration-200">
					<FaChevronCircleRight />
				</button>
			</div>
		</div>
	);
};

export default Hero;
