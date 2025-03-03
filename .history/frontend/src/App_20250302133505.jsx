import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homepage}/>
      <Route/>
      <Route/>
      <Route/>




      </Routes>

    </div>
  )
}

export default App
