import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { navMenu } from '../constants'
import close from '../images/icon-close.svg'
import menu from '../images/icon-hamburger.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
   <nav className='flex justify-between items-center relative w-full'>
    <img src={logo} alt="" className='w-[150px] z-[1]'/>
    <ul className='list-none md:flex hidden justify-between items-center'>
        {navMenu.map((menu) => (
            <li key={menu.id} className='font-poppins font-normal text-white mr-4'>{menu.title}</li>
        ))}
    </ul>

    <div className='md:hidden flex justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle((prev) => !prev)} className='z-[1]'/>
        <div className={`${toggle ? 'flex' : 'hidden'} px-6 py-24 bg-black absolute z-[0] -top-6 -right-[65px] justify-start w-[100vw]`}>
        <ul className='list-none flex flex-col justify-start items-start'>
        {navMenu.map((menu) => (
            <li key={menu.id} className='font-poppins font-normal text-white mr-4'>{menu.title}</li>
        ))}
    </ul> 
        </div>
    </div>
   </nav>
  )
}

export default Navbar
