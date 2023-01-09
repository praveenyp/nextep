import React from 'react'
import IndustrialLable from '../components/consumables/IndustrialLable'
import Rfidtags from '../components/consumables/Rfidtags'
import Ribbons from "../components/consumables/Ribbons"
function Consumable() {
  return (
    <div>
      <IndustrialLable/>
      <Ribbons/>
      <Rfidtags/>
    </div>
  )
}

export default Consumable
