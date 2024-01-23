import React from 'react'
import Bg from './../assets/bg.png'
import HomeNav from '../components/HomeNav'
import Gp1 from './../assets/new_logo.png'
import { motion } from "framer-motion"


function Home(props) {
  return (
    <section id='home' className={`w-full h-screen home px-[7.5%] flex flex-col gap-20 pt-[10%] pb-0 m-0`}>
        {/* <HomeNav /> */}
        <div className='flex gap-10 justify-between relative h-full'>
            <motion.div className='h-full w-[55%] relative p-0 m-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration:2 }} >
                <img src={Gp1} className='h-full absolute bottom-0' />
            </motion.div>
            <div className='h-full w-[45%] flex flex-col justify-start items-start'>
                <p className='flex flex-col justify-start p-0 m-0 text-[40px] leading-[51px] min-[1920px]:leading-[91px] min-[1920px]:text-[81px] font-extrabold text-white'>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration:1 }}>EMBRACING</motion.span> <br/>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ delay: 3.5, duration:1 }}>YOUR</motion.span> <br/>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ delay: 5, duration:1 }}>BRAND</motion.span>
                </p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5, duration: 1 }} className='text-white font-medium text-[22px] min-[1920px]:text-[30px] leading-[40px] min-[1920px]:leading-[50px] mt-5'>
                    Soluciones en comunicación gráfica <br/>
                    y gestión de marca para procesos <br/>
                    de etiquetado.
                </motion.p>
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration:0.5 }}  className='min-[1920px]:h-[72px] min-[1920px]:w-[260px] font-medium leading-[40px] min-[1920px]:leading-[50px] text-[20px] min-[1920px]:text-[30px] bg-white rounded-full px-10 py-2  text-[#F7063E] my-auto'>Get started</motion.button>
            </div>
        </div>
    </section>
  )
}

export default Home