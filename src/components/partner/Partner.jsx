import React from "react";
import threem from "./3m.svg"
import ad from "./averry dennison.png"
import zebra from "./zebra.png"
import impinj from "./impinj.webp"
import tsc from "./tsc.svg"
import sato from "./sato.svg"
import honeywell from "./honeywell.png"
function Partner() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-700 to-gray-900 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-6xl text-2xl text-white font-bold mt-8">
            Our trusted partners
          </h1>
          <p className="sm:text-lg text-md text-center mt-8 text-gray-300 font-semibold sm:mx-0 mx-10">
            We just got featured in the following companies and its has been the
            most incredible journey. We work with the best companies across the
            world
          </p>
        </div>
        <marquee behavior="scroll" direction="left" scrollamount="30">
          <div className="flex flex-row  sm:justify-center justify-start items-center gap-28 mt-10 mb-16">
            <img
              className="h-20"
              src={threem}
              alt=""
            />
            <img
              className="h-20"
              src={ad}
              alt=""
            />

            <img
              className="h-20"
              src={zebra}
              alt=""
            />

            <img
              className="h-20"
              src={impinj}
              alt=""
            />
            <img
              className="h-20"
              src={tsc}
              alt=""
            />
            <img
              className="h-20"
              src={sato}
              alt=""
            />
            <img
              className="h-20"
              src={honeywell}
              alt=""
            />

            <img
              className="h-20"
              src="https://enoss.urovo.com/index/90kjjaHD.png"
              alt=""
            />
          </div>
        </marquee>
      </div>
    </>
  );
}

export default Partner;
