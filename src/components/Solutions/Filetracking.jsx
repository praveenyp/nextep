import React from "react";
import Navbar from "../Navbar";
import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import file from "./images/file.jpg"
function Filetracking() {
  return (
    <div>
      <div className="h-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar />
        <div>
          <img
            src={file}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            File Tracking Solution
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              File Management software is an awesome advantage for an
              organization searching for consolation that they can track their
              documents effectively and rapidly at at anytime. There are various
              favorable circumstances that originate from using a file tracking
              software system, some of which are reliant upon every individual
              organization and their specific circumstances and requirements,
              however here are a couple of the most popular reasons.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Utilization of a file tracking software system permits you to
              track the area of any given file which extraordinarily diminishes
              the time it takes to do as such and enhances the velocity and
              execution of your organization or company 's transactions. It can
              do this by putting a barcode on the file which is then scanned
              into the system and data can be pulled up in regards to the
              documents whereabouts no matter if it is in storage or in your
              filing cabinet. This additionally lessens the possibility of a
              document getting to be lost and your workers scrambling to
              discover another approach to take a few to get back some composure
              of the information contained in the record.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              File control enhances the management of vital archive documents in
              commercial enterprises like insurance, medicinal and legal where
              the loss of such files can bring about extreme issues and
              expenses. FMS enhances the following of records so the documents
              can more immediately located and document workflow more easily
              tracked.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              File control enhances the management of vital archive documents in
              commercial enterprises like insurance, medicinal and legal where
              the loss of such files can bring about extreme issues and
              expenses. FMS enhances the following of records so the documents
              can more immediately located and document workflow more easily
              tracked.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Record control improves the organization of basic file reports in
              business undertakings like protection, restorative and legitimate
              where the loss of such records can achieve great issues and
              expenses. FMS upgrades the accompanying of records so records can
              be more promptly found and document work handle more easily took
              after.
            </p>
            {/* <div>
              <h1 className="sm:text-3xl text-lg text-red-400">
                Key Result of File Tracking Solution
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Defect free output
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Lower Work in progress
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Better productivity
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Elimination of waste
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Manufacturing time is cut down
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Cost is reduced
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Continuous improvement in quality
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Speed urgent production orders with priority identification
                    and alerting.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Help reduce mistakes with assembly process verification and
                    alerts when semi-finished items or batches are routing to
                    the wrong manufacturing cell.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Support parts sequence verification from receiving to final
                    assembly line delivery by tagging items, cases or pallets.
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Greater Visibility & Accuracy of Raw Material and Production
                    Parts.
                  </p>
                </div>
              </div>
            </div> */}
            <div>
              <h1 className="sm:text-3xl text-lg text-blue-400">
                Advantages of the File Tracking Solution
              </h1>
              <div className="flex flex-col gap-5 my-3">
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Cost savings
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Security
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Disaster recovery
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Access
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Process consistency
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Flexible Retrieval
                  </p>
                </div>
                <div className="flex flex-row  gap-5">
                  <GiCheckMark className="text-green-600 h-5 w-5" />
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    Controlled and Improved Document distribution
                  </p>
                </div>

                <div>
                  <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
                    File tracking software is typically customizable to your
                    specific needs and can be used by all workers in an
                    organization. The bigger your organization is and the more
                    individuals that you have handling your files, the more a
                    record file tracking software system can advantage you. It
                    is simple for one individual file to lose all sense of
                    direction in the buzzing about of profitability, however you
                    can minimize that risk. Expand the execution and
                    productivity of your business by taking advantage the
                    rewards that a record following programming framework brings
                    to the table.
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

export default Filetracking;
