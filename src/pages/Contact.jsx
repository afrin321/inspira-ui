import React from 'react'
import OtherNav from '../components/OtherNav'
import Footer from '../components/Footer'
import Graphics from './../assets/graphics_3.png'

function Contact() {
  return (
    <section className='relative bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen'>
      <OtherNav/>
      <div className='w-full clear-start overflow-hidden relative flex gap-5 '>
        <img src={Graphics} className='w-auto h-full' />
        <div className='w-full flex flex-col items-end gap-2 p-8 px-12'>
          <p className='text-5xl text-[#F7073E] flex justify-end'>PLATIQUEMOS</p>
          <div className='flex flex-col justify-end items-end'>
            <input className='w-[80vh] border-[#707070] border-[1px] outline-none' />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact