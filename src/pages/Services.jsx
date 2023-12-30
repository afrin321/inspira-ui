import React from 'react'
import OtherNav from '../components/OtherNav'
import Img1 from './../assets/services_1.png'
import Img2 from './../assets/services_2.png'

function Services() {
  return (
    <section className='m-0 p-0 flex flex-col w-full h-screen'>
      <OtherNav/>
      <div className='bg-[#E4E3DB] relative h-full w-full m-0 flex justify-between items-center p-0 overflow-hidden'>
            <img src={Img1} className='absolute left-0 bottom-0 h-full w-auto z-10' />
            <img src={Img2} className='z-1 h-[120%] relative left-[7%]' />
      </div>
    </section>
  )
}

export default Services