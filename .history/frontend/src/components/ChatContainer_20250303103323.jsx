import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()

useEffect(()=>{
getMessages(selectedUser?._id)
},[selectedUser._id,getMessages])


if(isMessagesLoading)return (
<div className='flex-1 flex flex-col overflow-auto'>
  </div>
)

  return (
    <div className='flex flex-1 flex-col overflow-auto' >
      <ChatHeader/>

      <p>messges ...</p>

      <MessageInput/>
      
      
    </div>
  )
}

export default ChatContainer
