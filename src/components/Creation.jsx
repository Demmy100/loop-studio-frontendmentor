import React from 'react'
import { creations } from '../constants'

const Creation = () => {
  return (
    <div className='flex flex-col px-16 py-16'>
      <div className='flex sm:flex-row flex-col justify-between items-center'>
        <h1 className='font-poppins font-normal sm:text-[32px] text-[20px] sm:leading-[35px] leading-[25px] text-darkBlue tracking-[0.01em]'>OUR CREATIONS</h1>
        <button type='button' className='border-2 sm:flex hidden border-darkBlue px-4 py-1 text-darkBlue'>SEE ALL</button>
      </div>
      <div className='grid sm:grid-cols-4 grid-rows-1 gap-6 mt-10 '>
        {creations.map((creation) => (
           <div key={creation.id} className=' relative cursor-pointer'>
             <img src={creation.img} alt='' className='w-[500px] h-[550px] hover:opacity-[0.8] object-cover'/>
             <p className='font-poppins font-normal text-[30px] text-[#ddd] absolute leading-[35px] max-w-[130px] bottom-[30px] left-[30px]'>{creation.title}</p>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Creation
