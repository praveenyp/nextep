import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      <h1 className="sm:text-6xl text-3xl sm:py-10 py-2  text-slate-400 flex justify-center pt-10">
        What People Says!
      </h1>

      <div className="flex flex-wrap items-center justify-evenly gap-2 ">
        <div className="sm:w-[30%] w-[70%] bg-slate-900 sm:h-[300px] h-[250px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-600" />
          <span className="text-center sm:mx-10 mx-1">
            <p className="text-gray-400 skew-x-6 sm:text-base text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 sm:text-sm text-[13px] text-cyan-800 skew-x-6">
              <span className="flex flex-col justify-center items-center">
                <p>person name</p>
                <p>CEO</p>
              </span>
              |<p>company</p>
            </span>
          </div>
        </div>
        <div className="sm:w-[30%] w-[70%] bg-slate-900 sm:h-[300px] h-[250px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center sm:mx-10 mx-1">
            <p className="text-gray-400 skew-x-6 sm:text-base text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 sm:text-sm text-[13px] text-cyan-800 skew-x-6">
              <span className="flex flex-col justify-center items-center">
                <p>person name</p>
                <p>CEO</p>
              </span>
              |<p>company</p>
            </span>
          </div>
        </div>
        <div className="sm:w-[30%] w-[70%] bg-slate-900 sm:h-[300px] h-[250px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center sm:mx-10 mx-1">
            <p className="text-gray-400 skew-x-6 sm:text-base text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 sm:text-sm text-[13px] text-cyan-800 skew-x-6">
              <span className="flex flex-col justify-center items-center">
                <p>person name</p>
                <p>CEO</p>
              </span>
              |<p>company</p>
            </span>
          </div>
        </div>
        <div className=" sm:w-[30%] w-[70%] bg-slate-900 sm:h-[300px] h-[250px] flex flex-col items-center justify-center my-10 rounded-xl shadow-xl shadow-black -skew-x-6">
          <RiDoubleQuotesL className="mr-[90%] text-red-700" />
          <span className="text-center sm:mx-10 mx-1">
            <p className="text-gray-400 skew-x-6 sm:text-base text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              dolores voluptas repudiandae maiores. Nesciunt illo, itaque
              aliquid doloribus rerum, esse exercitationem possimus animi cum
              minus similique unde debitis laboriosam minima.
            </p>
            <RiDoubleQuotesR className="ml-[90%] text-red-700" />
          </span>
          <div className="flex items-center justify-center">
            <span className="flex flex-row gap-2 sm:text-sm text-[13px] text-cyan-800 skew-x-6">
              <span className="flex flex-col justify-center items-center">
                <p>person name</p>
                <p>CEO</p>
              </span>
              |<p>company</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
