import React from "react";
import Navbar from "../Navbar";
// import { GiCheckMark } from "react-icons/gi";
import Enquiry from "../enquiry/Enquiry";
import track from "./images/track.jfif"

function Track() {
  return (
    <div>
      <div className="h-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar />
        <div>
          <img
            src={track}
            alt=""
            className="w-[100%] sm:h-[500px] h-[200px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-5xl text-xl font-semibold my-5 text-blue-300">
            Track and Trace Solution
          </h1>
          <div className="flex flex-col sm:mx-[300px] mx-10 gap-8">
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Track and Trace Solutions deals with the process of determining
              the current and past locations of a product. This solution comes
              with both Barcode as well as Radio Frequency Identification
              (RFID). Barcode technology is a common and cost-effective method.
              RFID is more effective than Barcode but at the same time, there is
              a cost involved to implement RFID. However, RFID is very effective
              in supply chains.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              Track and Trace arrangements are worried about the appropriation
              and coordination of a wide scope of items, which encourages to
              find the present and past area of the object of intrigue. The
              significant innovations used to trace the conveyance of the items
              incorporate radio-recurrence identification (RFID) and
              standardized tags. As of late, there is an expansion in the item
              review, which came about into the advancement of programming,
              equipment, and counselling frameworks by the producers of track
              and trace frameworks. These items offer a wide scope of answers
              for following items taking into account various businesses.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              The worldwide track and trace arrangements advertise is required
              to witness significant development during the figure time frame
              because of components, for example, increment in a selection of
              track and trace arrangements by medicinal gadget and
              pharmaceutical makers to conquer the issue of medication fake and
              organized administrative system and execution of measures. Even
              though these components earn the development of the market, high
              establishment cost related to serialization and total arrangements
              significantly ruin the market development.
            </p>
            <p className="sm:tracking-wider tracking-tight text-justify sm:text-base text-xs">
              The Track and Trace arrangements advertise is fragmented dependent
              on item type, innovation, application, end client, and topography.
              Given an item, the market is bifurcated into equipment frameworks
              and programming arrangements. The equipment frameworks advertise
              is further classified into printing and stamping arrangements,
              checking and verification arrangements, marking arrangements, and
              others. The product arrangements showcase is sub-divided into
              plant chief programming, line controller programming, a group
              following programming, and others. Because of innovation, track,
              and trace arrangements advertise is divided into standardized
              identification and RFID. In light of uses, the market is
              fragmented into serialization and conglomeration arrangements. The
              serialization arrangements showcase is further classified into
              bottle, mark, container, and information grid serialization. The
              collection arrangements showcase is sub-fragmented into pack,
              case, and bed conglomeration. In light of the end client, the
              market for track promotion trace arrangements is classified into
              pharmaceutical makers, restorative gadgets makers, and others.
            </p>
          </div>
        </div>
      </div>
      <Enquiry />
    </div>
  );
}

export default Track;
