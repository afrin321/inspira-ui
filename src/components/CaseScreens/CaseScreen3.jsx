import React from 'react'
import cs1 from './../../assets/energizer1.png'
import cs2 from './../../assets/energizer2.png'
import cs3 from './../../assets/lime3.png'
import cs4 from './../../assets/lime4.png'
import CaseFooter from '../CaseFooter'


function CaseScreen2() {
    
  return (
    <div className='w-full h-auto relative'>
        <img src={cs1} className='absolute top-[110px]' />
        <div className='case3-gradient h-[1740px] w-full absolute top-[360px] flex flex-col items-center pt-[15%] border-none'>
            <span className='mb-10 text-white text-[70px] font-medium leading-[95px]'>ENERGIZER</span>
            
            <img src={cs2}  className='absolute top-[391px] w-full '/>
            <div className='px-[5%] flex flex-col text-center items-center absolute top-[991px] gap-10'>
                
                <span className='text-white text-[70px] font-medium leading-[95px]'>CONTEXTO</span>
                <p className='text-[#DBDBDB] text-[28px] leading-[40px]'>Energizer Holdings, Inc. con sede en St. Louis Missouri USA, es uno de los mayores fabricantes de baterías primarias y productos de iluminación portátiles, reconocido mundialmente por marcas como Energizer, Eveready, Rayovac y Varta.</p>
                <p className='text-[#DBDBDB] text-[28px] leading-[40px]'>La estrategia de innovación y desarrollo de campañas se genera en su sede global, mientras que Europa y Estados Unidos son los dos principales bastiones para el despliegue de mercado en LATAM.</p>
                <p className='text-[#DBDBDB] text-[28px] leading-[40px]'>Lo anterior tiene dos matices de negocio: Por un lado, persigue la eficiencia y la certeza de tener una sola estrategia de comunicación para la región; por el otro, hay un área de oportunidad en la consistencia y la homologación de las diferentes marcas a lo largo de LATAM, lo que repercute directamente en la iconocidad del portafolio.</p>
            </div>
            <div className='absolute top-[2000px]'>123</div>
            {/* <CaseFooter/> */}
        </div>
        
        
    </div>
  )
}

export default CaseScreen2