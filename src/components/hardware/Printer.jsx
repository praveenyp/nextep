import React from "react";
import { motion } from "framer-motion";
import one from "./assets/pri1.jpg"
import two from "./assets/pri2.jpg"
import three from "./assets/pri3.webp"
import four from "./assets/pri4.webp"
function Printer() {
  return (
    <>
      <div className="sm:h-screen h-full bg-black text-white" id="printer">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-green-600">
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
            className="items-center justify-center sm:text-lg text-sm text-justify font-medium my-2 text-gray-400"
          >
            In the Manufacturing, EMS, FMCG & Logistics industry a single
            operational flaw impacts the whole supply chain and data capture
            process at each stage. Nextep offers a wide range of printers and
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
            className="text-2xl font-semibold text--600"
          >
            Our Products
          </motion.h2>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 px-20 items-center justify-center cursor-pointer">
          <div className="">
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
              className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
            />
            <motion.p
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Barcode Printers
            </motion.p>
          </div>
          
          
       
          <div className="">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={two}
              alt=""
              className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
            />
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Mobile Printer
            </motion.p>
          </div>
          <div className="">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={three}
              alt=""
              className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
            />
            <motion.p
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              RFID Printer
            </motion.p>
          </div>
          <div className="">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={four}
              alt=""
              className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
            />
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              ID Card printers
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Printer;
