import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityContext from '../context/menuVisibleContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Menu() {
  const { isVisible } = useContext(VisibilityContext)

  const {currentDiv, setCurrentDiv} = useState('home')

  const scrollToDiv = (divId) => {
    let offsetTop  = document.getElementById(divId).offsetTop;
    window.scrollTo({
        top: offsetTop-1, 
        behavior: "smooth"
    });
    
  }

  return (
    isVisible && <div className=' menu-open fixed top-24 right-16 font-semibold p-6 w-auto h-auto bg-slate-100 z-60 flex flex-col gap-2 text-[#F7073E]'>
        <Link onClick={() => scrollToDiv('home')} className='hover:underline'>HOME</Link>
        <Link onClick={() => scrollToDiv('about')} className='hover:underline'>¿QUÉ NOS INSPIRA?</Link>
        <Link onClick={() => scrollToDiv('service')} className='hover:underline'>¿QUÉ HACEMOS? </Link>
        <Link onClick={() => scrollToDiv('quality')} className='hover:underline' >CASOS QUE NOS SIGUEN INSPIRANDO </Link>
        <Link onClick={() => scrollToDiv('team')} className='hover:underline'>¿QUIÉN NOS INSPIRA?</Link>
        <Link onClick={() => scrollToDiv('contact')} className='hover:underline'>PLATIQUEMOS</Link>
    </div>
  )
}

export default Menu 