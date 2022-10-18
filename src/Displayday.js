import React, { useState } from 'react'

export default function Displayday() {
    const[output,setOutput]= useState('')
    const selectHandler=(e)=>{
           setOutput(e.target.value)
    }
  return (
    <form>
        <select name="" id=""  onChange={selectHandler}>
            <option value="">----Chosse-One----</option>
            <option value="Monday">1</option>
            <option value="Tuesday">2</option>
            <option value="Wednesday">3</option>
            <option value="Thurday">4</option>
            <option value="Friday">5</option>
            <option value="Saturday">6</option>
            <option value="Sunday">7</option>
        </select>
        <p>{output}</p>
    </form>
  )
}
