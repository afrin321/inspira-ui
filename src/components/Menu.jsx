import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityContext from '../context/menuVisibleContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Menu(props) {
  const { isVisible, setIsVisible } = useContext(VisibilityContext)

  const {currentDiv, setCurrentDiv} = useState('home')

  const scrollToDiv = (divId) => {
    let offsetTop  = document.getElementById(divId).offsetTop;
    window.scrollTo({
        top: offsetTop-1, 
        behavior: "smooth"
    });
    setIsVisible(false)
    setCurrentDiv(divId)
  }

  

  return (
    isVisible && <div className='menu-open fixed top-24 right-16 font-semibold p-6 w-auto h-auto bg-slate-100 z-60 flex flex-col gap-2 text-[#F7073E]'>       
        <Link onClick={() => scrollToDiv('home')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'home' ? 'underline underline-offset-2' : ''}`}>HOME </Link>
        <Link onClick={() => scrollToDiv('about')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'about' ? 'underline underline-offset-2' : ''}`}>¿QUÉ NOS INSPIRA?</Link>
        <Link onClick={() => scrollToDiv('service')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'service' ? 'underline underline-offset-2' : ''}`}>¿QUÉ HACEMOS? </Link>
        <Link onClick={() => scrollToDiv('quality')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'quality' ? 'underline underline-offset-2' : ''}`} >CASOS QUE NOS SIGUEN INSPIRANDO </Link>
        <Link onClick={() => scrollToDiv('team')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'team' ? 'underline underline-offset-2' : ''}`}>¿QUIÉN NOS INSPIRA?</Link>
        <Link onClick={() => scrollToDiv('contact')} className={`hover:underline hover:underline-offset-2 ${currentDiv == 'contact' ? 'underline underline-offset-2' : ''}`}>PLATIQUEMOS</Link>        
    </div>
  )
}

export default Menu 