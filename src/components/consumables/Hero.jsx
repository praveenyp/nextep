import React from 'react'
import hero from "./assets/hero.jpeg"
function Hero() {
  return (
    <div>
      <img src={hero} alt="" className="h-[20vh] md:h-[100vh] w-[100%]" />
      <div className='absolute top-20 left-20 w-[70%] rounded   bg-none p-4 md:-top-40 md:left-20 md:max-w-none md:bg-transparent md:p-8 sm:mt-[300px] mt-0 flex items-center -skew-x-12'>
        <h2 className='text-2xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-500 md:text-6xl py-4 px-7 rounded-xl text-gray-800'>Consumables</h2>
      </div>
    </div>
  )
}

export default Hero
