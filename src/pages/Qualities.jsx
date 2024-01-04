import React from 'react'
import OtherNav from '../components/OtherNav'
import Phone from './../assets/hand_phone.png'
import Q1 from './../assets/q1.png'
import Q2 from './../assets/q2.png'
import Q3 from './../assets/q3.png'

function Qualities() {
  return (
    <section className='bg-[#E4E3DB] m-0  p-0 flex flex-col w-full h-screen snap-center'>
      <OtherNav/>
      <div className='mt-5  h-full w-full m-0 flex justify-between '>
        <div className='w-full flex flex-col pt-10 gap-10 px-[8%]'>
            <div className='flex flex-col'>
                <p className='text-5xl text-[#F7073E] mb-2'>CASOS QUE NOS</p>
                <p className='text-5xl text-[#F7073E]'>SIGUEN <b>INSPIRANDO</b> </p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <img src={Q1} className='h-20 w-20' />
                    <div className='flex flex-col gap-3 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-md'>Gestión de marca </p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-6  
                            py-2 text-[#F7073E] text-md'>
                                Verificadora
                            </button>

                            <button 
                            className='bg-white 
                            outline-none rounded-full px-6 
                            py-2 text-[#F7073E] text-md'>
                                Adaptation Cloud
                            </button>
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={Q2} className='h-20 w-20' />
                    <div className='flex flex-col gap-3 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-md'>Comunicación gráfica para POP | OOH</p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-6  
                            py-2 text-[#F7073E] text-md'>
                                Energizer
                            </button>
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={Q3} className='h-20 w-20' />
                    <div className='flex flex-col gap-3 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-md'>Adaptación de empaque</p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-6  
                            py-2 text-[#F7073E] text-md'>
                                Santa Clara
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full h-full relative'>
            <img src={Phone} className='absolute bottom-0 h-full w-auto'/>
        </div>
      </div>
    </section>
  )
}

export default Qualities