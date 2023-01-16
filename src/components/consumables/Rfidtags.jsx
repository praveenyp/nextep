import React from "react";
import { motion } from "framer-motion";
function Rfidtags() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-900 to-gray-700 dark:text-gray-300">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-4 sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-gray-200">
            RFID Tags
          </h1>
          <motion.p 
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2 sm:mx-36 mx-10 text-gray-400">
            Nextep provides a comprehensive range of RFID Tag Labels that can be
            used for a variety of applications across manufacturing,
            distribution and services. RFID solutions give you the real-time
            asset visibility you need to streamline operations, maximise asset
            utilisation and error-proof asset-related data.
          </motion.p>
          <motion.p 
            initial={{
              y: 200,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          className="items-center justify-center sm:text-lg text-sm text-center font-medium my-2 sm:mx-36 mx-10 text-gray-400">
            Selecting the right RFID labels for your application can be
            complicated. Nextep’s technical experts will advise you on the best
            ribbon that suits your application, need and budget. We will choose
            from the widest selection of in-stock RFID labels, designed for and
            tested with your printers and RFID readers.
          </motion.p>
        </div>
        <div className="mt-20">
          <div className=" flex sm:flex-row flex-col items-center justify-evenly">
            <motion.div 
             initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-[100%] sm:ml-[200px] ml-0 sm:mr-10 mr-0">
              <img
                src="https://www.qodenext.com/images/consumables/consum-img2.webp"
                alt=""
                className="sm:h-[400px] h-[200px] rounded-xl"
              />
            </motion.div>
            <motion.div 
             initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center sm:mr-[200px] mr-0 sm:ml-10 ml-0 w-[100%]">
              <div className="mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12 sm:mt-0 mt-4">
                <h5 className="sm:text-2xl text-md  font-semibold text-gray-300">
                  General Purpose
                </h5>
                <p className="sm:text-lg text-sm font-semibold text-center mt-3 text-gray-400">
                  These labels are designed for use with standard RFID readers
                  and are stocked in a variety of inlay types and sizes. They
                  are available in paper and synthetic materials that work on
                  non-metallic surfaces, plastics or corrugate.
                </p>
              </div>
              <div className="mx-12">
                <ol className="space-y-4 sm:text-lg text-sm list-disc list-inside text-gray-400  items-center justify-center text-start mt-3">
                  <li>
                    Transportation and Logistics Distribution, shipping and
                    receiving and warehouse operations including case, pallet
                    and cross-docking applications
                  </li>
                  <li>
                    Manufacturing Work-in-process, product labelling, product
                    ID/serial numbers, security and product lifecycle tagging
                  </li>
                  <li>
                    Healthcare Specimen, laboratory and pharmacy labelling,
                    document and patient records management
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <div className=" flex sm:flex-row-reverse flex-col items-center justify-evenly">
            <motion.div 
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-[100%] sm:mr-[200px] mr-0 sm:ml-10 ml-0">
              <img
                src="https://www.qodenext.com/images/consumables/consum-img3.webp"
                alt=""
                className="sm:h-[400px] h-[200px] rounded-xl"
              />
            </motion.div>
            <motion.div 
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center sm:ml-[200px] ml-0 sm:mr-10 mr-0 w-[100%]">
              <div className="mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12 sm:mt-0 mt-4">
                <h5 className="sm:text-2xl text-md  font-semibold text-gray-300">
                  Speciality
                </h5>
                <p className="sm:text-lg text-sm font-semibold text-center mt-3 text-gray-400">
                  For speciality situations, such as asset tagging on metal
                  surface or for liquid-filled containers, we offer Silverline
                  on-metal labels.
                </p>
              </div>
              <div className="mx-12">
                <ol className="space-y-4 sm:text-lg text-sm list-disc list-inside text-gray-400  items-center justify-center text-start mt-3">
                  <li>
                    IT Equipment Tracking: Asset tracking of mobile computers,
                    printers, antennas and infrastructure components
                  </li>
                  <li>
                    IT Equipment Tracking: Asset tracking of mobile computers,
                    printers, antennas and infrastructure components
                  </li>
                  <li>
                    Healthcare Asset tracking of wheelchairs, beds, oxygen
                    canisters, IV pumps and medical diagnostic tools
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <div className=" flex sm:flex-row flex-col items-center justify-evenly">
            <motion.div 
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-[100%] sm:ml-[200px] ml-0 sm:mr-10 mr-0">
              <img
                src="https://www.qodenext.com/images/consumables/consum-img.webp"
                alt=""
                className="sm:h-[400px] h-[200px] rounded-xl"
              />
            </motion.div>
            <motion.div 
            initial={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center sm:mr-[200px] mr-0 sm:ml-10 ml-0 w-[100%]">
              <div className="mb-3 flex flex-col items-center justify-center sm:mx-0 mx-12 sm:mt-0 mt-4">
                <h5 className="sm:text-2xl text-md  font-semibold text-gray-300">
                  Advanced
                </h5>
                <p className="sm:text-lg text-sm font-semibold text-center mt-3 text-gray-400">
                  These labels offer a higher level of read performance than our
                  general-purpose labels. Regularly used in retail, healthcare
                  and manufacturing applications.
                </p>
              </div>
              <div className="mx-12"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rfidtags;
