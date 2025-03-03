import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore'

function MessageInput() {
    const [text,setText]=useState('')
    const [imagePreview,setImagePreview]=useState(null)
    const fileInputRef=useRef(null)

    const{sendMessages}=useChatStore()

    const handelImageChange=(e)=>{

    }

    const removeImage=()=>{

    }
    const handeSendMessage=()=>{

    }

  return (
    <div className='p-4'>
      
    </div>
  )
}

export default MessageInput
