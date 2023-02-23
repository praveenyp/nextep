import React from "react";
import { motion } from "framer-motion";

function Inspection() {
  return (
    <>
      <div id="inspection" className="h-full bg-gradient-to-r from-blue-200 to-red-50 dark:text-gray-300">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-gray-200">
            Inspection
          </h1>
        </div>
        <div className="flex items-center justify-center sm:mx-36 mx-10">
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2 text-gray-500"
          >
            Our advanced machine vision & industrial vision systems help
            improving product quality for any manufacturing process and further
            make production process error free, reduces cost of production and
            ensure high quality products are produced at affordable costs.
          </motion.p>
        </div>
        <div className="flex items-center justify-center sm:my-7 my-2">
          <motion.h2
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-yellow-700"
          >
           Our products
          </motion.h2>
        </div>
        <div className="flex flex-wrap items-center justify-center cursor-pointer">
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-5">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Machine-Vision.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Machine Vision
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-10">
            <motion.img
              initial={{
                x: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Fixed-Industrial-scanners.webp"
              alt=""
              className=""
            />
            <motion.p
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Fixed Industrial scanners
            </motion.p>
          </div>
          
        </div>
        <hr class="w-48 h-1 mx-auto mt-10 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
      </div>
    </>
  );
}

export default Inspection;
