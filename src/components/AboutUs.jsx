import React from "react";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <>
      <div className=" pt-4 bg-gradient-to-r from-gray-700 to-gray-900">
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80"
              alt=""
              className="h-[90%] w-[90%] mt-10 rounded-3xl"
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
            </div>
          </div>
        </motion.div>
        <div className="flex sm:flex-row flex-col sm:justify-evenly justify-start sm:items-center items-start sm:mt-32 mt-0 sm:mx-0 mx-4 bg-black py-10">
          <div className="flex flex-row  w-[100%] justify-center">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500 ease-in-out">
              <img
                src="https://fundal.org.gt/wp-content/uploads/2022/03/alegria.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center  justify-center bg">
              <span className="sm:text-5xl text-xl  font-bold   text-white">
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
              <span className="sm:text-5xl text-xl font-bold text-white">
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
              <span className="sm:text-5xl text-xl font-bold text-white">
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
              src=" https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1324&q=80"
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
              src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80 "
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
          <img
            src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
            className="sm:h-[400px] h-[220px] sm:w-[600px] w-[750px] sm:mt-20 mt-40 sm:my-20 my-0 rounded-3xl"
          />
        </div>
        <div className="w-[50%] sm:mr-32 mr-0">
          <div className="flex justify-start uppercase font-semibold text-lg text-white">
            <h3>who we are</h3>
          </div>
          <div>
            <h1 className="sm:text-4xl text-lg font-bold sm:pr-10 pr-0 sm:ml-5 ml-0 mt-3 text-gray-600">
              Right Partner Right Product.
            </h1>

            <p className="sm:text-xl text-sm font-semibold  text-gray-200 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-1">
              Nextep Engineering Pvt Ltd. is an Indian based company providing
              customized solutions to Automobiles, Retail, Logistics,
              Manufacturing and many other verticals across the industry.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col sm:gap-10 gap-[100px] sm:mb-5 mb-12">

				<div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
              <img
                src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png"
                alt=""
              />
			  </div>
			  <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">

              <img
                src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png"
                alt=""
              />
			  </div>
			  <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">

              <img
                src="https://themerange.net/wp/moko/wp-content/uploads/2021/11/mission-1.png"
                alt=""
              />
            </div>
			</div>
            <div className="flex flex-col items-center justify-center sm:py-3 py-0">
              <div>
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">
                  Extensive experience in the industry has helped us gauge the
                  pulse of the market for affordable and versatile solutions
                  that is backed by industry leading technical support and
                  service.
                </p>
              </div>
            <div className="flex flex-row items-center justify-center sm:py-3 py-0">
              <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out"></div>
              <div>
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">
                  We provide customized solutions for a wide range of verticals
                  including healthcare, retail, manufacturing, logistics,
                  hospitality and lots more.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:py-3 py-0">
              <div className="transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out"></div>
              <div className="items-center justify-start">
                <p className="sm:text-sm text-xs sm:font-medium font-normal  text-gray-300 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-0 sm:my-0 my-2 sm:mx-3  ml-2">
                  We are one of the leading providers of innovative enterprise
                  mobility, data acquisition and safety equipments in India and
                  our wide range of products, sourced exclusively from the most
                  reputed brands from around the globe, are ensured to meet the
                  highest standards of quality and precision.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <script></script>
    </>
  );
}

export default AboutUs;
