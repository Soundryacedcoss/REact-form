import React, { useState } from 'react'

export default function Converuppercase() {
    const[textarea,setTextarea]=useState();
    const[output,setOutput]=useState();
    
    const textareaHandler=(e)=>{
        var text=e.target.value
        var text1=text.toUpperCase();
        setTextarea(text1)
    }
    const formHandler=(event)=>{
        event.preventDefault()
        var output=textarea
        
        setOutput(output)
        
    }
  return (
    <form onSubmit={formHandler}>
        <textarea onChange={textareaHandler} name="" id="" cols="30" rows="10" placeholder='Please write something'>{textarea}</textarea>
        <br />
        <button className='button' type='submit'>Convert</button>
        <p >{output}</p>
    </form>
  )
}
