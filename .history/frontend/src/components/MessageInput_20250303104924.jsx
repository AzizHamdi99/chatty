import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore'

import{X} from'lucide-react'

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
    <div className='p-4 w-full'>

 {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handeSendMessage} className='flex items-center gap-2'>

        <div className='flex-1 felx gap-2'>

        </div>




      </form>


      
    </div>
  )
}

export default MessageInput
