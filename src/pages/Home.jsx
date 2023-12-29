import React from 'react'
import Bg from './../assets/bg.png'
import HomeNav from '../components/HomeNav'
import Gp1 from './../assets/graphics_1.png'


function Home() {
  return (
    <div className={`w-full h-screen home px-[8%] flex flex-col gap-20 pt-[2%] pb-0 m-0`}>
        <HomeNav />
        <main className='flex gap-10 justify-between relative h-full'>
            <div className='h-full w-full'>
                <img src={Gp1} className='object-scale-down h-full absolute bottom-0' />
            </div>
            <div className='h-full w-full flex flex-col justify-start items-start'>
                <span className='text-[40px] min-[1920px]:text-[81px] font-bold text-white'>
                    EMBRACING <br/>
                    YOUR <br/>
                    BRAND
                </span>
                <p className='text-white font-medium text-[22px] min-[1920px]:text-[30px] leading-10 mt-5'>
                    Soluciones en comunicación gráfica <br/>
                    y gestión de marca para procesos <br/>
                    de etiquetado.
                </p>
                <button className='bg-white rounded-full px-10 py-2 text-sm text-[#F7063E] my-auto'>Get started</button>
            </div>
        </main>
    </div>
  )
}

export default Home