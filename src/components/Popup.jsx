import React, { useContext } from 'react'
import CaseNav from './CaseNav'
import Footer from './Footer'
import CaseScreen1 from './CaseScreens/CaseScreen1'
import CaseScreen2 from './CaseScreens/CaseScreen2'
import CaseFooter from './CaseFooter'
import VisibilityContext from '../context/menuVisibleContext'

function Popup() {

  const { popup } = useContext(VisibilityContext)

  return (
    <div className='overlay popup w-screen h-screen fixed top-0 left-0 py-[4%] px-[8%]'>
        <div className='w-full h-auto min-h-full overflow-y-auto bg-[#E4E3DB] border-4 relative flex justify-between'>
            
            <CaseNav/>
            <div className='w-full h-full border-2 border-black relative'>
                {popup == '1' && <CaseScreen1/>}
                {popup == '2' && <CaseScreen2/>}
                <CaseFooter/>
            </div>
            
        </div>
    </div>
  )
}

export default Popup