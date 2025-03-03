import React from 'react'
import { useChatStore } from '../store/useChatStore'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()

if(isMessagesLoading)return <div>loading ...</div>

  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
