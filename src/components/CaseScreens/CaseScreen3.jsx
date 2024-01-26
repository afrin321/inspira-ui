import React from 'react'
import cs1 from './../../assets/energizer1.png'
import cs2 from './../../assets/energizer2.png'
import cs3 from './../../assets/energizer3.png'
import cs4 from './../../assets/energizer4.png'
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
            <div className='absolute top-[1800px]'>
              <div className='mb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3'>
                  <div className='col-span-6 flex align-middle items-center justify-center'>
                      <img src={cs3} />
                  </div>
                  <div className='col-span-6 flex flex-col gap-3 pl-[50px]'>
                      <span className='text-[70px] leading-[95px] font-medium pl-[10%] text-[#F7073E] '>PROBLEMA</span>
                      <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>La necesidad puntual consistía en tener una agencia que tuviera el know-how de las 11 marcas del portafolios en sus 2 diferentes líneas de negocio —auto-care y power & lights— y que pudiera asegurar la correcta implementación y consistencia de las diferentes iniciativas en los 12 países que comprenden LATAM en sus diferentes puntos de contacto, principalmente In-store, OOH y digital.</p>
                      <br/>
                      <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>El reto consistía en desarrollar un equipo de adaptación de artes, el cual fuera capaz de dar respuesta a las necesidades puntuales de los diferentes mercados y, a su vez, al acelerado nivel de demanda para entregar los artes a proveedores locales. Adicionalmente, se debía optimizar el proceso automatizado de revisión ya existente.</p>
                  </div>
              </div>
              <div className=' w-full h-auto px-[7.5%] grid grid-cols-12 gap-5'>
                <div className='col-span-6 flex flex-col gap-3 pr-[50px]'>
                    <span className='text-[70px] leading-[95px] font-medium pl-[5%] text-[#F7073E] '>SOLUCIÓN</span>
                    <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>En el 2019 Energizer Holdings faculta a Inspira como su agencia de adaptación gráfica para LATAM. Hoy, después de 4 años de relación comercial, Inspira ha fortalecido su posicionamiento con las diferentes regiones de LATAM, se ha convertido en el brazo extendido para la ejecución de artes, validación de lineamientos de marca y manejo de licencias, con un promedio de 5800 piezas de comunicación liberadas anualmente.</p>
                    
                </div>                
                <div className='col-span-6 flex align-middle items-center justify-center'>
                    <img src={cs4} />
                </div>
            </div>
            </div>
            {/* <CaseFooter/> */}
        </div>
        
        
    </div>
  )
}

export default CaseScreen2