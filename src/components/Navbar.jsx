import React from "react";
import Logo from "../assets/Nextep logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row sm:justify-around justify-evenly mt-5 bg-transparent">
        <span className="">
        <a href="/" className="">
            <img src={Logo} alt="logo" className="h-10 sm:h-20"/>
        </a>
        </span>
        <nav className="">
            <span className="">
                <ul className="sm:mt-5 mt-12  flex flex-row sm:text-base text-xs sm:space-x-24 space-x-3 sm:ml-0 ml-0 bg-green-700 sm:px-5 px-1  sm:py-2 rounded-md text-white sm:uppercase lowercase">
                    <li className="">
                        <a href="/" className="bg-green-700 sm:px-0 px-1  sm:py-2">Hardware</a>
                    </li>
                    <li>
                        <a href="/" className="bg-green-700 sm:px-5 px-1  sm:py-2">Solution</a>
                    </li>
                    <li>
                        <a href="/" className="bg-green-700 sm:px-0 px-1  sm:py-2">Consumables</a>
                    </li>
                </ul>
            </span>
        </nav>
        <span className="sm:mt-7 mt-3 sm:text-base text-xs sm:space-x-9 space-x-3 sm:mr-0 mr-2 hover:text-green-800">
            <a href="/">Call</a>
            <a href="/" className="bg-green-700 sm:px-5 px-2  sm:py-2 py-1 sm:text-base text-xs hover:bg-green-800 text-white rounded-md uppercase ">Enquiry</a>
        </span>
    </div>
  );
};

export default Navbar;
