import React, { useEffect, useState, useContext } from 'react'
import OtherNav from '../components/OtherNav'
import Phone from './../assets/hand_phone.png'
import Q1 from './../assets/q1.png'
import Q2 from './../assets/q2.png'
import Q3 from './../assets/q3.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import CaseCard from '../components/CaseCard'
import VisibilityContext from './../context/menuVisibleContext'

function Qualities() {
  const divA = useRef(null)
  const divB = useRef(null)
  const divC = useRef(null)
  const divD = useRef(null)

  const [hoverElement, setHoverElement] = useState(divA)
  const { popupVisible } = useContext(VisibilityContext)

  const dataMap = new Map()
  dataMap.set(divA, {
    img: '1',
    title: 'GESTIÓN DE MARCA  Verificadora',
    description: 'Los 2 embotelladores más grandes del sistema Coca-Cola …',
    isHover: hoverElement == divA,
  })

  dataMap.set(divB, {
    img: '2',
    title: 'GESTIÓN DE MARCA Adaptation Cloud',
    description:
      'Ante el gran reto que ha representado la economía global post pandemia, Coca-Cola …',
    isHover: hoverElement == divB,
  })

  dataMap.set(divC, {
    img: '3',
    title: 'COMUNICACIÓN GRÁFICA PARA POP | OOH Energizer',
    description:
      'Energizer Holdings, Inc. con sede en St. Louis Missouri USA, es uno de los mayores …',
    isHover: hoverElement == divC,
  })

  dataMap.set(divD, {
    img: '4',
    title: `COORDINACIÓN FOTOGRÁFICA Santa Clara `,
    description: '',
    isHover: hoverElement == divD,
  })

  return (
    <section
      id="quality"
      className={`qualities m-0 px-20 flex flex-col w-full h-full ${popupVisible ? 'fixed top-0 left-0 overflow-hidden' : ''}`}
    >
      {/* <OtherNav styles='opacity-0' /> */}
      <div className="py-1 h-full w-full m-0 flex flex-col ">
        <div className="py-1 ">
          <span className="text-white whitespace-nowrap xl:text-4xl lg:text-3xl text-2xl">
            CASOS QUE NOS SIGUEN <b>INSPIRANDO</b>{' '}
          </span>
        </div>
        <div className="flex justify-between gap-2 h-full py-2 ">
          <motion.div
            ref={divA}
            onHoverStart={() => setHoverElement(divA)}
            className={`${hoverElement == divA ? 'w-[50%]' : 'w-[16%]'} h-full 
              rounded-xl case1 p-0 transition-all `}
          >
            <div
              className={`rounded-xl w-full h-full ${
                hoverElement == divA && 'overlay-full'
              }  overflow-hidden`}
            >
              <div
                className={`${
                  hoverElement != divA && 'overlay-pink'
                } rounded-xl w-full h-full overflow-hidden`}
              >
                <CaseCard data={dataMap.get(divA)} />
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={divB}
            onHoverStart={() => setHoverElement(divB)}
            className={`${hoverElement == divB ? 'w-[50%]' : 'w-[16%]'} h-full 
              rounded-xl case2 p-0 transition-all`}
          >
            <div
              className={`rounded-xl w-full h-full ${
                hoverElement == divB && 'overlay-full'
              } overflow-hidden`}
            >
              <div
                className={`${
                  hoverElement != divB && 'overlay-green'
                }  rounded-xl w-full h-full overflow-hidden`}
              >
                <CaseCard data={dataMap.get(divB)} />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => setHoverElement(divC)}
            className={`${hoverElement == divC ? 'w-[50%]' : 'w-[16%]'} h-full 
              rounded-xl case3 p-0 transition-all`}
          >
            <div
              className={`rounded-xl w-full h-full ${
                hoverElement == divC && 'overlay-full'
              } overflow-hidden`}
            >
              <div
                className={`${
                  hoverElement != divC && 'overlay-gray'
                }  rounded-xl w-full h-full overflow-hidden`}
              >
                <CaseCard data={dataMap.get(divC)} />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => setHoverElement(divD)}
            className={`${hoverElement == divD ? 'w-[50%]' : 'w-[16%]'} h-full 
              rounded-xl case5 p-0 transition-all`}
          >
            <div
              className={`rounded-xl w-full h-full ${
                hoverElement == divD && 'overlay-full'
              } overflow-hidden`}
            >
              <div
                className={`${
                  hoverElement != divD && 'overlay-violet'
                }  rounded-xl w-full h-full overflow-hidden`}
              >
                <CaseCard data={dataMap.get(divD)} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Qualities
