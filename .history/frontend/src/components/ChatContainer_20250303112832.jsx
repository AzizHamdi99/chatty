import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'
import { useAuthStore } from '../store/useAuthStore'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()
const{authUser}=useAuthStore()

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
            <div key={message._id} className={`chat ${message.senderId===authUser._id ?"chat-end":"chat-start"}`}>
              <div className='chat-image avatar'>
                <div className='size-10 rounded-full border'>
                  <img src={message.sendId===authUser._id? authUser.profilePic ||"/avatar.png":selectedUser.profilePic} alt="" />

                </div>

              </div>
              

            </div>
          )
        })}

      </div>

      <MessageInput/>
      
      
    </div>
  )
}

export default ChatContainer
