import React from 'react'
import Logo from './../assets/new_logo.png'
import Menu from './../assets/burger_menu.png'
import VisibilityContext from '../context/menuVisibleContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function OtherNav(props) {
  const { styles } = props
  const langFont  = "min-[1920px]:text-[30px] text-[15px]"
  const { isVisible, setIsVisible } = useContext(VisibilityContext)
  return (
    <nav className={`${styles ? styles : ''} h-auto w-full nav flex justify-between items-center align-middle px-[8%] py-2`}>
        <Link to={'/'}><img src={Logo} className='h-[65px] w-auto object-scale-down py-3' /></Link>
        <ul className={`flex gap-20 list-none items-center ${langFont} align-middle`}>
            <li className='flex gap-2 items-center text-[#ffffff] font-normal
            '>
                <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
            </li>
            <li className={`${isVisible ? 'p-3 border-black rounded-lg bg-black opacity-50 ' : 'p-3 ' }`}><img src={Menu} className='cursor-pointer'  onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
        </ul>
    </nav>
  )
}

export default OtherNav