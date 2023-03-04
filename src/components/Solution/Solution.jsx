import React from "react";
import { Link } from "react-router-dom";
import Enquiry from "../enquiry/Enquiry";
import Navbar from "../Navbar";
import solution from "./solution.jpg"
function Solution() {
  return (
    <div>
      <div className="h-full text-white bg-black">
        <Navbar />
        <div>
          <img
            src={solution}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-5 mt-10 sm:mx-0 mx-6">
          <h1 className="sm:text-5xl text-2xl font-semibold text-green-600">Solutions</h1>
          <h3 className="sm:text-2xl text-xl">
            Grow Your Business with Nextep
          </h3>
          <p className="text-gray-400">
            We offer an entire range of innovative IT solutions and services to
            customers making their inevitable presence in the globe.
          </p>
          <h3 className="text-xl text-yellow-500">Our Major Solutions :-</h3>
        </div>
        <div className="flex flex-wrap  sm:gap-20 gap-5 items-center justify-center py-10 sm:px-[200px] px-0">
          <Link to="/asset">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Asset Management System
            </button>
          </Link>
          <Link to="/warehouse">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Warehouse Management System
            </button>
          </Link>

          <Link to="/file">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              File Tracking Solution
            </button>
          </Link>

          <Link to="/retail">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Retail Management System
            </button>
          </Link>
          <Link to="/track">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Track and Trace Solution
            </button>
          </Link>
          <Link to="/automation">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Automation Scanning
            </button>
          </Link>
          <Link to="/visitor">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Visitor Management Solution
            </button>
          </Link>
          <Link to="/workin">
            <button className="bg-blue-900 p-3 hover:bg-transparent hover:text-blue-300 hover:border-2 border-solid">
              Work-In Progress Application
            </button>
          </Link>
        </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Solution;
