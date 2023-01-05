import React from 'react'
import Printer from './Printer'
import Scanning from './Scanning'
import Sidebar from "./Sidebar"

function Hardware() {
  return (
    <div>
    <Sidebar/>
      <Printer/>
      <Scanning/>
    </div>
  )
}

export default Hardware
