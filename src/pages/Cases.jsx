import React from 'react'
import OtherNav from './../components/OtherNav'
import Footer from './../components/Footer'
import VisibilityContext from './../context/menuVisibleContext'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import Menu from '../components/Menu'

function Cases() {
  const [isVisible, setIsVisible] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(false)
  })

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      <div className='relative w-full h-auto flex flex-col p-0 m-0 bg-[#E4E3DB]'>
        <OtherNav/>
        <div className='w-full h-full flex flex-col'>
          <p className='flex justify-end text-[#F7073E] font-normal text-4xl py-10 px-20'>VERIFICADORA | Coca-Cola</p>
          <div className='h-[100vh] w-full'>

          </div>
          <div className='h-[200vh] w-full px-24 flex gap-5'>
              <div className='flex flex-col w-[40%] gap-4'>
                <p className='py-2 text-[#F7073E] font-normal text-4xl'>
                  SOLUCIÓN
                </p>
                <p className='text-[#A49090] font-normal text-justify'>
                  Coca-Cola Export decidió crear un filtro de revisión independiente que fuera responsable de gestionar las 9000 piezas que se liberan anualmente, llamado: Agencia Verificadora de Embotelladores (AVE)
                </p>
                <p className='text-[#A49090] font-normal text-justify'>
                  De esta forma Inspira® toma el rol como Agencia Verificadora de Embotelladores de Coca-Cola, y se convierte en el experto guardián de las marcas en cuanto a sus lineamientos, pero también del meticuloso proceso de revisión y aprobación de materiales para garantizar eficiencia y consistencia de piezas liberadas. 
                </p>
                <p className='text-[#A49090] font-normal text-justify'>
                  Hoy Inspira® como AVE, es el canal de comunicación principal entre Coca-Cola Export y el embotellador, lo que ha sido de gran ayuda para entender las necesidades específicas de cada uno y llegar a acuerdos orientados a lograr eficiencias de negocio.
                </p>
                <p className='text-[#A49090] font-normal text-justify'>
                  Se encarga también capacitar al embotellador y sus agencias, así como de la creación de librerías de campañas, renders y manuales de marca; todo lo anterior representa una forma de trabajo más organizada, que se refleja en la optimización del armado de archivos que generan las agencias. Hoy el tiempo de respuesta se ha reducido a 24 horas.
                </p>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
      <Menu/>
    </VisibilityContext.Provider>
  )
}

export default Cases