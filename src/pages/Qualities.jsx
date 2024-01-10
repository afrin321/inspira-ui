import React, { useEffect, useState } from 'react'
import OtherNav from '../components/OtherNav'
import Phone from './../assets/hand_phone.png'
import Q1 from './../assets/q1.png'
import Q2 from './../assets/q2.png'
import Q3 from './../assets/q3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function Qualities() {

  const divA = useRef(null)
  const divB = useRef(null)
  const divC = useRef(null)
  const divD = useRef(null)

  const [hoverElement, setHoverElement] = useState(divA)
   
  return (
    <section id='quality' className='qualities m-0 p-0 flex flex-col w-full h-screen'>
      {/* <OtherNav styles='opacity-0' /> */}
      <div className='py-1 h-full w-full m-0 flex flex-col pt-24 px-[8%]'>
        <div className='py-1'><span className='text-white whitespace-nowrap text-4xl'>CASOS QUE NOS SIGUEN <b>INSPIRANDO</b> </span></div>
        <div className='flex justify-between gap-2 h-full py-2'>
            <motion.div 
            ref={divA}    
            onHoverStart={() => setHoverElement(divA)}                   
            className={`${hoverElement == divA ? 'w-[50%]' : 'w-[16%]'} h-full 
            rounded-xl case1 p-0`}>
              <div className='rounded-xl w-full h-full overlay-full overflow-hidden'>
                <div 
                className={`${hoverElement != divA && 'overlay-pink'}  rounded-xl w-full h-full overflow-hidden`}>
                
                </div>
              </div>

            </motion.div>
            <motion.div
            ref={divB}            
            onHoverStart={() => setHoverElement(divB)}
            className={`${hoverElement == divB ? 'w-[50%]' : 'w-[16%]'} h-full 
            rounded-xl case2 p-0`}>
                <div className='rounded-xl w-full h-full overlay-full overflow-hidden'>
                  <div 
                    className={`${hoverElement != divB && 'overlay-green'}  rounded-xl w-full h-full overflow-hidden`}>
                  
                  </div>
                </div>
            </motion.div>
            <motion.div 
            onHoverStart={() => setHoverElement(divC)}
            className={`${hoverElement == divC ? 'w-[50%]' : 'w-[16%]'} h-full 
            rounded-xl case3 p-0`}>
              <div className='rounded-xl w-full h-full overlay-full overflow-hidden'>
                <div 
                  className={`${hoverElement != divC && 'overlay-gray'}  rounded-xl w-full h-full overflow-hidden`}>
                
                </div>
              </div>
            </motion.div>
            <motion.div 
            onHoverStart={() => setHoverElement(divD)}
            className={`${hoverElement == divD ? 'w-[50%]' : 'w-[16%]'} h-full 
            rounded-xl case5 p-0`}>
              <div className='rounded-xl w-full h-full overlay-full overflow-hidden'>
                <div 
                  className={`${hoverElement != divD && 'overlay-violet'}  rounded-xl w-full h-full overflow-hidden`}>
                
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Qualities