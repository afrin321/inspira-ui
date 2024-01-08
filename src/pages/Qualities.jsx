import React from 'react'
import OtherNav from '../components/OtherNav'
import Phone from './../assets/hand_phone.png'
import Q1 from './../assets/q1.png'
import Q2 from './../assets/q2.png'
import Q3 from './../assets/q3.png'

function Qualities() {
  return (
    <section className='bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen'>
      {/* <OtherNav styles='opacity-0' /> */}
      <div className='mt-16 h-full w-full m-0 flex justify-between '>
        <div className='w-full flex flex-col pt-8 px-[8%] gap-10'>
            <div className='flex flex-col text-4xl min-[1920px]:text-[70px] font-medium'>
                <p className='text-[#F7073E] whitespace-nowrap leading-[67px] min-[1920px]:leading-[95px]'>CASOS QUE NOS</p>
                <p className='text-[#F7073E] whitespace-nowrap'>SIGUEN <b>INSPIRANDO</b> </p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <img src={Q1} className='h-16 w-16' />
                    <div className='flex flex-col gap-2 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-[14px]'>Gestión de marca </p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-auto whitespace-nowrap  
                            py-2 text-[#F7073E] text-[14px] w-[180px]'>
                                Verificadora
                            </button>

                            <button 
                            className='bg-white 
                            outline-none rounded-full px-auto whitespace-nowrap  
                            py-2 text-[#F7073E] text-[14px] w-[180px]'>
                                Adaptation Cloud
                            </button>
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={Q2} className='h-16 w-16' />
                    <div className='flex flex-col gap-2 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-[14px]'>Comunicación gráfica para POP | OOH</p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-auto whitespace-nowrap
                            py-2 text-[#F7073E] text-[14px] w-[180px]'>
                                Energizer
                            </button>
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img src={Q3} className='h-16 w-16' />
                    <div className='flex flex-col gap-2 align-middle justify-around'>
                        <p className='pl-1 font-bold text-[#A49090] text-[14px]'>Adaptación de empaque</p>
                        <p className='flex gap-2'>
                            <button 
                            className='bg-white 
                            outline-none rounded-full px-auto whitespace-nowrap  
                            py-2 text-[#F7073E] text-[14px] w-[180px]'>
                                Santa Clara
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-full h-full relative'>
            <img src={Phone} className='absolute bottom-0 h-[105%] w-auto'/>
        </div>
      </div>
    </section>
  )
}

export default Qualities