import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  return (
    
    <nav className="fixed top-0 flex w-full items-center justify-between border-b border-b-grey-700 bg-grey/70 px16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover: opacity-100">Bill Nguyen</a>
        <ul className="hidden md:flex gap-10">
          <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
          <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
          <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
          <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contacts</li></a>



        </ul>

        <ul className="hidden md:flex gap-5">
         <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'> 

          <BsLinkedin />
         </li>

         <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'> 

            <BsGithub />
          </li>

         




        </ul>
    </nav>
    
  )
}

export default Navbar