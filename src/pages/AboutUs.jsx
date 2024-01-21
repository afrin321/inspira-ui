import React from 'react'
import Gp2 from './../assets/graphics_2.png'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    <section id='about' className='bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen pt-[10%]'>
      {/* <OtherNav /> */}
      <div className='h-full w-full m-0 flex justify-between px-[7.5%] gap-10  overflow-hidden'>
        <div className='flex flex-col justify-start gap-0 h-fit w-full'>
          <motion.span initial={{opacity:'0%'}} whileInView={{ opacity: '100%'}} transition={{ delay: 2, duration: 1 }} className='text-[#F7073E] text-[45px] min-[1920px]:text-[70px] leading-[90px] min-[1920px]:leading-[110px] whitespace-nowrap my-5'>¿QUE NOS <b className='font-bold'>INSPIRA</b>? </motion.span>
          <motion.div initial={{opacity:'0%'}} whileInView={{ opacity: '100%'}} transition={{ delay: 3, duration: 1 }}>
            <p className='text-[#A49090] text-[16px] min-[1920px]:text-[28px] leading-[25px] min-[1920px]:leading-[40px]'>
              Llegamos en el 2007 con el propósito de <b>cuidar</b> la consistencia e iconicidad de las marcas con las que colaboramos contribuyendo a su <b>memorabilidad</b>.
              Lo que más nos inspira, <b>es ser el guardián de tu marca.</b><br/><br/>
            </p>
            <p className='text-[#A49090] text-[16px] min-[1920px]:text-[28px] leading-[25px] min-[1920px]:leading-[40px]'>
              Damos soluciones en comunicación gráfica para los diferentes puntos de contacto entre una marca y su consumidor.<br/><br/>
            </p>
            <p className='text-[#A49090] text-[16px] min-[1920px]:text-[28px] leading-[25px] min-[1920px]:leading-[40px]'>
              Somos <b>expertos</b> en la gestión de marca en <b>procesos y soluciones de etiquetado</b>, desde la fase de diseño hasta la producción de empaque. Trabajamos en equipo con nuestros socios comerciales para determinar la eficiencia del proceso e implementar mejoras que resulten en ahorro en costos y mejores resultados de negocio.
            </p>
          </motion.div>
        </div>
        <div className='w-full relative p-0 m-0 pt-10 flex justify-end'>
          <motion.img 
          initial={{
            translateX: '50vh'
          }}
          whileInView={{
            translateX: '0vh',
          }}
          transition={{
            duration: 2,
          }}
          src={Gp2} className='absolute bottom-0 h-[105%]' />
        </div>
      </div>
    </section>
  )
}

export default AboutUs