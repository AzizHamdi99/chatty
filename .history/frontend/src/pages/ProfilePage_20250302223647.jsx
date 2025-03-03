import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function ProfilePage() {
const{authUser,isUpadtingProfile,updateProfile}=useAuthStore()

const handelImageUpload=async(e)=>{

}

  return (
    <div className='h-screen pt-20'>
      <div className='max-w-2xl mx-auto p-4 py-8'>
         <div>
          
         </div>

      </div>
      
    </div>
  )
}

export default ProfilePage
