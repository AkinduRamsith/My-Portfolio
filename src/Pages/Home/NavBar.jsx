import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../../img/logo.png'
const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 ] text-white-300'>
        <div>
    <img src={Logo} alt="Logo Image" style={{width: "90px" }} />
        </div>
        <div>
            <ul className='flex text-gray-800 font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='hidden'>
            <FaBars/>
        </div>

        <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        <div className='hidden'></div>
    </div>
  )
}

export default NavBar