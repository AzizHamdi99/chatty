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


  return (
    <div>
      
    </div>
  )
}

export default SignUpPage
