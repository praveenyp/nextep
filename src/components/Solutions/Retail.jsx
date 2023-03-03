import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import retail from "./images/retail.jpg"
function Retail() {
  return (
    <div>
      <div className="h-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar />
        <div>
          <img
            src={retail}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Retail Management System
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Shop It is a comprehensive solution designed to automate the
              activities of Retailers, Distributors, Wholesalers and Traders in
              any business segment. It helps retailers to make correct
              merchandising decisions using accurate and timely data. The tools
              available helps you to easily control your inventory and prices,
              manage trends, build customer loyalty and help you stay ahead of
              the game. Easy-to-use user interface has the capability to
              administer the total enterprise and efficiency and manage
              information. It covers Complete Customer Management, POS, Supply
              Chain, Inventory Reporting, Product database etc. It is a Complete
              MIS tool for Retail business management excluding the Financial
              accounting.
            </p>

            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of the Retail Management system
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Compatible with all commonly available POS hardware's
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Access restriction option to restrict users to access certain entry/reports
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Multiple billing counters can be created
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Automatic billing using barcode for reduced human errors and super fast checkouts
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Cash & Credit sale management
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Compatibility with common hardware like cash-drawer, scanner, printer etc.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Item wise discount and total discount option during billing
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Capable of handle thousands of Items efficiently
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Flexible classification of items in to multiple categories, departments and brands
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

export default Retail;
