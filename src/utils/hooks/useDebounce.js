import React, { useState } from 'react'

export default function useDebounce() {

    const [typingTimeout, setTypingTimeout] = useState("")
    function debouncle(func,wait=1000){
      clearTimeout(typingTimeout);
      const timeout=setTimeout(() => func() , wait);
    setTypingTimeout(timeout);
    
    }
    return debouncle;
}
