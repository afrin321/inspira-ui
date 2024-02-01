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
    <footer className={`w-full flex justify-between  footer  bottom-0 py-2 px-20 m-0`}>
        <div className='flex w-fit flex-col py-1 gap-2 items-start'>
            <Link to={'/'}><img src={Logo} className='my-2 w-24 h-auto xl:w-36 2xl:w-48 cursor-pointer' /></Link>
            <div className='flex gap-2'>
                <img src={Insta} className='w-10 h-10 2xl:w-14 2xl:h-14' />
                <img src={LinkedIn} className='w-10 h-10 2xl:w-14 2xl:h-14' />
            </div>
        </div>
        <div className=' w-full flex  gap-10 justify-end  pb-5 px-0 mx-0 2xl:text-xl'>
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
