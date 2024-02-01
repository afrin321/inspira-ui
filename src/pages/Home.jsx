import React from "react";
import Bg from "./../assets/bg.png";
import HomeNav from "../components/HomeNav";
import Gp1 from "./../assets/new_logo.png";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <div id="home" className="relative w-full h-fit -bottom-16 md:-bottom-20 ">
      <img src={Bg} className="w-full h-full " />
      <section className="absolute top-0 left-0 flex items-end h-full w-full px-20 gap-10">
        <div className="w-1/2 h-4/5  pb-20">
          <motion.div
            className="h-full col-span-5 p-0 m-0 ease-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: "auto" }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <img src={Gp1} className="h-full w-auto object-contain " />
          </motion.div>
        </div>
        <div className="w-1/2 h-4/5 flex flex-col justify-between items-start pb-20 ">
          <div className="w-1/2  p-0 m-0 flex flex-col md:gap-4 gap-2 sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold  text-white">
            <motion.span
              className="p-0 m-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.75 }}
            >
              EMBRACING
            </motion.span>{" "}
            <motion.span
              className="p-0 m-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ delay: 1.25, duration: 0.75 }}
            >
              YOUR
            </motion.span>{" "}
            <motion.span
              className="p-0 m-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 3 }}
              transition={{ delay: 2, duration: 0.75 }}
            >
              BRAND
            </motion.span>
          </div>
          <div className="w-full ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.75, duration: 0.75 }}
              className="text-white font-medium sm:text-lg  lg:text-2xl 2xl:text-3xl 3xl:text-4xl leading-[50px]"
            >
              Soluciones en comunicación gráfica y gestión de marca para
              procesos de etiquetado.
            </motion.p>
          </div>
          <div className="w-full 1/3  mb-5 xl:mb-20 ">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className=" bg-white font-semibold rounded-full text-[#F7063E] px-10 py-2  2xl:py-6 3xl:py-8 2xl:px-24 3xl:px-32 sm:text-md md:text-xl lg:text-2xl xl:text3xl"
            >
              Get started
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

{
  /* <section
id="home"
className={w-full relative h-screen home px-[7.5%] flex flex-col gap-20 pt-[329px] pb-0 m-0 overflow-hidden}
> 
<divclassName="grid grid-cols-12 gap-1 w-full h-full">
  <motion.div
    className="h-auto col-span-5 p-0 m-0 ease-in"
    initial={{ opacity: 0, top: '100vh' }}
    animate={{ opacity: 1, top: 'auto' }}
    transition={{ delay: 0, duration: 0.5 }}
  >
    <img src={Gp1} className="h-auto w-auto absolute left-[118px]" />
  </motion.div>
  <div className="col-span-4 w-full h-full p-0 m-0 flex flex-col justify-start items-start">
    <div className="w-full h-[242px] p-0 m-0 flex flex-col text-[70px] font-bold leading-[45px] text-white">
      <motion.span
        className="p-0 m-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.75 }}
      >
        EMBRACING
      </motion.span>{' '}
      <br />
      <motion.span
        className="p-0 m-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ delay: 1.25, duration: 0.75 }}
      >
        YOUR
      </motion.span>{' '}
      <br />
      <motion.span
        className="p-0 m-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ delay: 2, duration: 0.75 }}
      >
        BRAND
      </motion.span>
    </div>
    <div className="w-full h-[242px] flex flex-col align-middle justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.75, duration: 0.75 }}
        className="text-white font-medium text-[30px] leading-[50px]"
      >
        Soluciones en comunicación gráfica y gestión de marca para
        procesos de etiquetado.
      </motion.p>
    </div>
    <div className="w-full h-[121px] flex items-end">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className=" bg-white font-semibold rounded-full text-[#F7063E] h-[72px] w-[260px] text-[30px] leading-[50px]"
      >
        Get started
      </motion.button>
    </div>
  </div>
  <div className="col-span-2 w-full h-full"></div>
</div>

{/* <div className='flex gap-10 justify-between relative h-full'>
      <motion.div className='h-full w-[55%] relative p-0 m-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration:2 }} >
          <img src={Gp1} className='h-full absolute bottom-0' />
      </motion.div>
      <div className='p-0 m-0  h-full w-[45%] flex flex-col justify-start items-start min-[1920px]:mt-[-25px]'>
          <p className='p-0 m-0 text-[40px] leading-[55px] min-[1920px]:leading-[110px] min-[1920px]:text-[81px] font-bold text-white'>
              <motion.span className='p-0 m-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration:1 }}>EMBRACING</motion.span> <br/>
              <motion.span className='p-0 m-0' initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ delay: 3.5, duration:1 }}>YOUR</motion.span> <br/>
              <motion.span className='p-0 m-0' initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ delay: 5, duration:1 }}>BRAND</motion.span>
          </p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5, duration: 1 }} className='text-white font-medium text-[22px] min-[1920px]:text-[30px] leading-[40px] min-[1920px]:leading-[50px] mt-10'>
              Soluciones en comunicación gráfica <br/>
              y gestión de marca para procesos <br/>
              de etiquetado.
          </motion.p>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration:0.5 }}  className='min-[1920px]:h-[72px] min-[1920px]:w-[260px] leading-[40px] min-[1920px]:leading-[50px] text-[20px] min-[1920px]:text-[30px] bg-white rounded-full px-10 py-2  text-[#F7063E] my-auto font-semibold'>Get started</motion.button>
      </div>
  </div> */
}
// </section>
