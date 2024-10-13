import React from 'react'
import { ThreeDCardDemo } from './uiDemo/ThreeDCardDemo'

const Projects = () => {
  return (
    <div id='projects' className='h-auto w-full text-black dark:text-white flex flex-col justify-center items-center p-[5%]'>
        <div className='text-4xl font-semibold tracking-wider text-glow mb-12 text-black dark:text-white'>Projects</div>
        <ThreeDCardDemo />
    </div>
  )
}

export default Projects