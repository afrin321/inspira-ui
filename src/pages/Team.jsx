import React from 'react'
import OtherNav from '../components/OtherNav'
import Person1 from './../assets/person_1.png'
import Person2 from './../assets/person_2.png'

function Team() {
  return (
    <section id='team' className='bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen'>
      {/* <OtherNav /> */}
      <div className='flex flex-col h-full justify-around w-full gap-1 px-[8%] pt-16'>
        <div className='flex justify-end'>
            <span className='text-[45px] min-[1920px]:text-[70px] leading-[75px] min-[1920px]:leading-[95px] whitespace-nowrap text-[#F7073E] mt-10 mb-4 font-medium'>¿QUIÉN NOS <span className='font-bold'>INSPIRA</span>? </span>
        </div>
        <div className='h-52 flex gap-2 justify-start w-full pl-10'>
            <div className='flex justify-center gap-3 w-[48%] align-middle items-center'>
                <img src={Person1} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto text-[14px] min-[1920px]:text-[28px] leading-[24px] min-[1920px]:leading-[40px]'>
                    <p className='text-[#FF6F1F] font-medium'><b>LUCÍA PÉREZ</b> <br/> GENERAL MANAGER</p>
                    <p className='text-[#A49090] font-medium'>Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.</p>
                </div>
            </div>
        </div>
        <div className='h-52 flex gap-2 justify-end w-[90%]'>
            <div className='flex justify-end align-middle items-center w-[52%] gap-3'>
                <img src={Person2} className='h-52 w-auto'/>
                <div className='flex flex-col gap-2 py-auto text-[14px] min-[1920px]:text-[28px] leading-[24px] min-[1920px]:leading-[40px]'>
                    <p className='text-[#FF6F1F] font-medium'><b>IVONNE FLORES</b> <br/> GENERAL MANAGER</p>
                    <p className='text-[#A49090] font-medium'>Traducimos la viabilidad de una idea creativa impactante, del diseño al anaquel.</p>
                </div>
            </div>            
        </div>
        
      </div>
    </section>
  )
}

export default Team