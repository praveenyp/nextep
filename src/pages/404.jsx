import React from 'react'

function Error() {
  return (
    <div>
      <main className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
        <h1 className='mb-0 text-9xl font-extrabold text-white tracking-widest'>404</h1>
        <div className='bg-[#FF6A3D] px-6 py-1 text-sm font-semibold rounded rotate-12 absolute'>Page Not Found
        </div>
        <button className='mt-0'>
          <a href='/' className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
            <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>
            <span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
            <router-link to="/">Go To Home</router-link>
            </span>
          </a>
        </button>
      </main>
    </div>
  )
}

export default Error
