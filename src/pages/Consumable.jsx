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
    <div>
      <ScrollButton/>
      <Navbar/>
      <div className='sm:h-screen h-[200px] bg-no-repeat' style={{backgroundImage:"url(https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80)"}}>
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