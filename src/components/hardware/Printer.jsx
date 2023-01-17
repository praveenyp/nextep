import React from "react";
import { motion } from "framer-motion";

function Printer() {
  return (
    <>
      <div className="sm:h-screen h-full bg-gradient-to-r from-gray-700 to-gray-900 dark:text-gray-300">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-gray-200">
            Printers
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
            In the Manufacturing, EMS, FMCG & Logistics industry a single
            operational flaw impacts the whole supply chain and data capture
            process at each stage. QodeNext offers a wide range of printers and
            printer supplies to enhance the supply chain process that makes
            operational schedules reach its destination on time. We have wide
            range of printing capabilities from online to offline printing.
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
              src="https://www.qodenext.com/images/hardware/Industrial-Desktop-Barcode-Printers.webp"
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
              Barcode Printers
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/Inkjet-Printer.webp"
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
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Inkjet Printer
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
              src="https://www.qodenext.com/images/hardware/Laser-Printer.webp"
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
              Laser Printer
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
              src="https://www.qodenext.com/images/hardware/ID-Card-Printer.webp"
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
              Id card Printer
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
              src="https://www.qodenext.com/images/hardware/Mobile-Printers.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Mobile Printer
            </motion.p>
          </div>
          <div className="sm:h-[16%] h-[20%] sm:w-[16%] w-[20%] sm:mx-10 mx-3 my-5">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.qodenext.com/images/hardware/RFID-Printers.webp"
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
              RFID Printer
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
              src="https://www.qodenext.com/images/hardware/Print-Engines.webp"
              alt=""
            />
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3"
            >
              Print Engines
            </motion.p>
          </div>
        </div>
      <hr class="w-48 h-1 mx-auto mt-10 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
      </div>
    </>
  );
}

export default Printer;
