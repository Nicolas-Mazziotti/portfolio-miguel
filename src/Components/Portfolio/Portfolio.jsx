import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'

const Portfolio = () => {
  return (
    <>
      <div className='bg-white p-5 pt-12 '>
        <motion.h2 className='text-start text-4xl sm:text-6xl'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} 
        >PORTFOLIO</motion.h2>
      </div>
      <div className="relative pt-12 h-screen "            >
      <div className="absolute top-0 left-0 w-full h-full p-2 md:p-10 bg-white overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-xl"
            src="./assets/video-portfolio.mp4"
            autoPlay
            loop
            muted
            playsInline           
          ></video>
        </div>
          <div className='relative flex flex-col gap-2 text-start ml-16 md:mt-10'>
            <p className='text-lime-400'>Python</p>
            <h3 className='text-white text-2xl'>Detección de rostros</h3>
            <div className="relative text-start md:text-end">
                        <a href='https://github.com/Miguel-Mazziotti/deteccion-rostros/tree/main' 
                        className="flex items-center rounded-3xl bg-transparent  text-white mt-6 space-x-2 w-[180px]">
                            <span>Ver proyecto</span>
                            <ArrowRightCircleIcon className="h-5 w-5 text-lime-400 hover:text-white" />
                        </a>
                    </div>
          </div>

        
      </div>


    </>


  )
}

export default Portfolio

