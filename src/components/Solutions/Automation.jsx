import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import automation from "./images/automation.jfif";
function Automation() {
  return (
    <div>
      <div className="h-full text-white bg-black">
        <Navbar />
        <div>
          <img
            src={automation}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center pt-20 pb-20">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Automation Scanning Solution
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8 text-gray-400">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Automation scanning solution is used to scan products which run on
              the conveyor belts in a factory. There are two types of Automation
              scanners. One is the Laser Automation Scanner and the other is the
              Image Automation Scanner. Print & Apply System is also included in
              this solution.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Beside perusing standardized tags and RFID labels, fixed scanners
              can be utilized to dependably sort, tally, measure, examine,
              perceive, and confirm the position, size, and generally speaking
              state of items going along a transport. They play out these
              undertakings through various highlights. Complexity sensors
              distinguish contrasts in splendour and shading. Glow sensors
              perceive any fluorescent markings, names, strings, oils, and
              glues. What's more, shading sensors distinguish and separate
              various articles by shading.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              The Datalogic and Honeywell line of items and Stallion's
              Integration Services give incorporates barcode scanners, Omni
              scanners, camera/vision-based reading frameworks, joining
              programming, and dimensioning items. The administrations and
              product offerings we offer will cover the broadest scope of
              distribution centre answers for programmed ID applications,
              including the accompanying:
            </p>
            <div className="">
              <div className="flex flex-row  gap-5">
                <GiCheckMark className="text-green-600 h-5 w-5" />
                <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Receiving and returns
                </p>
              </div>
              <div className="flex flex-row  gap-5">
                <GiCheckMark className="text-green-600 h-5 w-5" />
                <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Verification and clarity approval
                </p>
              </div>{" "}
              <div className="flex flex-row  gap-5">
                <GiCheckMark className="text-green-600 h-5 w-5" />
                <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Scanning burrows, multi-sided scanner tag examining, and
                  information assortment
                </p>
              </div>{" "}
              <div className="flex flex-row  gap-5">
                <GiCheckMark className="text-green-600 h-5 w-5" />
                <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Conveyor mounted scanners material taking care of for
                  warehousing and appropriation
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Automation;
