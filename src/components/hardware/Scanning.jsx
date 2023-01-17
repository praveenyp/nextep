import React from "react";
import { motion } from "framer-motion";

function Scanning() {
  return (
    <>
      <div className="pt-16 sm:h-screen h-full bg-gradient-to-r from-gray-900 to-gray-700 dark:text-gray-300">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-gray-200">
            Scanning
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
            Our advanced machine vision & industrial vision systems help improving product quality for any manufacturing process and further make production process error free, reduces cost of production and ensure high quality products are produced at affordable costs.
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
            Value Proposition
          </motion.h2>
        </div>
        <motion.div 
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex sm:flex-row flex-col justify-center sm:mx-20 mx-0 sm:my-10 my-2">
          <div className="flex flex-col justify-center items-center sm:mx-20 mx-28">
            <motion.div 
            initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex bg-green-700 dark:text-white uppercase justify-center items-center w-[100%] rounded-t-lg sm:h-12 h-9 skew-x-12">
              <h3 className="sm:text-2xl text-md font-semibold">scanner</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-green-700 rounded-b-md">
              <p 
               
              className="text-center sm:text-lg text-sm sm:font-medium from-neutral-600 text-gray-500">
                QN scanner portfolio offers a wide range of scanning capability
                starting from retail solutions to high speed production lines
                with high built in intelligence that can read barcodes easily
                even at a surged speed.
              </p>
            </div>
          </div>
          <motion.div 
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center sm:mx-20 mx-28 sm:pt-0 pt-5">
            <motion.div 
            initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex bg-green-700 dark:text-white uppercase justify-center items-center w-[100%] rounded-t-lg sm:h-12 h-9 -skew-x-12">
              <h3 className="sm:text-2xl text-md font-semibold">Mobility</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-green-700 rounded-b-md">
              <p 
               
              className="text-center sm:text-lg text-sm sm:font-medium from-neutral-600 text-gray-500">
                QN offers different range of mobility scanners and form factors
                to cater need of production, warehouse and last mile users.
                These devices have sturdy built-in software intelligence
                features that can help your tasks to be performed without
                interruption.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center cursor-pointer">
        <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-5">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Mobile-Computers.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Mobile Computers
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-5">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Tablets.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Tablets
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-5">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Barcode-Scanners.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Barcode Scanners
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-5">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Online-Scanners.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Online Scanners
            </motion.p>
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto mt-24 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>

      </div>
    </>
  );
}

export default Scanning;