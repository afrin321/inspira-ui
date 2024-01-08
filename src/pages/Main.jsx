import React from 'react'
import { Routes, Route } from 'react-router'
import Cases from './Cases'
import Landing from './Landing'

function Main() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/case' element={<Cases/>} />
        </Routes>

    </div>
  )
}

export default Main
