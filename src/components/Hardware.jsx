import React from 'react'
import Automation from './Automation'
import Inspection from './Inspection'
import Printer from './Printer'
import Rfid from './Rfid'
import Scanning from './Scanning'

import Tablets from './Tablets'

function Hardware() {
  return (
    <div>
      <Printer/>
      <Scanning/>
      <Inspection/>
      <Rfid/>
      <Automation/>
      <Tablets/>
    </div>
  )
}

export default Hardware
