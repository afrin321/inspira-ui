import React, { useContext } from 'react'
import One from './../assets/01_img.png'
import Two from './../assets/02_img.png'
import Three from './../assets/03_img.png'
import Four from './../assets/04_img.png'
import VisibilityContext from '../context/menuVisibleContext'

function CaseCard(props) {
  const { data } = props
  const { img, title, description, isHover } = data

  const { setPopupVisible, setPopup } = useContext(VisibilityContext)

  const imgMap = new Map()
  imgMap.set('1', One)
  imgMap.set('2', Two)
  imgMap.set('3', Three)
  imgMap.set('4', Four)

  const goToCase = (img) => {
    setPopupVisible(true)
    setPopup(img)
  }

  return (
    <div className='flex flex-col m-0 pb-8 w-full h-full rounded-xl bg-transparent '>
        <div className='h-[50%] xl:h-[62%] w-full flex justify-center  '>
            {
                !isHover && <span className='veritical z-60 text-[13px] font-bold text-white mt-6 min-[1920px]:text-[28px] min-[1920px]:leading-[40px]'>{title}</span>
            }
        </div>
        <div className='m-0 p-0 flex justify-between h-[50%] xl:h-[38%] w-full '>
            <div className='m-0 p-0 flex pl-10 '>
                {
                    isHover &&
                    <div className='flex flex-col gap-1 justify-between items-start w-[250px] xl:w-full'>
                        <p className="text-white font-bold text-lg 2xl:text-3xl ">{title}</p>
                        <p className='text-white text-sm  xl:text-xl 2xl:text-2xl font-semibold'>{description}</p>
                        <button onClick={() => goToCase(img)} className={`my-5 min-[1920px]:my-2 text-[#F7063E] text-sm rounded-full px-10 ${img == '4' ? 'min-[1920px]:w-[360px]' : 'min-[1920px]:w-[260px]'} py-2 bg-white font-semibold min-[1920px]:text-[30px] min-[1920px]:leading-[50px]`}>{ img == '4' ? 'PROXIMAMENTE' : 'Detalle' }</button>
                    </div>
                }
            </div>
            <div className='flex w-auto items-end align-bottom h-full'>
                <img src={imgMap.get(img)} className='m-1'/>
            </div>
        </div>
    </div>
  )
}

export default CaseCard