import React, { useContext } from 'react'
import Logo from './../assets/logo_new.png'
import Menu from './../assets/burger_menu.png'
import VisibilityContext from '../context/menuVisibleContext'


function CaseNav() {
    const { isVisible, setIsVisible, menuFlip, setPopupVisible } = useContext(VisibilityContext)
    return (
        <nav className={`top bg-nav h-[122px] w-full absolute top-0 left-0 z-60 px-[7.5%] flex justify-between items-center align-middle  `}>
            <img src={Logo} className={`h-[76px] object-scale-down`} />
            <ul className={`flex list-none justify-between w-[216px] h-[40px] absolute 'top-[37px]' right-[200px] align-middle items-center p-0 m-0`}>
                <li className={`flex gap-1 items-center text-[#ffffff] text-[30px] leading-[40px] font-bold`}>
                    <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
                </li>
                <li className={`p-0 m-0 ${isVisible ? 'border-black rounded-lg bg-black opacity-50 p-3' : 'p-3' } `}><img src={Menu} className='cursor-pointer' onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
            </ul>
            <div onClick={() => setPopupVisible(false)} className='w-[50px] h-[50px] bg-gray-300 text-gray-700 rounded-full border-4 border-gray-100 p-auto flex justify-center items-center font-semibold absolute right-5 top-5 popup_close'>X</div>
        </nav>
    )
}

export default CaseNav