import React, { useContext } from 'react'
import CaseNav from './CaseNav'
import Footer from './Footer'
import CaseScreen1 from './CaseScreens/CaseScreen1'
import CaseScreen2 from './CaseScreens/CaseScreen2'
import CaseScreen3 from './CaseScreens/CaseScreen3'
import CaseScreen4 from './CaseScreens/CaseScreen4'
import CaseFooter from './CaseFooter'
import VisibilityContext from '../context/menuVisibleContext'


function Popup() {

  const { popup,  } = useContext(VisibilityContext)

  return (
    <div className='overlay popup w-screen h-screen fixed top-0 left-0 py-[4%] px-[8%]'>
        <div className='w-full h-auto min-h-full overflow-y-auto bg-[#E4E3DB] relative flex justify-between'>
            
            {/* <CaseNav/> */}
            <div className='w-full h-full relative'>
                {popup == '1' && <CaseScreen1/>}
                {popup == '2' && <CaseScreen2/>}
                {popup == '3' && <CaseScreen3/>}
                {popup == '4' && <CaseScreen4/>}
                {popup == '4' && <CaseScreen4/>}
                {/* <CaseFooter/> */}
            </div>
            
        </div>
    </div>
  )
}

export default Popup