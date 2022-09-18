import React from 'react'
import logo from '../images/logo.svg'
import { navMenu } from '../constants'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-black w-full px-16 py-10 flex sm:flex-row flex-col justify-between items-center'>
      <div className='flex flex-col sm:items-start items-center'>
        <img src={logo} alt="" className='w-[150px] '/>
        <div className='flex sm:flex-row flex-col sm:items-start items-center mt-6'>
            {navMenu.map((menu, index) => (
                <li key={menu.id} className={`list-none font-poppins font-normal text-white ${index === navMenu.length + 1 ? 'mr-0' : 'mr-6'}`}>{menu.title}</li>
            ))}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-end sm:justify-end justify-center sm:mt-0 mt-6'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" className='ml-4'/>
            <img src={pinterest} alt=""  className='ml-4'/>
            <img src={insta} alt=""  className='ml-4'/>
        </div>
        <p className='font-poppins font-normal sm:text-[16px] sm:text-left text-center text-[14px] text-[#bbb] sm:mt-6 mt-2'>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
