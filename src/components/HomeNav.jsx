import React from 'react'
import Logo from './../assets/inspira_logo.png'
import Menu from './../assets/burger_menu.png'

function HomeNav(props) {
  const {setIsVisble} = props
  return (
    <nav className='flex justify-between items-center align-middle'>
        <img src={Logo} className='h-[90px] w-auto object-scale-down' />
        <ul className='flex gap-20 list-none items-center'>
            <li className='flex gap-2 items-center text-[#ffffff] text-[22px] min-[1920px]:text-[30px] font-bold'>
                <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
            </li>
            <li><img src={Menu} className='cursor-pointer' onClick={() => setIsVisble(isVisible => !isVisible)} /></li>
        </ul>
    </nav>
  )
}

export default HomeNav