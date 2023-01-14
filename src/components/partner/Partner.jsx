import React from 'react'


function Partner() {
  return (
    <>
      <div className='h-full bg-gradient-to-r from-gray-700 to-gray-900 '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='sm:text-6xl text-2xl text-white font-bold mt-8'>Our trusted partners</h1>
          <p className='sm:text-lg text-md text-center mt-8 text-gray-300 font-semibold sm:mx-0 mx-10'>We just got featured in the following companies and its has been the most incredible journey. We work with the best companies across the world</p>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-20 mt-8'>
          <div className=' w-[20%] rounded-xl'>
            <img className='' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Zebra_Technologies_logo.svg/1200px-Zebra_Technologies_logo.svg.png" alt="" />
          </div>
          
          <div className=' w-[20%] rounded-xl'>
            <img className='' src="https://www.impinj.com/getmedia/9e90df9a-40c9-46f1-85c4-7ee52dcd3a9d/Impinj_Primary_Logo_CLR_SM-600-400.png?width=600&amp;height=400&amp;ext=.png" alt="" />
          </div>
          <div className='  w-[20%] rounded-xl'>
            <img className='' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Zebra_Technologies_logo.svg/1200px-Zebra_Technologies_logo.svg.png" alt="" />
          </div>
          <div className='  w-[20%] rounded-xl'>
            <img className=''  src="https://www.impinj.com/getmedia/ef19a192-69ed-4c4a-b897-e3723f53ac44/Impinj_Logo_BLK_SM600x400.png?width=600&amp;height=400&amp;ext=.png" alt="" />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Partner