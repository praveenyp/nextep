import React from 'react'
import hero from "./assets/hero.webp"
function Hero() {
  return (
    <div>
      <img src={hero} alt="" className="h-[40vh] sm:h-[650px] w-[100%]" />
      <div className='absolute top-20 left-20 w-[70%] rounded  bg-none p-4 md:-top-40 md:left-20 md:max-w-none md:bg-transparent md:p-8 sm:mt-[300px] mt-0 flex items-center -skew-x-12'>
        
      </div>
    </div>
  )
}

export default Hero
