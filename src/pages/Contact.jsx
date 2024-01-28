import React from 'react'
import OtherNav from '../components/OtherNav'
import Footer from '../components/Footer'
import Graphics from './../assets/s_cortada_platiquemos.png'

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#E4E3DB] m-0 p-0 flex flex-col w-full h-screen"
    >
      {/* <OtherNav />  */}
      <div className="w-full clear-start overflow-hidden relative flex gap-5 ">
        <div className="w-[50%] relative h-screen">
          <img src={Graphics} className="w-full h-screen relative left-0 top-20" />
        </div>
        <div className="h-fit w-[50%] flex flex-col justify-start items-end gap-1 mt-[5%] min-[1920px]:mt-[12%] mr-[7.5%]">
          <p className="my-5 text-[45px] min-[1920px]:text-[70px] leading-[75px] min-[1920px]:leading-[95px] whitespace-nowrap font-medium text-[#F7073E] flex justify-end ">
            PLATIQUEMOS
          </p>
          <div className="flex flex-col justify-end items-end w-full gap-4 min-[1920px]:gap-5">
            <input
              className=" w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px]
            font-medium px-3 py-1 text-[#A49090] min-[1920px]:leading-[40px]"
              placeholder="¿Cómo te llamas?"
            />
            <input
              className="w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="¿Cuál es tu mail?"
            />
            <input
              className="w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="¿Y tu celular?"
            />
            <input
              className="w-80 xl:w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="Dinos ¿Cómo podemos ayudarte?"
            />
          </div>
          <p className="flex w-full justify-center items-center min-[1920px]:items-end align-middle">
            <button className="mt-3 min-[1920px]:mt-8 bg-[#ff4b72] px-10 py-2 text-white rounded-full text-18  min-[1920px]:text-[30px] min-[1920px]:leading-[50px] min-[1920px]:w-[260px]">
              ENVIAR
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
