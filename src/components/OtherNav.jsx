import React from 'react'
import Logo from './../assets/inspira_logo.png'
import Menu from './../assets/burger_menu.png'

function OtherNav(props) {
  const { styles } = props
  const langFont  = "min-[1920px]:text-[30px] text-[15px]"
  return (
    <nav className={`${styles ? styles : ''} h-auto w-full nav flex justify-between items-center align-middle px-[8%] py-2`}>
        <img src={Logo} className='h-[65px] w-auto object-scale-down py-3' />
        <ul className={`flex gap-20 list-none items-center ${langFont} align-middle`}>
            <li className='flex gap-2 items-center text-[#ffffff] font-normal
            '>
                <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
            </li>
            <li><img src={Menu} className='cursor-pointer' /></li>
        </ul>
    </nav>
  )
}

export default OtherNav