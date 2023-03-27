import React from "react";
import { Link } from "react-router-dom";
import Enquiry from "../enquiry/Enquiry";
import Navbar from "../Navbar";
import solution from "./solution.jpg";
import { AiOutlineFilePdf } from "react-icons/ai";
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
          <h1 className="sm:text-5xl text-2xl font-semibold text-green-600">
            Solutions
          </h1>
          <h3 className="sm:text-2xl text-xl">
            Grow Your Business with Nextep
          </h3>
          <p className="text-gray-400">
            We offer an entire range of innovative IT solutions and services to
            customers making their inevitable presence in the globe.
          </p>
          <div className="flex items-center justify-center flex-col">

          <h3 className="text-xl text-yellow-500">Our Major Solutions :-</h3>
        </div>
        <div className="md:grid-cols-4 grid-cols-1  grid gap-10 items-center justify-center">
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
          <div className="flex items-center justify-center flex-col py-20">
            <h1 className="text-lg text-sky-300">We Offer Many Other Solutions</h1>
            <div className="md:grid-cols-4 grid-cols-1  grid gap-10">
              <a
                href="https://drive.google.com/file/d/1SHK17h9wJrwXrnA7Rmz8-hFilWzhnQ-b/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Asset Management</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1snFVKzCCxvbRoqs3ncfQp537OxnXO_aH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Brand Protection</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1-rPrT96PffYpOVHi8Ylki-Y2wP5mJnFG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Open Yard</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1JFwr9zcZv88l20mD4RVlDhasIq4mPRui/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Track and Trace</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1WkzEjvoqFI1aVhnlkiKI_hPOTXaMj2mb/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Vehicle Tracking</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1pwWfPota_N4j7ubM3JkE9i9JKHkAIVfa/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Warehouse Management</button>
                <AiOutlineFilePdf />
              </a>
              <a
                href="https://drive.google.com/file/d/1ytp7LADq-irmepmW-oiHfllIJuz1wNXS/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-2 mt-10 text-lg text-yellow-500 border-2 border-red-600 p-2"
              >
                <button className="md:text-base text-sm">Work-In Progress</button>
                <AiOutlineFilePdf />
              </a>
              
            </div>
          </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Solution;
