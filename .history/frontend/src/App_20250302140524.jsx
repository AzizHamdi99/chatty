import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import {Loader }from'lucide-react'

function App() {
 const{checkAuth,authUser,isChekingAuth}=useAuthStore()
 const navigate=useNavigate()

 useEffect(()=>{
    checkAuth()
 },[checkAuth])
 if(isChekingAuth &&!authUser){
  return(
    <div className='flex  items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin "/>

    </div>

  )
 }

  return (
    
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={authUser?<HomePage/>:navigate('/signup')}/>
      <Route path='signup' element={<SignUpPage/>}/>
      <Route path='signin' element={<SignInPage/>}/>
      <Route path='settings' element={<SettingsPage/>}/>
      <Route path='profile' element={authUser?<ProfilePage/>:navigate('/signup')}/>
     




      </Routes>

    </div>
  )
}

export default App
