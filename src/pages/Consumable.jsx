import React from 'react'
import IndustrialLable from '../components/consumables/IndustrialLable'
import Rfidtags from '../components/consumables/Rfidtags'
import Ribbons from "../components/consumables/Ribbons"
import Enquiry from '../components/enquiry/Enquiry'
import Partner from '../components/partner/Partner'
function Consumable() {
  return (
    <div>
      <div className='h-screen bg-no-repeat' style={{backgroundImage:"url(https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80)"}}>
        <div>
          <h1 className='text-8xl font-bold pt-[25%] uppercase text-indigo-800'>Consumables</h1>
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
