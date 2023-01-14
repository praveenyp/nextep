import React from "react";
import { SocialIcon } from "react-social-icons";
function Enquiry() {
  return (
    <>
      <div className="h-full bg-black  text-gray-300 flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-center sm:text-6xl text-3xl sm:mb-24 mb-0 font-bold  sm:mt-20 mt-10">
          Get In Touch With Us
        </h1>
        <form className="flex flex-col items-center justify-center">
          <div className="sm:my-6 my-3 flex sm:flex-row flex-col items-center justify-center">
            <input
              type="text"
              placeholder="name"
              className="contactInput sm:mr-3 mr-0  sm:w-[500px] w-[100%] sm:my-0 my-3"
            />
            <input
              type="email"
              placeholder="email"
              className="contactInput sm:ml-3 ml-0 sm:w-[500px] w-[100%] sm:my-0 my-2"
            />
          </div>
          <div className="sm:my-3 my-0 flex sm:flex-row flex-col items-center justify-center">
            <input
              type="number"
              placeholder="mobile"
              className="contactInput sm:mr-3 mr-0 sm:w-[500px] w-[100%] sm:my-0 my-2"
            />
            <input
              type="text"
              placeholder="subject"
              className="contactInput sm:ml-3 ml-0  sm:w-[500px] w-[100%] sm:my-3 my-3"
            />
          </div>
          <textarea
            name="message"
            placeholder="message"
            className="contactInput sm:w-[1025px] w-[100%] sm:my-3 my-3"
          ></textarea>
          <div className="flex justify-center items-center mt-6">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden sm:text-sm text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 sm:mt-0 mt-6">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                Submit
              </span>
            </button>
          </div>
        </form>
        <div className="mt-10 flex flex-row gap-[100px] text-gray-400 items-center justify-center">
          
            <p>© Copyright 2023 Nextep. All Rights Reserved</p>
          

          <div className="flex sm:flex-row flex-col">
            <p className="mt-3">Follow us on</p>

            <div>
              <SocialIcon
                url="https://www.linkedin.com/in/praveenputtappa/"
                fgColor="green"
                bgColor="transparent"
                className="rounded-xl hover:bg-gray-800"
              />
              <SocialIcon
                url="https://www.instagram.com/"
                fgColor="green"
                bgColor="transparent"
                className="rounded-xl hover:bg-gray-800"
              />
              <SocialIcon
                url="https://twitter.com/"
                fgColor="green"
                bgColor="transparent"
                className="rounded-xl hover:bg-gray-800"
              />
              <SocialIcon
                url="https://www.youtube.com/"
                fgColor="green"
                bgColor="transparent"
                className="rounded-xl hover:bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
