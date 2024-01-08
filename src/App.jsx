import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Qualities from './pages/Qualities'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Menu from './components/Menu'
import OtherNav from './components/OtherNav'
function App() {

  return (
    <div  className='w-full h-auto'>
      {/* <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={AboutUs}/>
        <Route path="/services" Component={Services}/>
      </Routes> */}

        <Home/>     
        <div className='w-full h-auto m-0 p-0'>
          <OtherNav styles='sticky top-0 left-0 z-60'/>
          <AboutUs/>
          <Services/>
          <Qualities/>
          <Team/>
          <Contact/>
        </div> 
        <Menu/>           
      
    </div>
  )
}

export default App
