import React from "react";
import { motion } from "framer-motion";
import one from "./assets/rf1.jpg";
import two from "./assets/rf2.webp";
import three from "./assets/rf3.jpg";
import four from "./assets/rf4.png";
import five from "./assets/rf5.jpg";

function Rfid() {
  return (
    <>
      <div
        id="rfid"
        className="sm:h-screen h-full bg-gradient-to-r from-blue-200 to-red-50 dark:text-gray-300"
      >
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-red-800">
            RFID
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
            RFID technology is a way for Manufacturers and retailers to identify
            items using radio waves. It transmits data from a RFID Tag to a
            reader giving you accurate real-time tracking data of your
            inventory. Nextep RFID technology helps in attaining over the top
            challenges faced by every industry to improve the bottom line by
            increased efficiency.
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
              src={one}
              alt=""
              className="rounded-3xl"
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
              RFID Handlder
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-4">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={two}
              alt=""
              className=""
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
              RFID Tunnel
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5 sm:pt-0 pt-6">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={three}
              alt=""
              className="rounded-3xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-black"
            >
              Fixed RFID Reader
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-8 mx-3 my-5">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={four}
              alt=""
              className="rounded-3xl"
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
              RFID Reader Antenna
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={five}
              alt=""
              className="rounded-3xl"
            />
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-black"
            >
              RFID Printer
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rfid;
