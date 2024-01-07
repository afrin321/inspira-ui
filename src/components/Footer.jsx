import React from 'react'
import Logo from './../assets/logo-sm.png'
import Insta from './../assets/insta_logo.png'
import LinkedIn from './../assets/linkedin_logo.png'

function Footer() {
  return (
    <footer className='w-full flex justify-between min-[1920px]:justify-around footer absolute bottom-0 py-2 px-20'>
        <div className='flex w-auto flex-col py-1 gap-2 items-start '>
            <img src={Logo} className='my-2 w-24 min-[1920px]:h-[60px] min-[1920px]:w-auto ' />
            <div className='flex gap-2'>
                <img src={Insta} className='w-8 h-8 min-[1920px]:h-12 min-[1920px]:w-12' />
                <img src={LinkedIn} className='w-8 h-8 min-[1920px]:h-12 min-[1920px]:w-12' />
            </div>
        </div>
        <div className='flex w-auto  gap-10 justify-end px-8 text-[12px] min-[1920px]:text-[20px] leading-[24px] min-[1920px]:leading-[40px] pb-5'>
            <div className='flex flex-col text-white w-[200px]'>
                <span >POLITICA DE PRIVACIDAD</span>
                <span >AVISO LEGAL</span>
                <span >POLITICA DE COOKIES</span>
            </div>
            <div className='flex flex-col whitespace-nowrap text-white w-[200px] '>
                <span>HOME</span>
                <span>¿QUÉ NOS INSPIRA?</span>
                <span>¿QUÉ HACEMOS? </span>
                <span>CASOS QUE NOS SIGUEN INSPIRANDO </span>
                <span>¿QUIÉN NOS INSPIRA? </span>
                <span>PLATIQUEMOS</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer