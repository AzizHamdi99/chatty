import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()

useEffect(()=>{
getMessages(selectedUser?._id)
},[selectedUser._id,getMessages])


if(isMessagesLoading)return (
<div className='flex-1 flex flex-col overflow-auto'>
  <ChatHeader/>
  <MessageSkeleton/>
  <MessageInput/>

  </div>
)

  return (
    <div className='flex flex-1 flex-col overflow-auto' >
      <ChatHeader/>

      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map((message)=>{
          return(
            <div>
              
            </div>
          )
        })}

      </div>

      <MessageInput/>
      
      
    </div>
  )
}

export default ChatContainer
