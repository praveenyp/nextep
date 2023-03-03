import React from "react";
// import AboutUs from "../components/AboutUs";
// import AutoSlider from "../components/AutoSlider";
import Enquiry from "../components/enquiry/Enquiry";
import Home2 from "../components/Home/Home";
import Navbar from "../components/Navbar";
import Partner from "../components/partner/Partner";
// import ScrollButton from "../components/ScrollButton";
// import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/* <ScrollButton /> */}
      <Navbar />
      <Home2/>
      {/* <AutoSlider /> */}
      {/* <AboutUs /> */}
      {/* <Testimonial /> */}
      <Partner />
      <Enquiry />
    </div>
  );
};

export default Home;
