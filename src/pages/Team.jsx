import React from 'react'
import OtherNav from '../components/OtherNav'
import Person1 from './../assets/person_1.png'
import Person2 from './../assets/person_2.png'

function Team() {
  return (
    <section className='bg-[#E4E3DB] m-0  p-0 flex flex-col w-full h-screen snap-center'>
      <OtherNav/>
      <div className='flex flex-col w-full gap-1 px-[8%]'>
        <div className='flex justify-end my-3'>
            <span className='text-5xl text-[#F7073E] mt-10 mb-4'>¿QUIÉN NOS INSPIRA? </span>
        </div>
        <div className='h-52 flex gap-2 justify-start w-full pl-20'>
            <div className='flex justify-center gap-3 w-[50%] align-middle items-center'>
                <img src={Person1} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto'>
                    <p className='text-[#FF6F1F]'><b>LUCÍA PÉREZ</b> <br/> GENERAL MANAGER</p>
                    <p className='text-[#A49090]'>Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.</p>
                </div>
            </div>
        </div>
        <div className='h-52 flex gap-2 justify-end pl-30 w-full'>
            <div className='flex align-middle items-center w-[50%] gap-3'>
                <img src={Person2} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto'>
                    <p className='text-[#FF6F1F]'><b>IVONNE FLORES</b> <br/> GENERAL MANAGER</p>
                    <p className='text-[#A49090]'>Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.</p>
                </div>
            </div>            
        </div>
        
      </div>
    </section>
  )
}

export default Team