import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)
  const menuOpen = () => setIsOpened(!isOpened)

  return (
    <nav className="fixed top-0 flex w-full items-center justify-between border-b border-gray-700/30 bg-grey/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">Bill Nguyen</a>
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

        {isOpened? (
          <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
        ): (
          <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
        )}

        {isOpened && (
           <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-black-800 bg-gray/80 backdrop-blur-sm p-12 ${isOpened ? "block": "hidden"}`}>
             <ul className="flex flex-col
              gap-9">
                <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
                <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contacts</li></a>
              </ul>

              <ul className="flex flex-wrap gap-5">
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'> 
                  <BsLinkedin />
                </li>

                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'> 
                    <BsGithub />
                  </li>
              </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar