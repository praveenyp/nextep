import React from 'react'
import { motion } from 'framer-motion'
function Automation() {
  return (
    <>
      <div className="pt-16 h-full bg-gradient-to-r from-green-300 to-blue-300 dark:text-black">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-6xl text-3xl sm:my-6 my-2 font-semibold">
            Automation
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
            className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2"
          >
            For capturing any data, scanning is the prime aspect.
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
        <div className="flex sm:flex-row flex-col justify-between sm:mx-20 mx-0 sm:my-10 my-2">
          <motion.div 
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center sm:mx-20 mx-28">
            <motion.div 
            initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="flex bg-green-700 dark:text-white uppercase justify-center items-center w-[100%] rounded-t-lg sm:h-12 h-9 skew-x-12">
              <h3 className="sm:text-2xl text-md font-semibold">Conveyor</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-green-700 rounded-b-md">
              <p 
            
              className="text-center sm:text-lg text-sm sm:font-medium from-neutral-600">
                Any manufacturing process includes material handling equipment like conveyors that can transport raw materials or semi-finished products from one workstation to another. These automated conveyors are designed based on the type of manufacturing product or the process. QN focuses on industrial conveyors that classify all kinds of available conveyors.
              </p>
            </div>
          </motion.div>
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
              <h3 className="sm:text-2xl text-md font-semibold">PTL (Pick to Light)</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-green-700 rounded-b-md">
              <p 
               
              className="text-center sm:text-lg text-sm sm:font-medium from-neutral-600">
                These picking technologies enhance the productivity & efficacy of the picker in a person-to-goods picking process, thus, it can get integrated into any existing warehousing operations. Our pick-to-light process entitles high-speed order fulfilment operation, with top-notch picking rates and excellent productivity.
              </p>
            </div>
          </motion.div>
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
              <h3 className="sm:text-2xl text-md font-semibold">Robotic Solutions</h3>
            </motion.div>
            <div className="flex items-center justify-center sm:pt-2 pt-2 border-solid border-2 border-green-700 rounded-b-md ">
              <p 
              
              className="text-center sm:text-lg text-sm sm:font-medium from-neutral-600">
                We are also into Autonomous robotics solution that are used for production and logistics activities. These autonomous mobile robots are typically used in assembly lines and for transportation and loading which have a moderate effect on energy consumption.
              </p>
            </div>
          </motion.div>
        </div>
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
              src="https://www.qodenext.com/images/hardware/Check-Weigher-System.webp"
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
             Check Weigher System
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
              src="https://www.qodenext.com/images/hardware/Line-Sensors.webp"
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
             Line Sensors
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
              src="https://www.qodenext.com/images/hardware/Label-Applicator.webp"
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
              Label Applicator
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
              src="https://www.qodenext.com/images/hardware/Sortation-System.webp"
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
              Sortation System
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
              src="https://www.qodenext.com/images/hardware/Interactive-Kiosk.webp"
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
             Interactive Kiosk
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
              src="https://www.qodenext.com/images/hardware/Robotic-Solution.webp"
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
              Robotic Solution
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
              src="https://www.qodenext.com/images/hardware/Line-Automation.webp"
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
              Line Automation
            </motion.p>
          </div>
        </div>
        <hr class="w-48 h-1 mx-auto mt-24 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>

      </div>
    </>
  )
}

export default Automation
