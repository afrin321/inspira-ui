import React, { useContext } from 'react'
import Logo from './../assets/inspira_logo.png'
import Menu from './../assets/burger_menu.png'
import VisibilityContext from '../context/menuVisibleContext'


function Nav() {
    const { isVisible, setIsVisible, menuFlip } = useContext(VisibilityContext)
    return (
        <div className={`top bg-nav h-fit w-full fixed top-0 left-0 z-60 px-[7.5%] flex justify-between items-center align-middle py-5`}>
            <img src={Logo} className={`${menuFlip ? 'h-[65px]' : 'h-[90px]'}  w-auto object-scale-down`} />
            <ul className='flex gap-20 list-none items-center'>
                <li className={`flex gap-2 items-center text-[#ffffff] 'text-[30px]' font-bold`}>
                    <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
                </li>
                <li className={`${isVisible ? 'p-3 border-black rounded-lg bg-black opacity-50 ' : 'p-3 ' }`}><img src={Menu} className='cursor-pointer' onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
            </ul>
        </div>
    )
}

export default Nav