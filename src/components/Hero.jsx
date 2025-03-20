import React from 'react'
import image from '/public/pic2.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='#home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{y: 0, opacity: 1}}
          transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light leading-relaxed md:text-7xl pb-3">
                Hi,I'm Bill Nguyen
          </h1>
         
        </motion.div>
        <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex max-w-[600px] flex-col items-center justify-center gap-1 text-center'>
         
         

          <p className="md:text-base text-pretty text-sm text-gray-400">Dynamic front-end developer and Computer Science undergraduate at Monash University.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero