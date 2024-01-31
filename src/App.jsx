import { createContext, useEffect, useState } from 'react'
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
import VisibilityContext from './context/menuVisibleContext'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Landing from './pages/Landing'
import Main from './pages/Main'
 

function App() {

  

  return (
    <Main/>
  )
}

export default App
