import React from "react";
import AboutUs from "../components/AboutUs";
import Enquiry from "../components/enquiry/Enquiry";

import Navbar from "../components/Navbar";
import Partner from "../components/partner/Partner";
import Testimonial from "../components/Testimonial";



const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Testimonial/>
      <Partner/>
      <Enquiry/>
    </div>
  );
};

export default Home;
