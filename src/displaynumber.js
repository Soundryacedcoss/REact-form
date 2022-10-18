import React, { useState } from 'react'

export default function Displaynumber() {
    const[input,setInput]=useState('')
    const[output,setOutput]=useState('');
    const fromHandler=(event)=>{
          event.preventDefault()
          var output=input
          setOutput(output)
    }
    const inputHandler=(e)=>{
        setInput(e.target.value)
    }
  return (
     <form onSubmit={fromHandler}>
        <label>Enter any number: <input type="number" onChange={inputHandler} /></label>
       <button className='button' type="submit">Add</button>
       <p >{output}</p>
     </form>
  )
}
