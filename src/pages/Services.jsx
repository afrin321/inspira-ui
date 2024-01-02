import React, { useEffect } from 'react'
import { useRef } from 'react'
import OtherNav from '../components/OtherNav'
import Img1 from './../assets/services_1.png'
import Img2 from './../assets/services_2.png'
import { motion, useScroll, useTransform } from 'framer-motion'

function Services() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end end']
    })

    //const r1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    





  return (
    <section ref={ref} className='m-0 p-0 flex flex-col w-full h-screen'>
      <OtherNav/>
      <div className='bg-[#E4E3DB] relative h-full w-full m-0 flex justify-between items-center p-0 overflow-hidden'>
            <div>
                <img src={Img1} className='absolute left-0 bottom-0 h-full w-auto z-10' />
                <motion.img 
                    src={Img2} 
                   
                    className='h-[90%] absolute bottom-0 left-48' 
                />
            </div>
            
            <div > 
                
            </div>
      </div>
    </section>
  )
}

export default Services