import React from 'react'
import OtherNav from '../components/OtherNav'
import Footer from '../components/Footer'
import Graphics from './../assets/graphics_3.png'

function Contact() {
  return (
    <section className='relative bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen'>
      <OtherNav/>
      <div className='w-full clear-start overflow-hidden relative flex gap-5 '>
        <div className='w-auto relative'>
          <img src={Graphics} className='w-auto h-full relative top-[-50px] ' />
        </div>        
        <div className='w-full flex flex-col items-end gap-2 p-8 px-12'>
          <p className='text-4xl leading-[67px] font-medium text-[#F7073E] flex justify-end '>PLATIQUEMOS</p>
          <div className='flex flex-col justify-end items-end w-full gap-4'>
            <input 
            className=' w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px]
            font-medium px-3 py-1 text-[#A49090]'
            placeholder='¿Cómo te llamas?' />
            <input 
            className='w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]'
            placeholder='¿Cuál es tu mail?' />
            <input 
            className='w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]'
            placeholder='¿Y tu celular?' />
            <input 
            className='w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]'
            placeholder='Dinos ¿Cómo podemos ayudarte?' />
          </div>
          <p className='flex w-full justify-center'>
            <button className='my-5 bg-[#ff4b72] px-10 py-2 text-white rounded-full text-18  min-[1920px]:text-[30px]'>ENVIAR</button>
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact