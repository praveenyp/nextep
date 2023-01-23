import React from 'react'
import IndustrialLable from '../components/consumables/IndustrialLable'
import Rfidtags from '../components/consumables/Rfidtags'
import Ribbons from "../components/consumables/Ribbons"
import Enquiry from '../components/enquiry/Enquiry'
import Navbar from '../components/consumables/Navbar'
import Partner from '../components/partner/Partner'
import ScrollButton from '../components/ScrollButton'
function Consumable() {
  return (
    <div className='scroll-smooth'>
      <ScrollButton/>
      <Navbar/>
      <div className='sm:h-screen h-[200px] w-full bg-no-repeat' style={{backgroundImage:"url(https://images.unsplash.com/photo-1611117775350-ac3950990985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80)"}}>
        <div>
          <h1 className='sm:text-8xl text-lg font-bold pt-[25%] uppercase text-green-800'>Consumables</h1>
        </div>
      </div>
      <IndustrialLable/>
      <Ribbons/>
      <Rfidtags/>
      <Partner/>
      <Enquiry/>
    </div>
  )
}

export default Consumable
