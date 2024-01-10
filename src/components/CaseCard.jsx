import React from 'react'
import One from './../assets/01_img.png'
import Two from './../assets/02_img.png'
import Three from './../assets/03_img.png'
import Four from './../assets/04_img.png'

function CaseCard(props) {
  const { data } = props
  const { img, title, description, isHover } = data

  const imgMap = new Map()
  imgMap.set('1', One)
  imgMap.set('2', Two)
  imgMap.set('3', Three)
  imgMap.set('4', Four)

  return (
    <div className='flex flex-col m-0 p-0 w-full h-full rounded-xl bg-transparent'>
        <div className='h-[62%] w-full flex justify-center'>
            {
                !isHover && <span className='veritical text-[13px] font-bold text-white mt-6'>{title}</span>
            }
        </div>
        <div className='m-0 p-0 flex justify-between h-[38%] w-full'>
            <div className='m-0 p-0 flex pl-10 '>
                {
                    isHover &&
                    <div className='flex flex-col gap-1 items-start'>
                        <p className="text-white font-bold text-xl">{title}</p>
                        <p className='text-white text-[12px] font-semibold'>{description}</p>
                        <button className='my-5 text-[#F7063E] text-sm rounded-full px-10 py-2 bg-white'>Detalle</button>
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