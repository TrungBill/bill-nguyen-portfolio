import React from 'react'
import { motion } from 'framer-motion'
import football from '/public/football.png'
import portfolio from '/public/portfolio.png'
import travel from '/public/travel.png'
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

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
    technologies: ['Vite','React', 'Tailwind CSS', 'Football.org API', 'Chrome Storage API', 'NodeJS'],
    github: 'https://github.com/TrungBill/Football-team-result-tracker-chrome-extension',
    website: 'https://github.com/TrungBill/Football-team-result-tracker-chrome-extension'
  },
  {
    image: travel,
    title: 'Travel Mate',
    description: 'A travel companion web application that displays local points of interest with real-time weather data and a location-based search to provide quick discovery and detailed info.',
    technologies: ['Vite','React', 'Tailwind CSS', 'Travel Advisor API', 'Open Weather API'],
    github: 'https://github.com/username/travel-mate',
    website: 'https://yourtravelmate.netlify.app/'
  },
  {
    image: portfolio,
    title: 'Portfolio Website',
    description: 'Modern, responsive Portfolio Website for a Business Analytics Student at Deakin University.',
    technologies: ['Vite','React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    github: 'https://github.com/TrungBill/claire-portfolio',
    website: 'https://byclairenguyen.netlify.app/'
  },
];

const ProjectCard = ({ project, index }) => {
  return(
    <ScrollReveal delay={index * 0.2}>
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
          
          <div className="flex gap-4 mt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <BsGithub className="text-xl" /> GitHub
              </a>
            )}
            
            {/* First project shows Coming Soon, others show Live Demo with links */}
            {index === 0 ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 cursor-not-allowed opacity-70">
                <CgWebsite className="text-xl" /> Coming Soon
              </div>
            ) : project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300">
                <CgWebsite className="text-xl" /> Live Demo
              </a>
            )}
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