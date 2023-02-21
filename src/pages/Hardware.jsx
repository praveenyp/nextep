import React from "react";
import Enquiry from "../components/enquiry/Enquiry";
// import Automation from "../components/hardware/Automation";
import Hero from "../components/hardware/Hero";
// import Inspection from "../components/hardware/Inspection";
import Navbar from "../components/hardware/Navbar";
import Printer from "../components/hardware/Printer";
import Rfid from "../components/hardware/Rfid";
import Scanning from "../components/hardware/Scanning";
import Tablets from "../components/hardware/Tablets";
import Partners from "../components/partner/Partner";
import ScrollButton from "../components/ScrollButton";
function Hardware() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ScrollButton />
      <Printer />
      <Scanning />
      {/* <Automation /> */}
      <Rfid />
      {/* <Inspection /> */}
      <Tablets />
      <Partners />
      <Enquiry />
    </div>
  );
}

export default Hardware;
