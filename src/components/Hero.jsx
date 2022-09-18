import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='flex flex-col px-16 py-6 w-full image'>
      <Navbar />
      <div className='border-2 border-white w-fit px-4 py-4 my-20'>
        <h1 className='font-poppins font-bold sm:text-[32px] text-[20px] sm:leading-[35px] leading-[25px] text-white tracking-[0.01em]'>IMMERSIVE<br /> EXPERIENCES<br/> THAT DELIVER</h1>
      </div>
    </div>
  )
}

export default Hero
