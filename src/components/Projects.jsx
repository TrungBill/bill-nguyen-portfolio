import React from 'react'
import { motion } from 'framer-motion'
import football from '/public/football.png'
import portfolio from '/public/portfolio.png'
import travel from '/public/travel.png'

// Improved ScrollReveal with staggered animation
const ScrollReveal = ({children, delay = 0}) => {
  return(
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Increased y offset
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Lower threshold - only 10% needs to be visible
      transition={{ duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const projectData = [
  {
    image: football,
    title: 'PitchPulse',
    description: 'A football chrome extension that displays upcoming fixtures and results of football matches.',
    technologies: ['Vite','React', 'Tailwind CSS', 'Football.org API', 'Chrome Storage API'],
  },
  {
    image: travel,
    title: 'Travel Mate',
    description: 'A travel companion web application that displays local points of interest with real-time weather data and a location-based search to provide quick discovery and detailed info.',
    technologies: ['Vite','React', 'Tailwind CSS', 'Travel Advisor API', 'Open Weather API']
  },

  {
    image: portfolio,
    title: 'Portfolio Website',
    description: 'Modern, responsive Portfolio Website for a Business Analytics Student at Deakin University.',
    technologies: ['Vite','React', 'Tailwind CSS', 'Framer Motion', 'EmailJS' ]

  },
];

const ProjectCard = ({ project, index }) => {
  return(
    <ScrollReveal delay={index * 0.2}> {/* Add staggered delay based on index */}
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img src={project.image} alt={project.title} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[250px]'/>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>

          <div className='flex flex-wrap gap-5'>
            {
              project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-purple-600/30 p-3'>{tech}</span>
              ))
            }
          </div>
        </div>
      </div> 
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="mb-32 mt-32 min-h-screen w-full py-20"> {/* Add more vertical margin */}
      <div className="container mx-auto flex flex-col items-center justify-center gap-24 p-4"> {/* Increased gap */}
        <ScrollReveal>
          <h1 className='text-4xl font-light text-white md:text-6xl'>Projects</h1>
        </ScrollReveal>
       
        <div className="flex w-full max-w-[1000px] flex-col gap-32 text-white"> {/* Increased gap */}
          {
            projectData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects