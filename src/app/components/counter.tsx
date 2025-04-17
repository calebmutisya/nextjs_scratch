"use client";
import React, {useState} from 'react'
import { useAuth, useUser } from "@clerk/nextjs"

const Counter = () => {

    const { isLoaded, userId, sessionId, getToken} = useAuth();
    
    console.log("Counter Component");
    const [count, setCount] = useState(0);

    if (!isLoaded || !userId){
      return null;
    }

  return (
    <button onClick={() => setCount(count + 1)}> Clicked {count} times.</button>
  )
}

export default Counter