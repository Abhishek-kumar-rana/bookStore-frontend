import React from 'react'
import Stat from './Stat'

function About() {
  return (
    <>
    <div className=' max-w-full container mx-auto md:px-40 rounded-sm px-4 mb-8 '  >

    <div className='flex justify-center items-center mb-16 mt-16'>
        <Stat/>
    </div>

    <div className='  rounded-lg'>
    <div className="diff aspect-[16/9] sm:aspect-[10/3] rounded-xl">
  <div className="diff-item-1">
    <div className="bg-primary text-primary-content  md:text-9xl dark:text-slate-900 dark:bg-blue-500 text-5xl font-black grid place-content-center">bookStore</div>
  </div>
  <div className="diff-item-2">
    <div className="bg-base-200 md:text-9xl text-5xl dark:text-white dark:bg-slate-700  font-black grid place-content-center">bookStore</div>
  </div>
  <div className="diff-resizer "></div>
</div>
    </div>

   
    </div>
    
    </>
  )
}

export default About