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
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/*left side of the form*/}
      <div className='flex '>

      </div>
      
    </div>
  )
}

export default SignUpPage
