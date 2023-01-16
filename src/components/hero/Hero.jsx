
import React,{useState} from 'react'

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 1 : prev => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 1 ? 0 : prev => prev + 1);
	};
	const data = [
		{
			id: 1,
			subTitle: 'Hardware',
			t1: 'High quality, reliable,',
			t2: ' and backed up by a ',
			t3: 'dependable service network.',
			img: 'https://qodenext.com/images/banner/banner1.webp',
			amount: 789
		},
		{
			id: 2,
			subTitle: 'Consumables',
			t1: 'Optimizing deliveries  ',
			t2: ' with data visibility ',
			t3: '  and Workforce Automation',
			img: 'https://qodenext.com/images/banner/banner2.webp',
			amount: 849
		}
	];
  return (
    <>
        <div className=" h-screen bg-gray-900 flex w-[200vw] gap-x-4  overflow-hidden p-2 md:gap-x-20 md:p-7">
			{data.map(item => (
				<div
					className="w-screen  overflow-x-hidden transition-all duration-500 ease-linear"
					key={item.id}
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
					<img
						src={item.img}
						alt="banner"
						className="h-[100%]  w-full rounded-2xl object-cover object-right "
					/>
					<div className="absolute top-16 left-10 w-[80%] rounded  bg-white/[0.8] bg-none p-4 md:top-0 md:left-20 md:max-w-none md:bg-transparent md:p-8">
						<h2 className="text-3xl font-semibold uppercase tracking-wider  text-green-700 md:text-4xl">
							{item.subTitle}
						</h2>
						<h1 className="mt-2 text-2xl font-bold tracking-wide  md:mt-4 md:text-2xl">
							{item.t1} <br></br>
							{item.t2} <br></br>
							{item.t3}
						</h1>

						<button className="mt-6 rounded-md bg-green-700  px-5 py-2 capitalize text-white hover:bg-green-800">
							Explore More
						</button>
					</div>
				</div>
			))}

			<div className="absolute left-0 right-0 bottom-48 mx-auto hidden w-24 gap-x-2 text-3xl md:flex">
				<div
					className="cursor-pointer rounded border-2 border-[#999] bg-transparent"
					onClick={prevSlide}>
					<BsArrowLeftShort />
				</div>
				<div
					className="cursor-pointer rounded border-2 border-[#999] bg-transparent"
					onClick={nextSlide}>
					<BsArrowRightShort />
				</div>
			</div>
		</div>
    </>
  )
}

export default Hero