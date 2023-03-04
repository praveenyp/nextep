import React from "react";
import { motion } from "framer-motion";
import one from "./assets/rf1.webp"
import two from "./assets/rf2.jpg"
import three from "./assets/rf3.jpg"
import four from "./assets/rf4.jpg"
import five from "./assets/rf5.png"
import six from "./assets/rf6.jpg"
import seven from "./assets/rf7.jpg"
import eight from "./assets/rf8.jpg"
import nine from "./assets/rf9.jpg"
import ten from "./assets/rf10.jpg"
import leven from "./assets/rf11.jpg"
import twelve from "./assets/rf12.jpg"
import thirteen from "./assets/rf13.jpg"
import fourteen from "./assets/rf14.jpg"
import fifteen from "./assets/rf15.jpg"
function Rfidtags() {
  return (
    <>
      <div
        id="rfidtags"
        className="h-full bg-black text-white"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-4 sm:text-6xl text-3xl sm:my-6 my-2 font-semibold text-green-600">
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
            className="items-center justify-center sm:text-lg text-sm text-justify font-medium my-2 sm:mx-36 mx-10 text-gray-400"
          >
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
            className="items-center justify-center sm:text-lg text-sm text-justify font-medium my-2 sm:mx-36 mx-10 text-gray-400"
          >
            Selecting the right RFID labels for your application can be
            complicated. Nextep’s technical experts will advise you on the best
            ribbon that suits your application, need and budget. We will choose
            from the widest selection of in-stock RFID labels, designed for and
            tested with your printers and RFID readers.
          </motion.p>
        </div>
        <div className="mt-20">
          <div className=" ">
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{ duration: 2.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center sm:mr-[0] mr-0 sm:ml-0 ml-0 w-[100%]"
            >
              <div className="mb-3 flex flex-col items-center justify-center sm:mx-36 mx-12 sm:mt-0 mt-4">
                <h5 className="sm:text-2xl text-md  font-semibold text-yellow-600">
                  General Purpose
                </h5>
                <p className="sm:text-lg text-sm font-semibold text-justify mt-3 text-white">
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
              <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="sm:text-2xl text-lg rounded-lg my-2">
                  UHF On Metal Label
                </h1>
                <div className="flex sm:flex-row flex-col gap-10 sm:w-[100%] w-[80%]">
                  <img
                    src={one}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={two}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={three}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="sm:text-2xl text-lg rounded-lg my-2">
                  UHF On Metal Tag
                </h1>
                <div className="flex sm:flex-row flex-col gap-10 sm:w-[100%] w-[80%]">
                  <img
                    src={four}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={five}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={six}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="sm:text-2xl text-lg rounded-lg my-2">
                  Vehicle Tyre Tag
                </h1>
                <div className="flex sm:flex-row flex-col gap-10 sm:w-[100%] w-[80%]">
                  <img
                    src={seven}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={eight}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={nine}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="sm:text-2xl text-lg rounded-lg my-2">
                  Laundry Tags
                </h1>
                <div className="flex sm:flex-row flex-col gap-10 sm:w-[100%] w-[80%]">
                  <img
                    src={ten}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={leven}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={twelve}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pt-20 pb-20">
                <h1 className="sm:text-2xl text-lg rounded-lg my-2">
                  Jewelry Tags
                </h1>
                <div className="flex sm:flex-row flex-col gap-10 sm:w-[100%] w-[80%]">
                  <img
                    src={thirteen}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={fourteen}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                  <img
                    src={fifteen}
                    alt=""
                    className="sm:h-[300px] h-[150px] sm:w-[400px] w-[250px] rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rfidtags;
