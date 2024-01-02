import React from 'react'
import OtherNav from '../components/OtherNav'
import Img1 from './../assets/services_1.png'
import Img2 from './../assets/services_3.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Board3() {

    const targetRef = useRef(null)

    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: targetRef,
        offset: ['end end', 'start end']
    })

    // const {scrollYProgress: scrollYProgress2} = useScroll({
    //     target: targetRef,
    //     offset: ['end center start', 'end start']
    // })

    // ['rotate(-90deg)', 'rotate(-45deg)', 'rotate(5deg)', 'rotate(57deg)']
    // 'rotate(45deg)', 'rotate(0deg)', 'rotate(-45deg)', 'rotate(-90deg)'

    const e1 = useTransform(scrollYProgress1, [0, 0.4, 0.6, 0.8], ['rotate(0deg)', 'rotate(-45deg)', 'rotate(-90deg)', 'rotate(-135deg)'])
    //const e2 = useTransform(scrollYProgress1, [0.8, 1], ['sticky top-0 w-full z-10', ''])

  return (
    <section ref={targetRef} className='relative h-full w-full p-0 m-0 bg-[#E4E3DB] flex flex-col'>
        <OtherNav styles='sticky top-0 w-full z-10'/>
        {/* <img src={Img1} className='relative top-0 left-0 bottom-0 h-auto z-10' /> */}

        
        <div className='sticky top-0 bottom-0 left-0 h-screen z-10 flex flex-col w-full bg-transparent overflow-hidden p-0 m-0'>
            <OtherNav styles='opacity-0'/>
            <div className='sticky h-full p-0 m-0'>
                <img src={Img1} className='h-full w-auto sticky top-0 bottom-0 left-0 z-30' />
                <motion.img 
                    src={Img2} 
                    className='h-[80%] sticky bottom-0 left-[18%] z-20' 
                    // style={{ transform: e1 }}
                />
            </div>   
        </div>

        <div className='sticky top-0 right-0 bottom-0 flex flex-col z-50 h-screen'>
            <OtherNav styles='opacity-0'/>
            <div className='sticky r-0 w-auto flex flex-col items-end px-20 pt-20 gap-2'>
                <p className='z-50 text-[#F7073E] font-normal text-4xl'>¿LO QUE</p>
                <p className='z-50 text-[#F7073E] font-bold text-4xl'>HACEMOS? </p>
            </div>
        </div>

        {/* <div className='h-screen flex flex-col px-20 gap-2 w-[40%] whitespace-pre-wrap '>
                <p className='font-bold text-[#FF6F1F] text-lg'>GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO</p>
                
                <p className='text-[#A49090] font-medium text-lg whitespace-normal'>
                    Lideramos el proceso desde diseño hasta producción, asegurándonos de cumplir con los candados de calidad en los mejores tiempos.
                </p>
            </div>
            <div className='h-screen flex flex-col px-20 gap-2 w-[40%] whitespace-pre-wrap '>
                <p className='font-bold text-[#FF6F1F] text-lg'>GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO</p>
                
                <p className='text-[#A49090] font-medium text-lg whitespace-normal'>
                    Lideramos el proceso desde diseño hasta producción, asegurándonos de cumplir con los candados de calidad en los mejores tiempos.
                </p>
            </div> */}
        

        
        
    </section>
  )
}

export default Board3