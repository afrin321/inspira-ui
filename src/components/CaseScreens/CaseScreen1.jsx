import React, {useContext} from 'react'
import cs1 from './../../assets/cola1.png'
import cs2 from './../../assets/cola2.png'
import cs3 from './../../assets/cola3.png'
import cs4 from './../../assets/cola4.png'
import cs5 from './../../assets/cola5.png'
import VisibilityContext from './../../context/menuVisibleContext'

function CaseScreen1() {
  const { setPopupVisible } = useContext(VisibilityContext)
  return (
    <div className="w-full h-auto relative">
      <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
      <img src={cs1} className="absolute top-0" />
      <div className="case1-gradient h-[1111px] w-full absolute top-[360px] flex flex-col items-center pt-[15%] ">
        <span className="text-white text-[70px] font-medium leading-[95px]">
          VERIFICADORA | Coca-Cola
        </span>
        <div className="w-full px-[7.5%] grid grid-cols-12 gap-1 mt-[7%]">
          <div className="col-span-6 flex flex-col gap-5">
            <span className="text-white text-[70px] font-medium leading-[95px] px-[40px]">
              CONTEXTO
            </span>
            <p className="text-white text-[28px] font-medium leading-[40px] pr-[100px]">
              Los 2 embotelladores más grandes del sistema Coca-Cola en México,
              FEMSA y ARCA Continental, son los responsables de generar el
              material POP y OOH del portafolio total de productos que circula a
              nivel nacional. Trabajan con agencias de adaptación externas,
              quienes producen alrededor de 9,000 piezas de comunicación
              anuales, las cuales requieren de un acelerado nivel de producción
              y circulación.
            </p>
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center">
            <img src={cs2} className="" />
          </div>
        </div>
        <div className="mt-[200px] mb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3">
          <div className="col-span-6 flex align-middle items-center justify-center">
            <img src={cs3} />
          </div>
          <div className="col-span-6 flex flex-col gap-3 pl-[50px]">
            <span className="text-[70px] leading-[95px] font-medium pl-[10%] text-[#F7073E] ">
              PROBLEMA
            </span>
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Ante el demandante ritmo del negocio, no existía un{' '}
              <b>proceso de revisión y aprobación</b> de materiales dentro de
              las compañías embotelladoras, pero tampoco un estándar de revisión
              que involucrara al dueño de las marcas a nivel <em>branding</em>:
              Coca-Cola Export.
            </p>
            <br />
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Lo anterior se traducía en retrasos, retrabajo y, en muchas
              ocasiones, en piezas inconsistentes, con poca coherencia visual y
              que ponían en riesgo la iconicidad de las marcas que manejan.
            </p>
          </div>
        </div>
        <div className=" w-full h-auto px-[7.5%] grid grid-cols-12 gap-5">
          <div className="col-span-6 flex flex-col gap-3 pr-[50px]">
            <span className="text-[70px] leading-[95px] font-medium pl-[5%] text-[#F7073E] ">
              SOLUCIÓN
            </span>
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Coca-Cola Export decidió crear un filtro de revisión independiente
              que fuera responsable de gestionar las 9,000 piezas que se liberan
              anualmente, llamado:{' '}
              <b>Agencia Verificadora de Embotelladores (AVE)</b>
            </p>
            <br />
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              De esta forma, Inspira tomó el rol como Agencia Verificadora de
              Embotelladores de Coca-Cola, y se convirtió en el experto guardián
              de las marcas en cuanto a sus lineamientos, pero también del
              meticuloso proceso de revisión y aprobación de materiales para
              garantizar <b>eficiencia y consistencia</b> de piezas liberadas.
            </p>
          </div>
          <div className="col-span-6 flex align-middle items-center justify-center">
            <img src={cs5} />
          </div>
        </div>
        <div className="mt-[100px] pb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3">
          <div className="col-span-6 flex align-middle items-center justify-center">
            <img src={cs4} />
          </div>
          <div className="col-span-6 flex flex-col gap-3 pl-[50px]">
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Hoy, Inspira como AVE, es el canal de comunicación principal entre
              Coca-Cola Export y el embotellador, lo que ha sido de gran ayuda
              para entender las necesidades específicas de cada uno y llegar a
              acuerdos orientados a lograr eficiencias de negocio.
            </p>
            <br />
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Inspira se encarga también de <b>capacitar</b> al embotellador y
              sus agencias, así como de la{' '}
              <b>
                {' '}
                creación de librerías de campañas, <em>renders</em> y manuales
                de marca
              </b>{' '}
              , todo lo anterior representa una forma de trabajo más organizada,
              lo que se refleja en la optimización del armado de archivos que
              generan las agencias.{' '}
              <b>Hoy el tiempo de respuesta se ha reducido a 24 horas.</b>
            </p>
          </div>
        </div>
        {/* <CaseFooter /> */}
      </div>
    </div>
  )
}

export default CaseScreen1
