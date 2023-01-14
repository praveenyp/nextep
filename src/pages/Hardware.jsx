import React from 'react'
import Tablets from "../components/Tablets"
import Automation from "../components/Automation"
import Rfid from "../components/Rfid"
import Inspection from "../components/Inspection"
import Scanning from "../components/Scanning"
import Printer from "../components/Printer"
import Enquiry from '../components/enquiry/Enquiry'
import Partner from '../components/partner/Partner'
function Hardware() {
  return (
    <div>
       <Printer/>
      <Scanning/>
      <Inspection/>
      <Rfid/>
      <Automation/>
      <Tablets/>
      <Partner/>
      <Enquiry/>
    </div>
  )
}

export default Hardware
