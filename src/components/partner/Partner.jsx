import React from "react";

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
              src="https://www.zebra.com/ap/en/header/jcr:content/mainpar/header/navigationComponent/logoImage.adapt.1280.png/1667257022231.png"
              alt=""
            />

            <img
              className="h-20"
              src="https://www.impinj.com/getmedia/3b666d42-5138-4e8a-b24f-21c8b2ec4168/impinj_logo_2.png?width=116&height=48&ext=.png"
              alt=""
            />
            <img
              className="h-20"
              src="https://usca.tscprinters.com/themes/custom/tsc_printers/logo.svg"
              alt=""
            />
            <img
              className="h-20"
              src="https://www.sato-global.com/common/img/site_logo_01.svg"
              alt=""
            />
            <img
              className="h-20"
              src="https://www.honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png"
              alt=""
            />

            <img
              className="h-20"
              src="https://enoss.urovo.com/index/90kjjaHD.png"
              alt=""
            />
            <img
              className="h-20"
              src="https://www.averydennison.com/content/dam/avery_dennison/corporate/global/english/homepage/AD_H1_Logo_Red_RGB_250x45.png"
              alt=""
            />
            <img
              className="h-20"
              src="https://www.3mindia.in/3m_theme_assets/themes/3MTheme/assets/images/unicorn/Logo.svg"
              alt=""
            />

          </div>
        </marquee>
      </div>
    </>
  );
}

export default Partner;
