import React from 'react'
import OtherNav from '../components/OtherNav'
import Gp2 from './../assets/graphics_2.png'

function AboutUs() {
  return (
    <section className='m-0 p-0 flex flex-col w-full h-screen'>
      <OtherNav/>
      <div className='bg-[#E4E3DB] h-full w-full m-0 flex justify-between px-[8%] gap-20'>
        <div className='flex flex-col justify-center gap-10 py-[5%] w-full'>
          <span className='text-[#F7073E] text-5xl min-[1920px]:text-[70px] leading-[57px] min-[1920px]:leading-[95px] font-normal'>¿QUE NOS <b className='font-bold'>INSPIRA</b>? </span>
          <p className='text-[#A49090] min-[1920px]:text-[28px] text-[14px] font-normal w-[460px] leading-5'>
            Llegamos en el 2007 con el propósito de <b>cuidar</b> la consistencia e iconicidad de las marcas con las que colaboramos contribuyendo a su <b>memorabilidad</b>.
            Lo que más nos inspira, <b>es ser el guardián de tu marca.</b> <br/>
            <br/>
            Damos soluciones en comunicación gráfica para los diferentes puntos de contacto entre una marca y su consumidor.<br/>
            <br/>
            Somos <b>expertos</b> en la gestión de marca en <b>procesos y soluciones de etiquetado</b>, desde la fase de diseño hasta la producción de empaque. Trabajamos en equipo con nuestros socios comerciales para determinar la eficiencia del proceso e implementar mejoras que resulten en ahorro en costos y mejores resultados de negocio.
          </p>
        </div>
        <div className='w-full relative p-0 m-0 pt-10 flex justify-end'>
          <img  src={Gp2} className='absolute bottom-0 h-[99%]' />
        </div>
      </div>
    </section>
  )
}

export default AboutUs