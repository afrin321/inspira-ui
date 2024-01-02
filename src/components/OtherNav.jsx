import React from 'react'
import Logo from './../assets/inspira_logo.png'
import Menu from './../assets/burger_menu.png'

function OtherNav(props) {
  const { styles } = props
  return (
    <nav className={`${styles ? styles : ''} h-auto w-full nav flex justify-between items-center align-middle px-[8%] py-2`}>
        <img src={Logo} className='h-[65px] w-auto object-scale-down' />
        <ul className='flex gap-20 list-none items-center'>
            <li className='flex gap-2 items-center text-[#ffffff] text-[22px] min-[1920px]:text-[30px] font-bold'>
                <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
            </li>
            <li><img src={Menu} className='cursor-pointer' /></li>
        </ul>
    </nav>
  )
}

export default OtherNav