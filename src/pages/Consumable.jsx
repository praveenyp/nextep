import React from 'react'
import IndustrialLable from '../components/consumables/IndustrialLable'
import Rfidtags from '../components/consumables/Rfidtags'
import Ribbons from "../components/consumables/Ribbons"
import Enquiry from '../components/enquiry/Enquiry'
import Navbar from '../components/consumables/Navbar'
import Partner from '../components/partner/Partner'
import ScrollButton from '../components/ScrollButton'
import Hero from '../components/consumables/Hero'
function Consumable() {
  return (
    <div className='scroll-smooth'>
      <ScrollButton/>
      <Navbar/>
      <Hero/>
      <IndustrialLable/>
      <Ribbons/>
      <Rfidtags/>
      <Partner/>
      <Enquiry/>
    </div>
  )
}

export default Consumable
