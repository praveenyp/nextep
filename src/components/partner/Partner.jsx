import React from "react";
import threem from "./3m.svg";
import ad from "./averry dennison.png";
import zebra from "./zebra.png";
import impinj from "./impinj.webp";
import tsc from "./tsc.svg";
import sato from "./sato.svg";
import honeywell from "./honeywell.png";
import urovo from "./urovo.png";
function Partner() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-blue-400 to-red-200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-6xl text-2xl text-red-800 font-bold mt-8">
            Our trusted partners
          </h1>
          <p className="sm:text-lg text-md text-center mt-8 text-gray-700 font-medium sm:mx-0 mx-10">
            We just got featured in the following companies and its has been the
            most incredible journey. We work with the best companies across the
            world
          </p>
        </div>

        <div className="flex flex-wrap  sm:justify-center justify-center items-center gap-28 mt-10 pb-8">
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={threem} alt="3m" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={ad} alt="avery dennison" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={zebra} alt="zebra" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={impinj} alt="impinj" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={tsc} alt="tcs" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={sato} alt="sato" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={honeywell} alt="honeywell" />
          <img className="sm:h-20 h-10 sm:w-56 w-32" src={urovo} alt="urovo" />
        </div>
      </div>
    </>
  );
}

export default Partner;
