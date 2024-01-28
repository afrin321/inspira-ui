import React, {useContext} from 'react'
import cs1 from './../../assets/santaclara1.png'
import cs2 from './../../assets/santaclara2.png'
import cs3 from './../../assets/santaclara3.png'
import cs4 from './../../assets/santaclara4.png'
import cs5 from './../../assets/cs1.png'
import cs6 from './../../assets/cs2.png'
import cs7 from './../../assets/cs3.png'
import cs8 from './../../assets/cs4.png'
import CaseFooter from '../CaseFooter'
import VisibilityContext from './../../context/menuVisibleContext'

function CaseScreen4() {
  const { setPopupVisible } = useContext(VisibilityContext)
  return (
    <div className="w-full h-auto relative">
      <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
      <img src={cs1} className="absolute top-0" />
      <div className="case4-gradient h-[1111px] w-full absolute top-[360px] flex flex-col items-center pt-[15%] ">
        <span className="text-white text-[70px] font-medium leading-[95px]">
            SANTA CLARA
        </span>
        <div className="w-full px-[7.5%] grid grid-cols-12 gap-1 mt-[7%]">
          <div className="col-span-6 flex flex-col gap-5 pr-5">
            <span className="text-white text-[70px] font-medium leading-[95px] ml-[40px]">
              CONTEXTO
            </span>
            <p className="text-[#DBDBDB] text-[28px] font-medium leading-[40px] pr-[100px]">
                La incorporación de Santa Clara al portafolios de bebidas de The Coca-Cola 
                Company, representaba una gran oportunidad para entrar en una
                de las categorías de mayor valor y crecimiento en la industria de bebidas 
                no alcohólicas.
            </p>
            <p className="text-[#DBDBDB]">
                Fue así como en 2012 Coca-Cola adquirió Santa Clara, una marca de productos 
                lácteos de gran calidad hechos artesanalmente. En ese momento, su estrategia de 
                venta era únicamente a través de las tiendas Santa Clara, con un brand portfolio 
                de 45 productos que comprendían leche y productos lácteos: leche UHT, leche fresca, 
                yogurt, crema, queso cottage, paletas heladas y nata.
            </p>
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center">
            <img src={cs2} className="" />
          </div>
        </div>
        <div className="mt-[150px] mb-[100px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-3">
            <div className="col-span-6 flex flex-col justify-center">
                <img src={cs3} />
            </div>
            <div className="col-span-6 flex flex-col gap-3 pl-[50px]">
                <span className="text-[70px] leading-[95px] font-medium pl-[10%] text-[#F7073E] ">
                PROBLEMA
                </span>
                <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
                    El plan de expansión de la marca implicaba ampliar el brand stretch del portafolio 
                    y entrar con fuerza al sistema de distribución y venta de la compañía en los canales 
                    moderno, tradicional y de conveniencia, cumplir con las regulaciones necesarias <br/>
                    para dicho efecto y con un agresivo plan de crecimiento en tiendas propias.
                </p>
                <br />
                <p className="text-[#A49090] font-normal text-[28px] leading-[40px]">
                    Para lograr lo anterior, el gran reto era conservar la herencia 
                    artesanal de la marca y, en paralelo, elevar el discurso gráfico 
                    a un territorio más premium que pudiera establecer las bases 
                    para crear una marca memorable y consistente en todas sus 
                    extensiones de línea y puntos de contacto.
                </p>
            </div>
        </div>
        <div className='w-full h-fit'>
            <img src={cs4} className='w-full h-auto object-cover'/>
        </div>
        <div className="my-[50px] w-full h-auto px-[7.5%] grid grid-cols-12 gap-5">
          <div className="mb-[150px] text-center col-span-12 flex flex-col items-center gap-3 pr-[50px]">
            <span className="text-[70px] leading-[95px] font-medium pl-[5%] text-[#F7073E] ">
              SOLUCIÓN
            </span>
            <p className="text-[#A49090] font-normal text-[28px] leading-[40px] !text-center">
                En 2013 Inspira ganó la cuenta de Santa Clara y, desde entonces, 
                ha sido la agencia que la ha acompañado en su evolución, expansión 
                y crecimiento.
            </p>
            <br />
            <p className="!text-center text-[#A49090] font-normal text-[28px] leading-[40px]">
                Inspira ha generado todas las adaptaciones de marca para su correcto 
                desarrollo en el mercado, es decir, es un guardián que ejecuta y 
                cuida la iconicidad y el posicionamiento de Santa Clara en materiales 
                como empaque, punto de venta, materiales colaterales y fotografía, 
                tanto de ingredientes como de producto, lo que representa un factor 
                fundamental para el cuidado de los valores intrínsecos del producto 
                para empaque y tiendas propias.
            </p>
            <div className="my-10 w-full flex gap-1 justify-between">
                <img src={cs5} className='w-80'/>
                <img src={cs6} className='w-80'/>
                <img src={cs7} className='w-80'/>
                <img src={cs8} className='w-80'/>
            </div>
            <p className="!text-center text-[#A49090] font-normal text-[28px] leading-[40px]">
                Adicionalmente, Inspira ha intervenido en la capacitación de la fuerza de 
                ventas mediante la creación de manuales, los cuales incluyen diálogos de valor 
                y recomendaciones de exhibición por tipo de canal, orientados a unificar el 
                discurso visual, el tono y la manera de hablar de la marca.
            </p>
            <br/>
            <p className="!text-center text-[#A49090] font-normal text-[32px] leading-[40px]">
                Hoy el family line de Santa Clara incluye 6 extensiones de línea y 178 productos 
                en diferentes formatos, entre los que se que incluye una variedad en leches UHT, 
                lechitas saborizadas, yogurt batido y bebible, crema, queso cottage, paletas, 
                helados e insumos para tiendas propias.
            </p>
          </div>
        </div>
        
        {/* <CaseFooter /> */}
      </div>
    </div>
  )
}

export default CaseScreen4
