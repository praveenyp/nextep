import React from "react";
import { motion } from "framer-motion";
// import scaone from "./assets/sca1.webp"
// import scatwo from "./assets/sca2.webp"
// import scathree from "./assets/sca3.webp"
import general from "./assets/general.jpg"
import ultra from "./assets/ultra.jpg"
import health from "./assets/health.jpg"
import incounter from "./assets/incounter.jpg"
import comapanion from "./assets/companion.jpg"
import fixed from "./assets/fixed.jpg"
import terminal from "./assets/terminals.jpg"
import handled from "./assets/handled.jpg"
import wearable from "./assets/wearable.jpg"
import vehicle from "./assets/vehcle.jpg"
import tablet from "./assets/tablet.jpg"
import healthcare from "./assets/healtcare.jpg"
import rfidhandled from "./assets/rfidhandled.jpg"
function Scanning() {
  return (
    <>
      <div id="scanning" className="pt-16 h-full bg-black text-white pb-20">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-green-600 flex text-center">
            Scanners and Data Capture
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
            className="text-2xl font-semibold text-yellow-600"
          >
           Our products
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
          <div className="flex flex-col justify-center items-center sm:mx-20 mx-20 w-[60%]">
            <motion.div 
            initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex bg-blue-600  uppercase justify-center items-center w-[100%] rounded-t-lg sm:h-12 h-9 skew-x-12">
              <h3 className="sm:text-2xl text-md font-semibold">scanner</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-blue-600 rounded-b-md">
              <p 
               
              className="text-center sm:text-lg text-sm sm:font-medium text-gray-400">
                Nextep scanner portfolio offers a wide range of scanning capability
                starting from retail solutions to high speed production lines
                with high built in intelligence that can read barcode easily
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
          className="flex flex-col justify-center items-center sm:mx-20 mx-20 sm:pt-0 pt-5 w-[60%]">
            <motion.div 
            initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex bg-blue-600  uppercase justify-center items-center w-[100%] rounded-t-lg sm:h-12 h-9 -skew-x-12">
              <h3 className="sm:text-2xl text-md font-semibold">Mobility</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-blue-600 rounded-b-md">
              <p 
               
              className="text-center sm:text-lg text-sm sm:font-medium text-gray-400">
                Nextep offers different range of mobility scanners and form factors
                to cater need of production, warehouse and last mile users.
                These devices have sturdy built-in software intelligence
                features that can help your tasks to be performed without
                interruption.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-wrap gap-10 px-20 items-center justify-center cursor-pointer">
        <div className="">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={general}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              General Purpose Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={ultra}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Ultra-Rugged Barcode Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={health}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Healthcare Barcode Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={incounter}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              In-Counter Barcode Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={comapanion}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Companion Barcode Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={fixed}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Fixed Mount Barcode Scanners
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={terminal}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Mobile Terminals
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={handled}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Handheld Computers
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={wearable}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Wearable Computers
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={vehicle}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Vehicle-Mounted Computers
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={tablet}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Tablets
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={healthcare}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Healthcare Mobile Computers
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={rfidhandled}
              alt=""
              className="sm:h-[200px] h-[100px] sm:w-[300px] w-[150px] rounded-xl"
            />
            <motion.p
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center sm:font-semibold font-light sm:text-lg text-xs text-center mt-3 text-blue-400"
            >
              Handheld RFID Readers
            </motion.p>
          </div>
         
        </div>
        

      </div>
    </>
  );
}

export default Scanning;
