import { Link } from 'react-router-dom';

const Slide = ({ imgUrl, t1, t2, t3, title, linkTo }) => {
	return (
		<div className="">
			<img src={imgUrl} alt="" className="h-[60vh] md:h-full" />
			<div className="absolute top-20 left-20 w-[70%] rounded  bg-white/[0.8] bg-none p-4 md:-top-40 md:left-20 md:max-w-none md:bg-transparent md:p-8 sm:mt-[300px] mt-0">
				<h2 className="text-2xl font-bold uppercase tracking-wider  text-green-700 md:text-6xl">
					{title}
				</h2>
				<h1 className="mt-1 text-xl font-bold  md:mt-4 md:text-3xl">
					{t1} <br></br>
					{t2} <br></br>
					{t3}
				</h1>

				<button className="mt-4 rounded-md bg-green-700  md:px-8 px-4 md:py-3 py-2 capitalize text-white hover:bg-green-800">
					<Link to={linkTo}>Explore More +</Link>
				</button>
			</div>
		</div>
	);
};

export default Slide;
