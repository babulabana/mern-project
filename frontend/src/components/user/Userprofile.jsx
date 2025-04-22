
import React, {  useEffect, useRef, useState } from 'react'
import Logout from '../user/Logout'
export default function Userprofile() {
  return (
    <div>
      <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
     
     <h1>UserProfile</h1>
     <p className='flex'>
     <span className='w-1/3 text-center'>Name :</span> <input type="text" ref={nameref} className="textbox border-2  w-1/2"/>
     </p>
     <p className='flex'>
     <span className='w-1/3 text-center'>email:</span> <input type="text" disabled ref={emailref} className="textbox border-2 w-1/2 "/>
     </p>
     <p className='flex'>
     <span className='w-1/3 text-center'>contact no : </span><input type="text" ref={contactref} className="textbox border-2 w-1/2 "/>
     </p>
    
     
    <Logout></Logout>
     
     </div>
    </div>
  )
}
