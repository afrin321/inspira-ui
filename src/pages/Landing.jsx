import { useState } from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import Qualities from './Qualities'
import Team from './Team'
import Contact from './Contact'
import Menu from './../components/Menu'
import OtherNav from './../components/OtherNav'
import Nav from './../components/Nav'
import VisibilityContext from './../context/menuVisibleContext'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Popup from '../components/Popup'

function Landing() {

  const [isVisible, setIsVisible] = useState(false)
  const [menuFlip, setMenuFlip] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [popup, setPopup] = useState(null)


  const targetRef = useRef

  const { scrollYProgress, scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Assuming windowHeight is the height of the viewport in pixels
    const viewportHeight = window.innerHeight;

    // Convert scroll position from pixels to vh
    const scrollPositionInVh = (latest / viewportHeight) * 100;
    scrollPositionInVh > 90 ? setMenuFlip(true) : setMenuFlip(false)
  });


  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible, menuFlip, popupVisible, setPopupVisible, popup, setPopup }}>
      <motion.div className='w-full h-auto relative'>
          {/* <Home/>      */}
          <Nav/>
          <div className='w-full h-auto m-0 p-0 absolute top-0'>
            {/* <OtherNav styles='sticky top-0 left-0 z-60'/> */}
            
            <Home/> 
            <AboutUs/>
            <Services/>
            <Qualities/>
            <Team/>
            <Contact/>
          </div> 
          <Menu position=''/>    
          { popupVisible && <Popup/> }    
      </motion.div>
    </VisibilityContext.Provider>
  )
}

export default Landing
