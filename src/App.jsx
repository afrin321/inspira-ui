import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'


function App() {
  

  return (
    <div  className='w-full h-auto'>
      {/* <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={AboutUs}/>
        <Route path="/services" Component={Services}/>
      </Routes> */}

            
      
      <Home/>      
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default App
