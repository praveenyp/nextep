import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import visitor from "./images/visitorr.png"
function Visitor() {
  return (
    <div>
      <div className="h-full text-white bg-black">
        <Navbar />
        <div>
          <img
            src={visitor}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center pt-20 pb-20">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Visitor Management System
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8 text-gray-400">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              VMS will help to avoid the shared usage of pen, register, lanyard
              etc. This will help to avoid the spread of virus. VMS will
              maintain the centralized data and can access in few clicks and
              maintain for a longer period. Keep a record of the Ins and OUTs of
              people will improve the visibility of the data with minimal
              efforts
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Professional VMS in place of manual registers will help to improve
              organization's image. Know exactly who, where, why and when a
              visitor is onsite. Recurring Investment for manual registers and
              pen , time to reconcile data, space for keeping records etc will
              reduce drastically
            </p>

            <div>
              <h1 className="sm:text-3xl text-lg text-red-400">
                Key Benefits of Visitor Management Solution
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Avoid the spread of virus by replacing manual registers
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Enhance compliance
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Strengthen security
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Reduced the operating cost
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Manage emergency evacuations
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Centralized data
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Better brand image
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of Visitor Management Solution
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Preregistration by the host to reduce the registration time
                    during check in
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Take photos for identification
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Secure QR code sign in
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Secure QR code sign in
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Instant email, SMS notifications
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Print visitor badges
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    View visitor activity reports for a period of time
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Send emergency SMSs
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Block list and Watch list
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

export default Visitor;
