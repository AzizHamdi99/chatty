import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='signup' element={<SignUpPage/>}/>
      <Route path='signin' element={<SignInPage/>}/>
      <Route path='Settings' element={<HomePage/>}/>
     




      </Routes>

    </div>
  )
}

export default App
