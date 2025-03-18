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
            
          <img 
            src={image}  
            alt='Bill Nguyen' 
           className="w-[300px] h-[300px]  overflow-hidden rounded-full shadow-xl shadow-gray-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-1xl hover:shadow-gray-600"
          />
        </motion.div>
        <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex max-w-[600px] flex-col items-center justify-center gap-1 text-center'>
          <div className="pb-1"> {/* Wrapper with padding */}
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light leading-relaxed md:text-7xl pb-3">
                Bill Nguyen
          </h1>

          </div>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl mb-1">Computer Science Student</h3>

          <p className="md:text-base text-pretty text-sm text-gray-400">I am a Computer Science student at the Monash University, Melbourne. I am passionate about software development and I am always looking for opportunities to learn and grow.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero