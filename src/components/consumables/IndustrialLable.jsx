import React from "react";
import { motion } from "framer-motion";
function IndustrialLable() {
  return (
		<>
			<div
				className="h-full bg-gradient-to-r from-gray-900 to-gray-700 dark:text-gray-300"
				id="industrial">
				<div className="flex items-center justify-center">
					<h1 className="mt-4 sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-gray-200">
						Industrial Labels
					</h1>
				</div>
				<div className="flex items-center justify-center">
					<motion.img
						initial={{
							y: 100,
							opacity: 0
						}}
						transition={{ duration: 2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						src="https://www.zebra.com/ap/en/products/supplies/labels-tags/jcr:content/mainpar/columncontrol_c730/col2par/fullwidthimage_8380/fullWidthImage.transform/image-large/image.jpg"
						alt=""
						className="sm:h-[500px] h-[200px] sm:w-[900px] w-[500px] rounded-3xl"
					/>
				</div>
				<div className="mt-4">
					<div className="flex items-center justify-center sm:mx-36 mx-10">
						<motion.p
							initial={{
								y: 200,
								opacity: 0
							}}
							transition={{ duration: 2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2 text-gray-400">
							Nextep provides a comprehensive range of Self-Adhesive labels that
							are compatible with all printers on the market: Zebra, Sato,
							Datamax, Honeywell, etc. Since we manufacture labels, we can
							handle all design or modification. Our technical experts will
							advise you on the best label that suits your application, need and
							budget.
						</motion.p>
					</div>
					<div className="flex flex-col items-center justify-center pt-4">
						<motion.h4
							initial={{
								y: 300,
								opacity: 0
							}}
							transition={{ duration: 2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="sm:text-2xl text-lg text-gray-300 font-bold">
							We provide all of the following categories
						</motion.h4>
						<div className="pt-3 items-center justify-center">
							<motion.ol
								initial={{
									y: 300,
									opacity: 0
								}}
								transition={{ duration: 2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="space-y-4  list-decimal list-inside text-gray-400 sm:font-semibold font-medium">
								<li>
									Label Types
									<ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
										<li>Direct Thermal</li>
										<li>Direct Thermal</li>
									</ul>
								</li>
								<li>
									Label Types
									<ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
										<li>Paper</li>
										<li>Polyester</li>
									</ul>
								</li>
								<li>
									Material Types
									<ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
										<li>Tag</li>
										<li>Void</li>
										<li>Temparature Evident</li>
										<li>Tamper-proof</li>
										<li>Heat Resistance</li>
										<li>Water-proof</li>
										<li>RFID</li>
									</ul>
								</li>
							</motion.ol>
						</div>
					</div>
				</div>
				<hr class="w-48 h-1 mx-auto mt-10 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
			</div>
		</>
	);
}

export default IndustrialLable;
