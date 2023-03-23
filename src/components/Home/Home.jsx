import React from "react";
import NumberCounter from "number-counter";
import abttwo from "../About/asstets/abt2.png";
import abtthree from "../About/asstets/abt3.svg";
import abtfour from "../About/asstets/abt4.png";
import { Link } from "react-router-dom";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import { FaWarehouse } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { GiFiles } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import { GiDigitalTrace } from "react-icons/gi";
import { BsUpcScan } from "react-icons/bs";
// import { MdPayment } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import scanner from "./sacanner.png";
import video from "./video.mp4"
function Home2() {
  return (
    <div className="bg-black text-white w-full">
      <video autoPlay loop muted className="absolute overflow-hidden">
            <source src={video} type="video/mp4" />
           </video>
      <div
        className="sm:h-[800px] h-[590px]  flex flex-col sm:gap-[100px] gap-10"
        id="home"
      >
        <div className="flex items-center justify-center pt-[13%]">
          <div className=" flex flex-col items-center justify-center">
            <span className=" flex flex-row  relative">
              <h1 className="sm:text-9xl text-5xl font-bold text-teal-400 tracking-wider">Nextep</h1>
              <h1 className="flex items-center justify-center sm:text-9xl font-bold text-5xl  text-amber-600">India</h1>
            </span>{" "}
            
            <p className="sm:text-lg text-xs pt-5 sm:font-semibold font-normal uppercase tracking-wider text-center relative">
              labels & labeling | Rfid | barcode | automation & traceability
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-evenly justify-start sm:items-center items-start sm:mt-32 mt-10 sm:mx-0 mx-0 bg-transparent py-10 md:rounded-none rounded-3xl">
          <div className="flex flex-row  w-[100%] justify-center">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500 ease-in-out">
              <img src={abttwo} alt="" />
            </div>
            <div className="flex flex-col items-center  justify-center relative">
              <span className="sm:text-5xl text-xl  font-bold   text-white">
                <NumberCounter end={700} start={0} delay="3" postFix="+" />
              </span>
              <span className="sm:text-lg text-xs  uppercase sm:font-bold font-semibold font-sans text-gray-400">
                active clients
              </span>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-center sm:pt-0 pt-5">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500 ease-in-out">
              <img src={abtthree} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center relative">
              <span className="sm:text-5xl text-xl font-bold text-white">
                <NumberCounter end={15} start={0} delay="3" postFix="+" />
              </span>
              <span className="sm:text-lg text-xs uppercase sm:font-bold font-semibold font-sans text-gray-400">
                year of experience
              </span>
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-center sm:pt-0 pt-5">
            <div className="sm:h-20 h-10 sm:w-20 w-10 transform hover:hue-rotate-180 hover:rotate-180 duration-500  ease-in-out">
              <img src={abtfour} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center relative">
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

      <div className="sm:h-[960px] h-[590px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10 sm:pt-0 pt-16">
          <h1 className="sm:text-6xl text-3xl">
            <span className="text-yellow-500">About</span> <br />
            Nextep India
          </h1>
          <p className="sm:text-lg text-sm font-serif sm:mx-[30%] mx-10 text-justify tracking-wider text-slate-300">
            Nextep India provides Barcode | RFID | Automation | POS |
            Software | Consumables to clients in India and the Middle East, as
            partners to conceptualize and realize their initiatives, to reach
            out their Vision. Whether it is Manufacturing, Retail, Textile,
            Transport and Logistics, Healthcare, Warehouse, and Inventory
            management, we ensure a level of certainty of results that no one
            can match. Since 2015 Stallion thrives on professional...
          </p>
          <button className="border-2 border-solid p-3 uppercase sm:ml-[50%] ml-0 sm:text-lg text-lime-600 hover:text-white hover:border-green-600 text-xs">
            <Link to="/about">Know More</Link>
          </button>
        </div>
      </div>

      <div className="sm:h-full h-[750px] pb-[150px]">
        <div className="flex sm:flex-row flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center sm:gap-10 gap-5 sm:w-[50%] w-[100%]">
            <h1 className="sm:text-6xl text-3xl">
              <span className="text-blue-500">Grow</span> <br />
              Your Business
              <br /> with <span className="text-cyan-600">Nextep</span>
            </h1>
            <p className="sm:text-lg text-sm font-serif sm:mx-[25%] mx-10 text-justify tracking-wider text-slate-300">
              We offer an entire range of innovative IT solutions and services
              to customers making their inevitable presence in the globe...
            </p>
            <button className="border-2 border-solid p-3 uppercase sm:ml-[0%] ml-0 sm:text-lg text-lime-600 hover:text-white hover:border-green-600 text-xs">
              <Link to="/solutions">Know More</Link>
            </button>
          </div>
          <div className="flex flex-wrap items-start justify-start sm:w-[50%] w-[100%] mx-20 sm:gap-16 gap-5 sm:mt-0 mt-5 sm:pl-0 pl-20">
            <Link to="/asset">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <RiMoneyPoundBoxLine className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600 rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Asset Management System
                </h4>
              </div>
            </Link>
            <Link to="/warehouse">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <FaWarehouse className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Warehouse Management System
                </h4>
              </div>
            </Link>

            <Link to="/workin">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <SiProgress className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Work In-Progress Application
                </h4>
              </div>
            </Link>

            <Link to="/file">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <GiFiles className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  File Tracking Solution
                </h4>
              </div>
            </Link>

            <Link to="/retail">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <BiShoppingBag className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Retail Management System
                </h4>
              </div>
            </Link>
            <Link to="/track">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <GiDigitalTrace className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Track and Trace Solution
                </h4>
              </div>
            </Link>

            <Link to="/automation">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <BsUpcScan className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Automation Scanning
                </h4>
              </div>
            </Link>
            <Link to="/visitor">
              <div className="flex flex-row items-center justify-center gap-2 px-0">
                <FaPeopleArrows className="sm:h-16 h-8 sm:w-16 w-8 sm:p-2 p-1 border-2 border-solid hover:border-lime-600  rounded-full text-xs" />
                <h4 className="sm:text-lg text-xs hover:underline underline-offset-8 decoration-blue-600">
                  Visitor Management
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full flex sm:flex-row flex-col items-center justify-center sm:mx-[16%] mx-10 gap-5 pt-10 pb-10">
        <div className="flex flex-col gap-10 sm:w-[50%] w-[100%]">
          <h1 className="sm:text-6xl text-3xl">
            Exceptional <span className="text-pink-500">Products</span> to Grow
            your <span className="text-blue-500">Business.</span>
          </h1>
          <p className="sm:text-lg text-sm font-serif text-justify tracking-wider text-slate-300">
            We offer a wide range of Barcode Printers, Barcode Scanners, RFID,
            EAS, POS, Software, Marking & Coding, Consumables
          </p>
          <span>
            <button className="border-2 border-solid hover:border-green-600 p-3 uppercase sm:ml-[0%] ml-0 sm:text-lg text-lime-600 hover:text-white text-xs">
              <Link to="/products">Know More</Link>
            </button>
          </span>{" "}
          <div>
            <h1 className="text-2xl">Our Product Categories</h1>
            <ul className="text-white flex flex-col items-start justify-center gap-3">
              <Link to="/consumable">
                <li className="border-2 border-solid p-2 bg-lime-800">Consumables</li>
              </Link>
              <Link to="/hardware">
                <li className="border-2 border-solid p-2 px-6 bg-lime-800">Hardware</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="sm:w-[50%] w-[100%]">
          <img
            src={scanner}
            alt=""
            className="sm:pl-[35%] pl-16 sm:h-[500px] h-64"
          />
        </div>
      </div>
    </div>
  );
}

export default Home2;
