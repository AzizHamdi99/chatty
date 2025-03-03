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
    <aside className='className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200"'> 
        <div>

            
        </div>







    </aside>
  )
}

export default Sidebar
