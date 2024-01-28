import React, {useContext} from 'react'
import cs1 from './../../assets/lime1.png'
import cs2 from './../../assets/lime2.png'
import cs3 from './../../assets/lime3.png'
import cs4 from './../../assets/lime4.png'
import CaseFooter from '../CaseFooter'
import VisibilityContext from './../../context/menuVisibleContext'

function CaseScreen2() {
  const { setPopupVisible } = useContext(VisibilityContext)
  return (
    <div className="w-full h-auto relative">
      <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
      <img src={cs1} className="absolute top-0" />
      <div className="case2-gradient h-[1311px] w-full absolute top-[360px] flex flex-col items-center pt-[15%] ">
        <span className="text-white text-[70px] font-medium leading-[95px]">
          <em>ADAPTATION CLOUD</em> <br /> LATAM Coca-Cola Brands
        </span>
        <div className="w-full px-[7.5%] grid grid-cols-12 gap-1 mt-[7%]">
          <div className="col-span-6 flex flex-col gap-5 pr-5">
            <span className="text-white text-[70px] font-medium leading-[95px] px-[40px]">
              CONTEXTO
            </span>
            <p className="text-white text-[28px] font-medium leading-[40px] pr-[100px]">
              Ante el gran reto que ha representado la economía global post
              pandemia, Coca-Cola Company hizo una reestructura global en
              septiembre de 2021 con el objetivo de buscar economías de escala
              que resultaran en una mayor <b>productividad y eficiencia</b>.
            </p>
            <p className="text-white">
              Lo anterior tuvo dos grandes implicaciones: La simplificación de{' '}
              <b>3 a 1 sola área</b> involucrada en la gestión de proyectos de
              etiquetado del total del portafolios, llamada <b>“Frontline”</b> y
              la unificación de{' '}
              <b>
                4 unidades de negocio en una sola, llamada{' '}
                <em> “Business Unit LATAM”</em>.
              </b>{' '}
              Las responsabilidades y alcance de la nueva área quedaron
              rebasadas, de modo que era necesario construir un proveedor
              externo que se hiciera cargo de la gestión de las diferentes
              agencias de adaptación de empaque en Latinoamérica.
            </p>
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center">
            <img src={cs3} className="" />
          </div>
        </div>
        <div className="mt-[200px] mb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3">
          <div className="col-span-6 flex align-middle items-center justify-center">
            <img src={cs2} />
          </div>
          <div className="col-span-6 flex flex-col gap-3 pl-[50px]">
            <span className="text-[70px] leading-[95px] font-medium pl-[10%] text-[#F7073E] ">
              PROBLEMA
            </span>
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Al tener 4 regiones con necesidades de mercado y dinámicas de
              adaptación de etiquetas tan diferentes, migrar a una sola gran
              región requería también la homologación del proceso. Por otro
              lado, cada agencia tenía el monopolio de las bases de datos y
              archivos de sus marcas, formas de trabajo diferente por cada país
              y poca o nula depuración de <em>SKUs</em> lo que se tradujo en
              mayores costos de producción.
            </p>
            <br />
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              El gran reto era implementar con éxito esta nueva forma de
              trabajo, al resolver la resistencia natural de las agencias y
              asegurar la consistencia a nivel regional, así como la relevancia
              a nivel local.
            </p>
          </div>
        </div>
        <div className="my-[50px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-5">
          <div className="col-span-12 text-center flex flex-col items-center gap-3 pr-[50px]">
            <span className="text-[70px] leading-[95px] font-medium pl-[5%] text-[#F7073E] ">
              SOLUCIÓN
            </span>
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              Coca-Cola Company faculto a Inspira para crear un equipo exclusivo
              responsable de la administración y capacitación de las agencias en
              LATAM. De esta forma, nace una nueva entidad llamada{' '}
              <b>
                <em>Adaptation Cloud</em>
              </b>{' '}
              que hoy, a dos años y medio de su creación, centraliza la
              operación de 4 regiones (México, Brasil, Centro y Sudamérica), 82
              <em>Frontlines</em>, 71 marcas, 4 agencias y un solo equipo de
              Diseño de Coca-Cola, <em>across</em> LATAM con una red de
              aproximadamente 250 personas.
            </p>
            <br />
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
              El{' '}
              <b>
                <i>Adaptation Cloud</i>
              </b>{' '}
              ha gestionado 3,620 proyectos traducidos en 18,531 SKUs, lo que
              representa un incremento del 30% en el volumen de operación
              respecto a 2021.
            </p>
          </div>
        </div>
        <img src={cs4} className="h-auto w-full" />
        {/* <CaseFooter /> */}
      </div>
    </div>
  )
}

export default CaseScreen2
