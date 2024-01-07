import React from 'react'
import { Link } from 'react-router-dom'

function Menu(props) {
    const { isVisible } = props
  return (
    isVisible && <div className='fixed top-24 right-16 font-semibold p-6 w-auto h-auto rounded-lg bg-white z-60 flex flex-col gap-2 text-[#F7073E]'>
        <Link to="/" className='hover:underline'>HOME</Link>
        <Link to="/" className='hover:underline'>¿QUÉ NOS INSPIRA?</Link>
        <Link to="/" className='hover:underline'>¿QUÉ HACEMOS? </Link>
        <Link to="/" className='hover:underline'>CASOS QUE NOS SIGUEN INSPIRANDO </Link>
        <Link to="/" className='hover:underline'>¿QUIÉN NOS INSPIRA?</Link>
        <Link to="/" className='hover:underline'>PLATIQUEMOS</Link>

    </div>
  )
}

export default Menu 