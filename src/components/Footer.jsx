import React from 'react'
import Logo from './../assets/logo-sm.png'
import Insta from './../assets/insta_logo.png'
import LinkedIn from './../assets/linkedin_logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const {currentDiv, setCurrentDiv} = useState('home')

  const scrollToDiv = (divId) => {
    let offsetTop  = document.getElementById(divId).offsetTop;
    window.scrollTo({
        top: offsetTop-1, 
        behavior: "smooth"
    });
    
  }

  return (
    <footer className={`w-full flex justify-between footer absolute bottom-0 py-2 px-[7.5%] m-0`}>
        <div className='flex w-fit flex-col py-1 gap-2 items-start'>
            <Link to={'/'}><img src={Logo} className='my-2 w-24 min-[1920px]:h-[60px] min-[1920px]:w-auto cursor-pointer' /></Link>
            <div className='flex gap-2'>
                <img src={Insta} className='w-8 h-8 min-[1920px]:h-12 min-[1920px]:w-12' />
                <img src={LinkedIn} className='w-8 h-8 min-[1920px]:h-12 min-[1920px]:w-12' />
            </div>
        </div>
        <div className=' w-full flex w-fit gap-10 justify-end text-[12px] min-[1920px]:text-[20px] leading-[24px] min-[1920px]:leading-[40px] pb-5 px-0 mx-0'>
            <div className='flex flex-col text-white w-fit'>
                <span  className='cursor-pointer hover:underline'>POLITICA DE PRIVACIDAD</span>
                <span  className='cursor-pointer hover:underline'>AVISO LEGAL</span>
                <span  className='cursor-pointer hover:underline'>POLITICA DE COOKIES</span>
            </div>
            <div className='flex flex-col w-fit whitespace-nowrap text-white '>
                <span onClick={() => scrollToDiv('home')} className='cursor-pointer hover:underline' >HOME</span>
                <span onClick={() => scrollToDiv('about')} className='cursor-pointer hover:underline' >¿QUÉ NOS INSPIRA?</span>
                <span onClick={() => scrollToDiv('service')} className='cursor-pointer hover:underline' >¿QUÉ HACEMOS? </span>
                <span onClick={() => scrollToDiv('quality')} className='cursor-pointer hover:underline' >CASOS QUE NOS SIGUEN INSPIRANDO </span>
                <span onClick={() => scrollToDiv('team')} className='cursor-pointer hover:underline' >¿QUIÉN NOS INSPIRA? </span>
                <span onClick={() => scrollToDiv('contact')} className='cursor-pointer hover:underline' >PLATIQUEMOS</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
