import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton'

function Sidebar() {

    const{getUser,users,selectedUser,setSelectedUser,isUserLoading}=useChatStore()

    const onlineUsers=[]
    useEffect(()=>{
        getUser()

    },[getUser])
    if(isUserLoading)return<SidebarSkeleton/>

  return (
    <aside>







        
    </aside>
  )
}

export default Sidebar
