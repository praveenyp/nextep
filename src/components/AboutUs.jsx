import React from "react";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <>
   
      <div className=" mt-0 bg-gradient-to-r from-gray-700 to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex sm:flex-row flex-col justify-evenly px-10"
        >
          <div className="flex justify-center sm:w-[80%] w-[100%]">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://themerange.net/wp/moko/wp-content/uploads/2021/10/about-1.png"
              alt=""
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="w-[100%] sm:pt-24 pt-3">
            <div className="flex justify-start uppercase font-semibold text-lg text-gray-100">
              <h5>About Us</h5>
            </div>
            <div className="m-3">
              <motion.h2
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sm:text-4xl text-lg font-bold sm:pr-10 pr-0 sm:ml-5 ml-0 text-gray-200"
              >
                We are a leading solutions provider focused on creating stories
                around product.
              </motion.h2>
              <motion.h3
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                transition={{ duration: 2.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" sm:text-xl text-md font-semibold sm:pt-5 pt-1 text-gray-500 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0"
              >
                We specialize in marking and data capture processes. We focus on
                creating a logical timeline for all main events in a product's
              </motion.h3>
              <motion.h4
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 2.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" sm:text-md text-sm font-medium sm:pt-5 pt-1 text-gray-500 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0"
              >
                We have our in-house design and development teams who work with
                leading hardware OEMs to create solutions around traceability
                and automation. We have 3 specialty conversion units in the
                North, West, and South of India focused on providing the
                materials
              </motion.h4>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden sm:text-sm text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 sm:mt-0 mt-6">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                  learn More
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        <div className="flex sm:flex-row flex-col sm:justify-evenly justify-start sm:items-center items-start sm:mt-32 mt-0 sm:mx-0 mx-4 bg-gray-800 py-10">
          <div className="flex flex-row  w-[100%] justify-center">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500 ease-in-out">
              <img
                src="https://fundal.org.gt/wp-content/uploads/2022/03/alegria.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center  justify-center bg">
              <span className="sm:text-5xl text-xl  font-bold   text-black">
                <NumberCounter end={100} start={0} delay="3" postFix="+" />
              </span>
              <span className="sm:text-lg text-xs  uppercase sm:font-bold font-semibold font-sans text-gray-400">
                active clients
              </span>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-center sm:pt-0 pt-5">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500 ease-in-out">
              <img
                src="https://worldgreeneconomy.org/wp-content/themes/WGEO/img/join-icon-2.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="sm:text-5xl text-xl font-bold text-black">
                <NumberCounter end={10} start={0} delay="3" postFix="+" />
              </span>
              <span className="sm:text-lg text-xs uppercase sm:font-bold font-semibold font-sans text-gray-400">
                year of experience
              </span>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-center sm:pt-0 pt-5">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
              <img
                src="https://www.viscaweb.com/wp-content/uploads/product-development@2x.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="sm:text-5xl text-xl font-bold text-black">
                <NumberCounter end={1} start={0} delay="3" postFix="+" />
              </span>
              <span className="sm:text-lg text-xs uppercase sm:font-bold font-semibold font-sans text-gray-400">
                experience center
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen bg-gradient-to-r from-gray-900 to-gray-700"
      >
        <div className="flex items-center justify-center ">
          <h1 className="sm:text-9xl text-5xl sm:font-extrabold font-bold opacity-5 text-green-400">
            NEXTEP
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-evenly">
          <div className="flex flex-col items-center  sm:justify-center w-[50%]">
            <motion.h2
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-gray-200"
            >
              Vision
            </motion.h2>
            <motion.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 font-san sm:text-2xl text-md sm:font-bold font-semibold"
            >
              Our Vision is to be the premier and preferred supplier of Advance
              Technology enabled service and innovative products that our
              clients can trust along with market expertise.
            </motion.p>
          </div>
          <div className="inset-0 object-cover transform hover:scale-105 transition duration-700 ease-out">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src=" https://png.pngtree.com/png-vector/20220808/ourmid/pngtree-business-success-and-target-png-image_5777671.png"
              alt=""
              className="sm:h-[350px] h-[200px] sm:w-[500px] w-[280px] rounded-2xl"
            />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-evenly mt-10">
          <div className="inset-0 object-cover transform hover:scale-105 transition duration-700 ease-out">
            <motion.img
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-minimalist-stile-vision-success-mission-png-image_5231999.png "
              alt=""
              className="sm:h-[350px] h-[200px] sm:w-[500px] w-[280px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[50%]">
            <motion.h2
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-gray-200"
            >
              Mission
            </motion.h2>
            <motion.p
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=" text-gray-500 font-san sm:text-2xl text-md sm:font-bold font-semibold"
            >
              We deliver turn-key solutions through our innovative products and
              creative engineering concepts. To be the most reliable supplier
              with our dedication towards the quality of product and service
              which we believe as our core strength.
            </motion.p>
          </div>
        </div>
      </div>


      <div className=" h-full flex sm:flex-row flex-col items-center justify-evenly  bg-gradient-to-r from-gray-700 to-gray-900 mt-0">
        <div className="w-[50%] sm:ml-32 ml-0">
          <img src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission.png" alt="" className="sm:h-[400px] h-[220px] sm:w-[600px] w-[750px] sm:mt-0 mt-40 sm:my-20 my-0"/>
        </div>
        <div className="w-[50%] sm:mr-32 mr-0">
          <div className="flex justify-start uppercase font-semibold text-lg text-white">
            <h3>who we are</h3>
           </div>
           <div> 
            <h1 className="sm:text-4xl text-lg font-bold sm:pr-10 pr-0 sm:ml-5 ml-0 mt-3 text-gray-600">Right Partner Right Product.</h1>

            <p className="sm:text-xl text-sm font-semibold  text-gray-200 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-1">Nextep Engineering Pvt Ltd. is an Indian based company providing customized solutions to Automobiles, Retail, Logistics, Manufacturing and many other verticals across the industry.</p>
          </div>
          <div className="items-center justify-center">
            <div className="flex flex-row items-center justify-center sm:py-3 py-0">
              <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
                <img src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png" alt="" />
              </div>
              <div>
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere dicta esse nihil laborios</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:py-3 py-0">
            <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
                <img src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png" alt="" />
              </div>
              <div>
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere dicta esse nihil laborios</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:py-3 py-0">
            <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
                <img src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png" alt=""/>
              </div>
              <div className="items-center justify-start">
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere dicta esse nihil laborios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script>
        
      </script>
    </>
  );
}

export default AboutUs;
