import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

function SignUpPage() {
  const [shoPassword,setShowPasswor]=useState(false)

  const [formData,setFormData]=useState({
    fullname:"",
    email:"",
    password:""
  })

  const{signUp,isSigningUp}=useAuthStore()


  const validateForm=()={

  }

  const handelSubmit=(e)=>{
    e.preventDefault()
  }


  return (
    <div className=''>
      
    </div>
  )
}

export default SignUpPage
