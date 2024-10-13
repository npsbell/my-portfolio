import React from 'react'
import { CanvasRevealEffectDemoSkills } from './uiDemo/CanvasRevealEffectDemoSkills'
import { CanvasRevealEffectDemoCertificate } from './uiDemo/CanvasRevealEffectDemoCertificate'

const Skills = () => {
  return (
    <div id='skills' className='h-auto w-full text-white flex flex-col justify-center items-center p-[5%]'>
        <div className='text-4xl font-semibold tracking-wider text-glow mb-12 text-black dark:text-white'>Skills</div>
        <CanvasRevealEffectDemoSkills />
        <div className='text-4xl font-semibold tracking-wider text-glow mt-40 mb-12 text-black dark:text-white'>Certificate</div>
        <CanvasRevealEffectDemoCertificate />
    </div>
  )
}

export default Skills