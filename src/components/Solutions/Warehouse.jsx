import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import warehouse from "./images/warehouse.jpg"
function Warehouse() {
  return (
    <div>
      <div className="h-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar />
        <div>
          <img
            src={warehouse}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Warehouse Management System
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              A warehouse management system, or WMS, is a key part of the supply
              chain and primarily aims to control the movement and storage of
              materials within a warehouse and process the associated
              transactions, including shipping, receiving, put away and picking.
              The systems also direct and optimize stock put away based on
              real-time information about the status of bin utilization.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Warehouse management systems often utilize Auto ID Data Capture
              (AIDC) technology, such as barcode scanners, mobile computers,
              wireless LANs and potentially Radio-frequency identification
              (RFID) to efficiently monitor the flow of products. Once data has
              been collected, there is either batch synchronization with, or a
              real-time wireless transmission to a central database. The
              database can then provide useful reports about the status of goods
              in the warehouse.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              The objective of a warehouse management system is to provide a set
              of computerized procedures to handle the receipt of stock and
              returns into a warehouse facility, model and manage the logical
              representation of the physical storage facilities (e.g. racking
              etc), manage the stock within the facility and enable a seamless
              link to order processing and logistics management in order to
              pick, pack and ship product out of the facility.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              The primary purpose of a WMS is to control the movement and
              storage of materials within a warehouse – you might even describe
              it as the legs at the end-of-the line which automates the store,
              traffic and shipping management.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Warehouse management deals with receipt, storage and movement of
              goods, normally finished goods, to intermediate storage locations
              or to final customer. In the multi-echelon model for distribution,
              there are levels of warehouses, starting with the Central
              Warehouse(s), regional warehouses services by the central
              warehouses and retail warehouses at the third level services by
              the regional warehouses and so on. The objective of warehousing
              management is to help in optimal cost of timely order fulfillment
              by managing the resources economically.
            </p>
            <div>
              <h1 className="sm:text-3xl text-lg text-red-400">
                Key Result of Warehouse Management System
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Unique Identify of material in warehouse.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Unique Identify of material in warehouse.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Allocating the location of the material at the warehouse.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Picking the right material for dispatch as per the Pick
                    list.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Packing of the material
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Tracking the movement of material in the warehouse.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                  Generate dispatch label with customer details and shipping address.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Seamless operation in generation of Sales (tax) invoice and
                    Pick List (Delivery Challan)
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Client-server based inventory management software with
                    Barcode enabled data capturing system.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    100% accurate automatic data capturing facility in the dusty
                    environment inside the factory.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Eliminates any change of manipulations thus gives an
                    accurate report online.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of the Warehouse Management system
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Accuracy of data input (error free)
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Aid effective management of resources and inventories
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Labour savings by avoiding manual system
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Cost efficient
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Real time data collection
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Measurement of work in progress throughout the factory
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Rapid access to total production costs
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    More accurate dispatch
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Satisfied Customer
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Lesser paper work
                  </p>
                </div>{" "}
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    No queuing even during peak time
                  </p>
                </div>{" "}
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    No need of experienced hands to operate the machine
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

export default Warehouse;
