import React from "react";
import { motion } from "framer-motion";
function Tablets() {
  return (
    <>
      <div
        id="tablet"
        className="h-full bg-gradient-to-r from-blue-100 to-red-50 dark:text-gray-300"
      >
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-red-800">
            Industrial Tablet
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
            className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2 text-gray-600"
          >
            Our Industrial PCs and tablets are designed in such a way as to meet
            different performance and complex interface needs. It has stable
            performance, user-friendly applications, and high-performance
            industrial-grade processors to ensure the reliability of industry
            applications. The scope of customization is huge, thus, the
            peripheral interface of the product and the screen size can be
            selected according to customer needs and the adaptability.
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
            className="text-2xl font-semibold text-red-600"
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
              src="https://www.qodenext.com/images/hardware/Rugged-Tablet.webp"
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
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-black"
            >
              Rugged Tablet
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
              src="https://www.qodenext.com/images/hardware/Industrial-PC.webp"
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
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-black"
            >
              Industrial PC
            </motion.p>
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto mt-10 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
      </div>
    </>
  );
}

export default Tablets;
