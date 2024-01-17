import { useState } from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import Qualities from './Qualities'
import Team from './Team'
import Contact from './Contact'
import Menu from './../components/Menu'
import OtherNav from './../components/OtherNav'
import VisibilityContext from './../context/menuVisibleContext'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'


function Landing() {

  const [isVisible, setIsVisible] = useState(false)

  // const { scrollYProgress } = useScroll()

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(scrollYProgress)
  // })


  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      <motion.div className='w-full h-auto'>
          <Home/>     
          <div className='w-full h-auto m-0 p-0'>
            <OtherNav styles='sticky top-0 left-0 z-60'/>
            <AboutUs/>
            <Services/>
            <Qualities/>
            <Team/>
            <Contact/>
          </div> 
          <Menu position=''/>          
      </motion.div>
    </VisibilityContext.Provider>
  )
}

export default Landing
