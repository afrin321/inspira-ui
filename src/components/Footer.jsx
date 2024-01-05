import React from 'react'
import Logo from './../assets/logo-sm.png'
import Insta from './../assets/insta_logo.png'
import LinkedIn from './../assets/linkedin_logo.png'

function Footer() {
  return (
    <footer className='w-full flex justify-between footer absolute bottom-0 px-[8%]'>
        <div className='flex w-52 flex-col py-4 gap-2'>
            <img src={Logo} className='my-2 w-24 ' />
            <div className='flex gap-2'>
                <img src={Insta} className='w-8 h-8' />
                <img src={LinkedIn} className='w-8 h-8' />
            </div>
        </div>
        <div className='flex w-52 '>
            <div></div>
        </div>
    </footer>
  )
}

export default Footer