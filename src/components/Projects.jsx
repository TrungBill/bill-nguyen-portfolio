import React from 'react'
import { motion } from 'framer-motion'
import football from '/public/football.png'
import portfolio from '/public/portfolio.png'
import travel from '/public/travel.png'

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

const ProjectCard = ({ project}) => {
  return(
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[250px]'/>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>{project.title}</div>
          <p className='text-gray-400'>{project.description}</p>
        </div>

        <div className='flex flex-wrap gap-5'>
          {
            project.technologies.map((tech, index) => (
              <span key={index} className='rounded-lg bg-purple p-3'>{tech}</span>
            ))
          }

        </div>
      </div>
    </div> 
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Projects
      </motion.h1>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects