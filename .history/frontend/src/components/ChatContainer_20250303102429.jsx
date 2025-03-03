import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()

useEffect(()=>{
getMessages(selectedUser?._id)
},[selectedUser._id,getMessages])


if(isMessagesLoading)return <div>loading ...</div>

  return (
    <div className='flex flex-1 flex-col overflow-auto' >
      <ChatHeader/>

      <p></p>
      
      
    </div>
  )
}

export default ChatContainer
