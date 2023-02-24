import React, { } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slideone from "../assets/slide3.avif"
import slidetwo from "../assets/slide4.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Slide from './Slide';

export default function AutoSlider() {
	const data = [
		{
			id: 1,
			subTitle: 'Hardware',
			t1: 'High quality, reliable,',
			t2: ' and backed up by a ',
			t3: 'dependable service network.',
			img: slideone
		},
		{
			id: 2,
			subTitle: 'Consumables',
			t1: 'Optimizing deliveries  ',
			t2: ' with data visibility ',
			t3: '  and Workforce Automation',
			img: slidetwo
		}
	];
	return (
		<>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="w-full md:h-[80vh] ">
				<SwiperSlide className='w-[100%]'>
					<Slide
						imgUrl={data[0].img}
						title={data[0].subTitle}
						t1={data[0].t1}
						t2={data[0].t2}
						t3={data[0].t3}
						linkTo={'hardware'}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Slide
						imgUrl={data[1].img}
						title={data[1].subTitle}
						t1={data[1].t1}
						t2={data[1].t2}
						t3={data[1].t3}
						linkTo={'consumable'}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
