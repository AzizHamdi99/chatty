import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function ProfilePage() {
const{authUser,isUpadtingProfile,updateProfile}=useAuthStore()

const handelImageUpload=async(e)=>{

}

  return (
    <div className='h-screen'>
      
    </div>
  )
}

export default ProfilePage
