import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'

function ChatContainer() {
const{messages,getMessages,isMessagesLoading,selectedUser}=useChatStore()

useEffect(()=>{
getMessages(selectedUser?._id)
},[messages])


if(isMessagesLoading)return <div>loading ...</div>

  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
