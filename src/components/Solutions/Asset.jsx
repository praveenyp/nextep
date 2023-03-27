import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import asset from "./images/asset.jpg";

function Asset() {
  return (
    <div>
      <div className="h-full text-white bg-black">
        <Navbar />
        <div>
          <img src={asset} alt="" className="w-[100%] sm:h-[500px] h-[200px]" />
        </div>

        <div className="flex flex-col items-center justify- pt-20 pb-20">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Asset Management System
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8 text-gray-400">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              A standout amongst the most vital components of any business is
              the ability to manage assets. Asset tracking software can enhance
              the proficiency and profitability of organizations in almost every
              industry. Giving your business the devices to settle on more
              productive and exact choices about the management of assets, asset
              inventory tracking software furnishes organizations with the
              instruments they have to run more adequately. In addition to asset
              tracking, staying on top of each part of operations—including
              inventory and labor costs and additional work orders and scheduled
              maintenance —empowers organizations to better deal with all
              territories of operations and increase productivity.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Every organization builds up its own unique structure and
              configuration for physical assets. Assets can be centrally located
              or broadly distributed. They can be fixed, moveable or even
              mobile. They can be moved to new areas, supplanted, swapped and
              evacuated for repairs. Moreover assets can be mechanical,
              electrical or civil. A large enterprise may have thousands of
              individually numbered assets performing one function in a process
              of many functions Therefore proper asset management is key for the
              production of quality goods and services.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Asset management software helps with this task by maintaining a
              record of all the assets you need to screen. It can hold points of
              interest of their service schedules, upkeep records, depreciated
              value and schedule for replacement. The software can be set to
              trigger notices for any of these occasions, so you keep up general
              cycles of repair and reestablishment.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              AMS maintains details of company assets, everything from PCs to
              machine devices, to work area and seats, to rolling mills. It's of
              most utilize when managing with assets which have a short , fixed
              service life, and depreciate in quality over that life. AMS
              software helps with this task by maintaining a record of all the
              assets you want to monitor. It can holds subtle elements of their
              service schedules, support records, depreciated esteem and planned
              for substitution.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              AMS software can be set to trigger warnings for any of these
              occasions, so you keep up regular cycles of repair and recharging.
              AMS tracks where your assets are, what state they are in, and who
              they are at present assigned to. This application has the devices
              required for an entrepreneur who needs to get your fixed assets
              under control, a bookkeeper who needs to reduce the time that it
              takes to track your organization's asset inventory.
            </p>
            <div>
              <h1 className="sm:text-3xl text-lg text-red-400">
                Key Result of Asset Management System
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Establishment and support of frameworks and procedures for
                    the following and the board of advantages
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Preparation of auspicious reports and exhortation on the
                    status of benefits
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Fewer Error
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Reduction of Paper Work
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Identification and re-sending of abundance gear
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Easy to identify replaced and retired asset.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    The reduced absolute expense of proprietorship.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Reduce evaluating the time of benefit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of the Asset Management system
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Immediate Access to Asset Location
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Provides High Level of Data Integrity
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Increases Efficiency
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Lowers Costs
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Increases Accuracy
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Inventory Visibility
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Real time Traceability of asset
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Easy to get Asset current value as per IT Act & Company Act.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Easy to get Current status of Asset
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Asset;
