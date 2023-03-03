import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import workin from "./images/work.jpg"
function Work_in() {
  return (
    <div>
      <div className="h-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar />
        <div>
          <img
            src={workin}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Work-In Progress Application
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Work in process (WIP) or in-process inventory includes the set at
              large of unfinished items for products in a production process.
              These items are not yet completed but either just being fabricated
              or waiting in a queue for further processing or in a buffer
              storage. The term is used in production and supply chain
              management.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Work in progress is a key element in lean manufacturing. It is the
              single most important visual indicator reflecting the level of
              waste a system contain. And as we identified with this post
              inventory and WIP can be a waste by itself.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Optimal production management aims to minimize work in process.
              Work in process requires storage space, represents bound capital
              not disponible for investment and carries an inherent risk of
              earlier expiration of shelf life of the products. A queue leading
              to a production step shows that the step is well buffered for
              shortage in supplies from preceding steps, but may also indicate
              insufficient capacity to process the output from these preceding
              steps.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Just-in-time production is a concept to reduce work in process
              with respect to a continuous configuration of product. Just in
              Sequence is a similar concept with respect to a scheduled variety
              in sequence of configurations for products.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Barcode and RFID identification can be used to identify work items
              in process flow. For locating the products additional requirements
              must be considered to ensure not only presence of work items, but
              also knowledge of the whereabouts of these items. This is a
              mandatory condition in flexible production lines with paralleled
              work positions for single steps of production.
            </p>
            <div>
              <h1 className="sm:text-3xl text-lg text-red-400">
                Key Result of Work-In Progress Application
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Defect free output
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Lower Work in progress
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Better productivity
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Elimination of waste
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Manufacturing time is cut down
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Cost is reduced
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Continuous improvement in quality
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Speed urgent production orders with priority identification
                    and alerting.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Help reduce mistakes with assembly process verification and
                    alerts when semi-finished items or batches are routing to
                    the wrong manufacturing cell.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Support parts sequence verification from receiving to final
                    assembly line delivery by tagging items, cases or pallets.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Greater Visibility & Accuracy of Raw Material and Production
                    Parts.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of the Work-In Progress
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Real time Traceability
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Easy to identify failures of product at each stages.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Increase the productivity.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Helps the management to take corrective action to avoid
                    continuous failures.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Ease of information management.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Captures in-process quality control data, live, on the shop
                    floor.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Captures in-process quality control data, live, on the shop
                    floor.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Enables the company to go completely paperless.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Supports seamless handling of re-work and scrap, including
                    lot control.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Supports seamless handling of re-work and scrap, including
                    lot control.
                  </p>
                </div>{" "}
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Provides real-time shop floor management data for scheduling
                    and purchasing.
                  </p>
                </div>{" "}
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Provides real-time shop floor management data for scheduling
                    and purchasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Work_in;
