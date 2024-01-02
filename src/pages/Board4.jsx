import React from 'react'
import OtherNav from '../components/OtherNav'
import Img1 from './../assets/services_1.png'
import Img2 from './../assets/services_3.png'

import Text1 from './../assets/text_1.png'
import Text2 from './../assets/text_2.png'
import Text3 from './../assets/text_3.png'
import Text4 from './../assets/text_4.png'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Board4() {
    const targetRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start start', 'end start']
    })

    const rotate = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['rotate(0deg)', 'rotate(-45deg)', 'rotate(-90deg)', 'rotate(-135deg)'])
    
    const firstIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['100%', '40%', '0%', '0%'])
    const firstIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '-20vh', '-30vh', '-40vh'])
    const firstIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['block', 'block', 'none', 'none'])

    const secondIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['40%', '100%', '40%', '0%'])
    const secondIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '-30vh', '-55vh', '-70vh'])
    const secondIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['block', 'block', 'block', 'none'])

    const thirdIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '40%', '100%', '40%'])
    const thirdIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '-10vh', '0%', '0%'])
    const thirdIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['none', 'block', 'block', 'block'])
    
    

  return (
    <div className='h-[400vh] bg-[#E4E3DB] m-0 p-0 flex flex-col relative' ref={targetRef}>
        <div className='sticky top-0 h-screen overflow-hidden bg-transparent'>
            <OtherNav/>
            <div className='h-full flex justify-between'>
                <img src={Img1} className='h-full z-[5] object-scale-down' />
                <motion.img style={{ transform: rotate }} src={Img2} className='h-[80%] z-[4] absolute bottom-0 left-[23%] mb-1' />
                <div className='bg-transparent w-[35%] border-2 border-red-700 flex flex-col justify-start relative gap-10'>
                    <div className='sticky r-0 w-auto flex flex-col items-end px-20 pt-10 gap-2'>
                        <p className='z-50 text-[#F7073E] font-normal text-4xl'>¿LO QUE</p>
                        <p className='z-50 text-[#F7073E] font-bold text-4xl'>HACEMOS? </p>
                    </div>
                    <div className='overflow-hidden h-[55vh] w-full border-2 border-blue-500 relative'>
                        <motion.div 
                        style={{
                            opacity: firstIconOpacity, 
                            translateY: firstIconTranslateY,
                            display: firstIconDisplay
                        }} 
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute top-[25%]`}>
                            <p className='font-bold text-[#FF6F1F] text-md'>COORDINACIÓN FOTOGRÁFICA</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal'>
                            Maximizamos el potencial de un master graphic a través del photo shooting. 
                            </p>
                        </motion.div>

                        <motion.div 
                        style={{ 
                            opacity: secondIconOpacity,
                            translateY: secondIconTranslateY,
                            display: secondIconDisplay
                         }}
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute bottom-[-20%] opacity-40`}>
                            <p className='font-bold text-[#FF6F1F] text-md'>GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal'>
                                Lideramos el proceso desde diseño hasta producción, asegurándonos de cumplir con los candados de calidad en los mejores tiempos.
                            </p>
                        </motion.div>

                        <motion.div 
                        style={{ 
                            opacity: thirdIconOpacity,
                            display: thirdIconDisplay,
                            translateY: thirdIconTranslateY
                         }}
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute top-[75vh]`}>
                            <p className='font-bold text-[#FF6F1F] text-md'>ADAPTACIÓN DE EMPAQUE</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal'>
                                Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Board4