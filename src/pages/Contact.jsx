import React from 'react'
import OtherNav from '../components/OtherNav'
import Footer from '../components/Footer'
import Graphics from './../assets/s_cortada_platiquemos.png'

function Contact() {
  return (
    <section
      id="contact"
      className=" bg-[#E4E3DB] m-0 pr-20 w-full h-full "
    >
      <div className="w-full h-full overflow-hidden flex items-end ">
        <div className="w-1/2 xl:h-[500px] h-[400px] 2xl:h-full">
          <img src={Graphics} className="w-full h-full " />
        </div>
        <div className="w-1/2 h-full xl:h-[500px] 2xl:h-full flex flex-col gap-4 pl-20 py-20 ">
          <p className="my-5 text-2xl xl:text-5xl whitespace-nowrap font-medium text-[#F7073E] flex justify-end ">
            PLATIQUEMOS
          </p>
          <div className="flex flex-col justify-end items-end w-full gap-4 min-[1920px]:gap-5">
            <input
              className=" w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px]
            font-medium px-3 py-1 2xl:py-2 text-[#A49090] min-[1920px]:leading-[40px]"
              placeholder="¿Cómo te llamas?"
            />
            <input
              className="w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 2xl:py-2 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="¿Cuál es tu mail?"
            />
            <input
              className="w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 2xl:py-2 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="¿Y tu celular?"
            />
            <input
              className="w-full border-[#707070] 
            border-[1px] outline-none text-[16px] min-[1920px]:text-[28px] 
            font-medium px-3 py-1 2xl:py-2 text-[#A49090]  min-[1920px]:leading-[40px]"
              placeholder="Dinos ¿Cómo podemos ayudarte?"
            />
          </div>
          <p className="flex w-full justify-center items-center min-[1920px]:items-end align-middle">
            <button className="mt-3  bg-[#ff4b72] px-10 2xl:px-20 py-2 2xl:py-4 text-white rounded-full  text-xl 2xl:text-2xl">
              ENVIAR
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
