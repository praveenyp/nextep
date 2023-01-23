import React from 'react'
import Enquiry from '../components/enquiry/Enquiry'
import Automation from '../components/hardware/Automation'
import Inspection from '../components/hardware/Inspection'
import Navbar from '../components/hardware/Navbar'
import Printer from '../components/hardware/Printer'
import Rfid from '../components/hardware/Rfid'
import Scanning from '../components/hardware/Scanning'
import Tablets from '../components/hardware/Tablets'
import Partners from "../components/partner/Partner"
import ScrollButton from '../components/ScrollButton'
function Hardware() {
  return (
    <div>
      <Navbar/>
      <div className='sm:h-screen h-[200px] bg-no-repeat' style={{backgroundImage:"url(https://images.unsplash.com/photo-1626335507832-40da3b65de57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"}}>
        <div>
          <h1 className='sm:text-8xl text-lg font-bold pt-[25%] uppercase text-green-800'>hardware</h1>
        </div>
      </div>
      <ScrollButton/>
      <Printer/>
      <Scanning/>
       <Automation/>
       <Rfid/>
       <Inspection/>
       <Tablets/>
       <Partners/>
      <Enquiry/>
    </div>
  )
}

export default Hardware
