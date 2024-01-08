import React from 'react'
import OtherNav from '../components/OtherNav'
import Person1 from './../assets/person_1.png'
import Person2 from './../assets/person_2.png'

function Team() {
  return (
    <section className='bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen'>
      {/* <OtherNav /> */}
      <div className='flex flex-col w-full gap-1 px-[8%]'>
        <div className='flex justify-end'>
            <span className='text-4xl min-[1920px]:text-[70px] text-[#F7073E] leading-[67px] min-[1920px]:leading-[95px] mt-10 mb-4 font-medium'>¿QUIÉN NOS <span className='font-bold'>INSPIRA</span>? </span>
        </div>
        <div className='h-52 flex gap-2 justify-start w-full pl-10'>
            <div className='flex justify-center gap-3 w-[48%] align-middle items-center'>
                <img src={Person1} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto text-[14px] min-[1920px]:text-[28px] leading-[24px] min-[1920px]:leading-[40px]'>
                    <p className='text-[#FF6F1F]'><b>LUCÍA PÉREZ</b> <br/> GENERAL MANAGER</p>
                    <p className='text-[#A49090]'>Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.</p>
                </div>
            </div>
        </div>
        <div className='h-52 flex gap-2 justify-end w-[90%]'>
            <div className='flex justify-end align-middle items-center w-[52%] gap-3'>
                <img src={Person2} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto text-[14px] min-[1920px]:text-[28px] leading-[24px] min-[1920px]:leading-[40px]'>
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