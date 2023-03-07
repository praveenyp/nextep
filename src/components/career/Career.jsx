import React from "react";
import Enquiry from "../enquiry/Enquiry";
import Navbar from "../Navbar";
import career from "./career.jpg"
function Career() {
  return (
    <div>
        <Navbar/>
      <div className="sm:h-screen h-[500px] bg-black">
        <div>
          <img
            src={career}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-[150px] mt-20 pb-5">
          <h3 className="sm:text-3xl text-md text-green-500 mx-5">Click the following Button to send your Resume</h3>
          <a href="mailto:nagaraj@nextepind.com">
            <span className="">
              <button className="text-gray-200 sm:text-2xl text-xl bg-blue-800 sm:px-[100px] px-10 sm:py-5 py-2 sm:mt-10  rounded-full">Send Resume</button>
            </span>
          </a>
        </div>
      </div>
      <Enquiry/>
    </div>
  );
}

export default Career;
