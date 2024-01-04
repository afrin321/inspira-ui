import React from 'react'
import OtherNav from '../components/OtherNav'
import Img1 from './../assets/services_1.png'
import Img2 from './../assets/services_3.png'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Services() {
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
    const secondIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['-5vh', '-35vh', '-60vh', '-70vh'])
    const secondIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['block', 'block', 'block', 'block'])

    const thirdIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '40%', '100%', '40%'])
    const thirdIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '-12vh', '-45vh', '-65vh'])
    const thirdIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['none', 'block', 'block', 'block'])
    
    const fourthIconOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '0%', '40%', '100%'])
    const fourthIconTranslateY = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['0%', '0%', '-20vh', '-50vh'])
    const fourthIconDisplay = useTransform(scrollYProgress, [0.2, 0.3, 0.5, 0.7], ['none', 'none', 'block', 'block'])

  return (
    <div className='h-[400vh] bg-[#E4E3DB] m-0 p-0 flex flex-col relative' ref={targetRef}>
        <div className='sticky top-0 h-screen overflow-hidden bg-transparent'>
            <OtherNav/>
            <div className='h-full flex justify-between'>
                <img src={Img1} className='h-full z-[5] object-scale-down' />
                <motion.img style={{ transform: rotate }} src={Img2} className='h-[80%] z-[4] absolute bottom-0 left-[23%] min-[800px]:max-[1280px]:left-[15%] mb-1' />
                <div 
                className='bg-transparent max-[1390px]:w-[40%] min-[1400px]:max-[1700px]:w-[30%] 2xl:w-[25%]
                flex flex-col justify-start relative gap-12'>
                    <div className='sticky r-0 w-auto flex flex-col items-end px-20 pt-10 gap-2'>
                        <p className='z-50 text-[#F7073E] font-normal max-[1380px]:text-4xl min-[1400px]:text-5xl 2xl:text-6xl'>¿LO QUE</p>
                        <p className='z-50 text-[#F7073E] font-bold max-[1380px]:text-4xl min-[1400px]:text-5xl 2xl:text-6xl'>HACEMOS? </p>
                    </div>
                    <div 
                    className='h-[55vh] w-full 
                    overflow-hidden
                    relative'>
                        <motion.div 
                        style={{
                            opacity: firstIconOpacity, 
                            translateY: firstIconTranslateY,
                            display: firstIconDisplay
                        }} 
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute max-[1390px]:top-[25%] min-[1400px]:top-[40%] 2xl:top-[45%]`}>
                            <p className='font-bold text-[#FF6F1F] text-md 2xl:text-xl'>COORDINACIÓN FOTOGRÁFICA</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal 2xl:text-xl'>
                            Maximizamos el potencial de un master graphic a través del photo shooting. 
                            </p>
                        </motion.div>

                        <motion.div 
                        style={{ 
                            opacity: secondIconOpacity,
                            translateY: secondIconTranslateY,
                            display: secondIconDisplay
                         }}
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute max-[1390px]:bottom-[-20%] min-[1400px]:bottom-[-40%] 2xl:bottom-[-30%] opacity-40 2xl:text-xl`}>
                            <p className='font-bold text-[#FF6F1F] text-md 2xl:text-xl'>GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal 2xl:text-xl'>
                                Lideramos el proceso desde diseño hasta producción, asegurándonos de cumplir con los candados de calidad en los mejores tiempos.
                            </p>
                        </motion.div>

                        <motion.div 
                        style={{ 
                            opacity: thirdIconOpacity,
                            translateY: thirdIconTranslateY,
                            display: thirdIconDisplay                            
                         }}
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute max-[1390px]:bottom-[-30%] min-[1400px]:bottom-[-50%] 2xl:bottom-[-50%] 2xl:text-xl`}>
                            <p className='font-bold text-[#FF6F1F] text-md'>ADAPTACIÓN DE EMPAQUE</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal 2xl:text-xl'>
                                Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.
                            </p>
                        </motion.div>

                        <motion.div 
                        style={{ 
                            opacity: fourthIconOpacity,
                            translateY: fourthIconTranslateY,
                            display: fourthIconDisplay                            
                         }}
                        className={`w-full flex flex-col px-20 gap-2 whitespace-pre-wrap absolute max-[1390px]:bottom-[-40%] min-[1400px]:bottom-[-60%] 2xl:bottom-[-60%] 2xl:text-xl`}>
                            <p className='font-bold text-[#FF6F1F] text-md'>COMUNICACIÓN GRÁFICA. POP Y OOH</p>
                            
                            <p className='text-[#A49090] font-medium text-md whitespace-normal 2xl:text-xl'>
                            Aseguramos la iconicidad de la marca y la claridad del mensaje en todos sus puntos de contacto.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services