import React from 'react'
import IndustrialLable from '../components/consumables/IndustrialLable'
import Rfidtags from '../components/consumables/Rfidtags'
import Ribbons from "../components/consumables/Ribbons"
import Enquiry from '../components/enquiry/Enquiry'

// import Partner from '../components/partner/Partner'
import ScrollButton from '../components/ScrollButton'
import Hero from '../components/consumables/Hero'
import Navbar from '../components/Navbar'
function Consumable() {
  return (
    <div className='scroll-smooth' id='consumable'>
      <ScrollButton/>
      <Navbar/>
      <Hero/>
      <IndustrialLable/>
      <Ribbons/>
      <Rfidtags/>
      {/* <Partner/> */}
      <Enquiry/>
    </div>
  )
}

export default Consumable
