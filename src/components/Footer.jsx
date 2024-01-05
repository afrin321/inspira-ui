import React from 'react'
import Logo from './../assets/logo-sm.png'
import Insta from './../assets/insta_logo.png'
import LinkedIn from './../assets/linkedin_logo.png'

function Footer() {
  return (
    <footer className='w-full flex justify-around footer absolute bottom-0 py-3'>
        <div className='flex w-52 flex-col py-4 gap-2'>
            <img src={Logo} className='my-2 w-24 ' />
            <div className='flex gap-2'>
                <img src={Insta} className='w-8 h-8' />
                <img src={LinkedIn} className='w-8 h-8' />
            </div>
        </div>
        <div className='flex w-[60%] gap-10 justify-end px-16 text-sm'>
            <div className='flex flex-col gap-1 text-white py-3 w-[200px]'>
                <span>POLITICA DE PRIVACIDAD</span>
                <span>AVISO LEGAL</span>
                <span>POLITICA DE COOKIES</span>
            </div>
            <div className='flex flex-col gap-1 whitespace-nowrap text-white py-3 w-[200px] '>
                <span>HOME</span>
                <span>¿QUÉ NOS INSPIRA?</span>
                <span>¿QUÉ HACEMOS? </span>
                <span className=''>CASOS QUE NOS SIGUEN INSPIRANDO </span>
                <span>¿QUIÉN NOS INSPIRA? </span>
                <span>PLATIQUEMOS</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer