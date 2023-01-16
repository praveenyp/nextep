import React from "react";
import AboutUs from "../components/AboutUs";
import Enquiry from "../components/enquiry/Enquiry";
import Hero from "../components/hero/Hero";

import Navbar from "../components/Navbar";
import Partner from "../components/partner/Partner";
import ScrollButton from "../components/ScrollButton";
import Testimonial from "../components/Testimonial";



const Home = () => {
  return (
    <div>
      <ScrollButton/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Testimonial/>
      <Partner/>
      <Enquiry/>
    </div>
  );
};

export default Home;
