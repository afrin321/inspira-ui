import React from 'react'
import cs1 from './../../assets/lime1.png'
import cs2 from './../../assets/lime2.png'
import cs3 from './../../assets/lime3.png'
import cs4 from './../../assets/lime4.png'
import CaseFooter from '../CaseFooter'


function CaseScreen2() {
    
  return (
    <div className='w-full h-auto relative'>
        <img src={cs1} className='absolute top-[122px]' />
        <div className='case2-gradient h-[1111px] w-full absolute top-[360px] flex flex-col items-center pt-[15%] '>
            <span className='text-white text-[70px] font-medium leading-[95px]'>VERIFICADORA | Coca-Cola</span>
            <div className='w-full px-[7.5%] grid grid-cols-12 gap-1 mt-[7%]'>
                <div className='col-span-6 flex flex-col gap-5'>
                    <span className='text-white text-[70px] font-medium leading-[95px] px-[40px]'>CONTEXTO</span>
                    <p className='text-white text-[28px] font-medium leading-[40px] pr-[100px]'>
                        Los 2 embotelladores más grandes del sistema Coca-Cola 
                        en México, FEMSA y ARCA Continental, son los 
                        responsables de generar el material POP y OOH del 
                        portafolio total de productos que circula a nivel nacional. 
                        Trabajan con agencias de adaptación externas, quienes 
                        producen alrededor de 9,000 piezas de comunicación 
                        anuales, las cuales requieren de un acelerado nivel de 
                        producción y circulación.
                    </p>
                </div>
                <div className='col-span-6 flex flex-col items-center justify-center'>
                    <img src={cs3} className=''/>
                </div>
            </div>
            <div className='mt-[200px] mb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3'>
                <div className='col-span-6 flex align-middle items-center justify-center'>
                    <img src={cs2} />
                </div>
                <div className='col-span-6 flex flex-col gap-3 pl-[50px]'>
                    <span className='text-[70px] leading-[95px] font-medium pl-[10%] text-[#F7073E] '>PROBLEMA</span>
                    <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>Ante el demandante ritmo del negocio, no existía un proceso de revisión y aprobación de materiales dentro de las compañías embotelladoras, pero tampoco un estándar de revisión que involucrara al dueño de las marcas a nivel branding: Coca-Cola Export.</p>
                    <br/>
                    <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>Lo anterior se traducía en retrasos, retrabajo y, en muchas ocasiones, en piezas inconsistentes, con poca coherencia visual y que ponían en riesgo la iconicidad de las marcas que manejan.</p>
                </div>
            </div>
            <div className='my-[50px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-5'>
                <div className='col-span-12 text-center flex flex-col items-center gap-3 pr-[50px]'>
                    <span className='text-[70px] leading-[95px] font-medium pl-[5%] text-[#F7073E] '>SOLUCIÓN</span>
                    <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>Coca-Cola Company faculto a Inspira para crear un equipo exclusivo responsable de la administración y capacitación de las agencias en LATAM. De esta forma, nace una nueva entidad llamada <b>Adaptation Cloud</b> que hoy, a casi dos años de su creación, centraliza la operación de 4 regiones (México, Brasil, Centro y Sudamérica), 82 Frontlines, 71 marcas, 4 agencias y un solo equipo de Diseño de Coca-Cola, across LATAM con una red de aproximadamente 250 personas.</p>
                    <br/>
                    <p className='text-[#A49090] font-normal text-[28px] leading-[40px]'>El <b><i>Adaptation Cloud</i></b> ha gestionado 3,620 proyectos traducidos en 18,531 SKUs, lo que representa un incremento del 30% en el volumen de operación respecto a 2021.</p>
                </div> 
                
            </div>
            <img src={cs4} className='h-auto w-full' />
            <CaseFooter/>
        </div>
        
        
    </div>
  )
}

export default CaseScreen2