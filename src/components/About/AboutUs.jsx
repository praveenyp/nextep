import React from "react";
import { motion } from "framer-motion";
import abtone from "./asstets/abt1.avif"
import abtfive from "./asstets/abt5.avif"
import abtsix from "./asstets/abt6.avif"
import abtseven from "./asstets/abt7.avif"
import Partner from "../partner/Partner";
import Enquiry from "../enquiry/Enquiry";
import Navbar from "../Navbar";

function AboutUs() {
  return (
    <>
      <Navbar/>
      <div id="#about" className=" pt-4 bg-gradient-to-r from-blue-200 to-red-50">
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
              src={abtone}
              alt=""
              className="h-[80%] w-[90%] mt-28 rounded-3xl "
            />
          </div>
          <div className="w-[100%] sm:pt-28 pt-3">
            <div className="flex justify-start uppercase font-semibold text-lg text-red-800">
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
                className="sm:text-lg text-sm font-medium sm:pr-10 pr-0 sm:ml-5 ml-0 text-gray-500 sm:text-start text-center"
              >
                Nextep is one of the leading players in the Indian Label
                manufacturing industry. We are a “design-to-delivery” Labeling
                solutions provider with the ability to design, develop and
                manufacture a diverse product portfolio for a wide range of
                customers primarily in the automotive and pharmaceutical
                industries.
              </motion.h2>
              <motion.h3
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                transition={{ duration: 2.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" sm:text-lg text-sm font-medium sm:pt-5 pt-1 text-gray-500 items-center justify-center sm:text-start text-center sm:pr-10 pr-0 sm:m-5 m-0"
              >
                Our product offerings blank labels, pre-printed labels, domes,
                overlays, aluminum name plates etc., <br />
                Nextep has a strong focus on new product development and it has
                a dedicated ‘new product development’ team. Our products are
                subject to stringent quality checks and testing in laboratories.
              </motion.h3>
              <motion.h4
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                transition={{ duration: 2.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className=" sm:text-lg text-sm font-medium sm:pt-5 pt-1 text-gray-500 items-center justify-center sm:text-start text-center sm:pr-10 pr-0 sm:m-5 m-0"
              >
                We differentiate ourselves on the basis of the wide range of our
                product portfolio, quality of our product offerings, our product
                design and development capabilities and the strength of our
                relationships with customers located across various industries
                globally.
              </motion.h4>
            </div>
          </div>
        </motion.div>
        
      </div>

      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-full bg-gradient-to-r from-blue-200 to-red-50"
      >
        <div className="flex items-center justify-center">
          <h1 className="sm:text-9xl text-5xl sm:font-extrabold font-bold opacity-5 text-cyan-900">
            NEXTEP
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-evenly">
          <div className="flex flex-col items-center justify-center sm:text-start text-center sm:w-[50%] w-[80%]">
            <motion.h2
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-red-800"
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
              className="text-gray-500 font-san sm:text-lg text-md sm:font-medium font-medium"
            >
              Our Vision is aim to be a market leader in design & manufacture of
              self-adhesive labels for engineering & industrial applications.
              <br />
              We strive to benchmark product with the very best available.
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
              src={abtfive}
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
              src={abtsix}
              alt=""
              className="sm:h-[350px] h-[200px] sm:w-[500px] w-[280px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:text-start text-center sm:w-[50%] w-[80%]">
            <motion.h2
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold sm:text-5xl text-2xl sm:mb-5 mb-1 text-red-800"
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
              className=" text-gray-500 font-san sm:text-lg text-md font-medium"
            >
              To deliver desire. To play with colors, materials, textures and
              most of all, possibilities. To make things that are visually
              exciting. Sensorially pleasing. Delightfully intuitive. To be the
              best in the business of aesthetic and functional industrial
              graphics parts, using specialized design and printing
              technologies.
            </motion.p>
          </div>
        </div>
      </div>

      <div className=" h-full flex sm:flex-row flex-col items-center justify-evenly  bg-gradient-to-r from-blue-200 to-red-50 mt-0">
        <div className="sm:w-[30%] w-[80%] sm:ml-32 ml-0">
          <img
            src={abtseven}
            alt=""
            className="sm:h-[300px] h-[220px] sm:w-[400px] w-[550px] sm:mt-20 mt-10 sm:my-20 my-0 rounded-3xl"
          />
        </div>
        <div className="w-[70%] sm:mr-32 mr-0">
          <div className="flex justify-start uppercase font-semibold text-lg text-red-800">
            <h3>who we are</h3>
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold sm:pr-10 pr-0 sm:ml-5 ml-0 mt-3 text-cyan-100">
              Right Partner Right Product.
            </h1>

            <p className="sm:text-lg text-sm font-medium  text-gray-500 items-center justify-center sm:pr-10 pr-0 sm:m-5 m-1">
              Nextep Engineering Pvt Ltd was established in the year 2015 as
              manufacturer of specialty labels and printed electronics products
              specific to the electronics, electrical and automobile industries.
              We have an excellent and unique combination of expertise and rich
              array of products providing customers with superior solutions to
              their requirements.
            </p>
              <h1 className="text-xl font-semibold text-red-600 mb-4">Our products Portfolio Includes</h1>
            <div className="flex sm:flex-row flex-col sm:gap-[200px] gap-0 items-center justify-center font-medium text-gray-500 sm:text-lg text-sm">
              <ul className="list-disc">
                <li>Graphic Fascia and panels</li>
                <li>Membrane overlays</li>
                <li>Membrane keypads/switches</li>
                <li>Nameplates, Logo's</li>
                <li>Automotive Decals/Dials</li>
              </ul>
              <ul className="list-disc">
                <li>Rating plates</li>
                <li>Warranty labels, cautions labels</li>
                <li>PU domes</li>
                <li>Die-cut insulators, Gaskets and foams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Partner/>
      <Enquiry/>
    </>
  );
}

export default AboutUs;
