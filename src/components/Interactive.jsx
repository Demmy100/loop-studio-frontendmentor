import React from 'react'
import interactiive from '../images/desktop/image-interactive.jpg'

const Interactive = () => {
  return (
    <div className='flex sm:flex-row flex-col px-16 py-16 w-full relative'>
      <div className='flex items-start'>
        <img src={interactiive} alt="" className='w-[100%] h-[100%]'/>
      </div>
      <div className='flex flex-col sm:items-start items-center bg-white px-10 py-10 sm:absolute none sm:top-[45%] top-[0] sm:left-[40%] left-[0]'>
        <h1 className='font-poppins font-normal sm:text-[32px] text-[20px] sm:leading-[35px] leading-[25px] text-darkBlue'>THE LEADER IN <br /> INTERACTIVE VR</h1>
        <p className='font-normal font-poppins sm:text-left text-center text-veryDarkBlue max-w-[470px] mt-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </div>
  )
}

export default Interactive
