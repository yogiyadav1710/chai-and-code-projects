import React, { useState,useCallback,useEffect } from 'react'

const PasswordGenerator = () => {
    const [length,setLength]=useState('8')
    const [numberAllowed,setNumberAllowed]=useState(false);
    const [characterAllowed,setCharacterAllowed]=useState(false);
    const [password,setPassword]=useState("")

    useEffect(()=>{
        passwordGenerator();
    },[length,numberAllowed,characterAllowed])

    const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+="0123456789"
        if(characterAllowed) str+="!@#$%^&*(),.?:{}|<></>"

        for(let i=1;i<=length;i++) {
                let char=Math.floor(Math.random()*str.length+1)
                pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length,numberAllowed,characterAllowed,setPassword])
     
    
  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800'>
            <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder='Password'
                    // readOnly
                />
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-2'>
                <input 
                    type="range"    
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                />
                  <label>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
                <input 
                    type="checkbox"    
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                />
                  <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
                <input 
                    type="checkbox"    
                    defaultChecked={characterAllowed}
                    id="characterInput"
                    onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
                />
                  <label htmlFor='characterInput'>Charactres</label>
            </div>
          </div>
       </div>


    </>
  )
}

export default PasswordGenerator;