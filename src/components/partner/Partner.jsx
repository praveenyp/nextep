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
      <div className="h-full bg-gradient-to-r from-blue-200 to-red-50">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-6xl text-2xl text-red-800 font-bold mt-8">
            Our trusted partners
          </h1>
          <p className="sm:text-lg text-md text-center mt-8 text-gray-500 font-medium sm:mx-0 mx-10">
            We just got featured in the following companies and its has been the
            most incredible journey. We work with the best companies across the
            world
          </p>
        </div>

        <div className="flex flex-wrap  sm:justify-center justify-center items-center gap-28 mt-10 pb-8">
          <img className="h-20 w-56" src={threem} alt="3m" />
          <img className="h-20 w-56" src={ad} alt="avery dennison" />
          <img className="h-20 w-56" src={zebra} alt="zebra" />
          <img className="h-20 w-56" src={impinj} alt="impinj" />
          <img className="h-20 w-56" src={tsc} alt="tcs" />
          <img className="h-20 w-56" src={sato} alt="sato" />
          <img className="h-20 w-56" src={honeywell} alt="honeywell" />
          <img className="h-20 w-56" src={urovo} alt="urovo" />
        </div>
      </div>
    </>
  );
}

export default Partner;
