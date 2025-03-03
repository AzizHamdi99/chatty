import React from 'react'
import { useChatStore } from '../store/useChatStore'

function Sidebar() {

    const{getUser,users,selectedUser,setSelectedUser,isUserLoading}=useChatStore()

    const onlineUsers=[]
    

  return (
    <div>
      
    </div>
  )
}

export default Sidebar
