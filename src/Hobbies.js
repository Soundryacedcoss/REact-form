import React, { useState } from 'react'

export default function Hobbies() {
    const [output,setOutput]=useState([])
    const[value1,setValue1]=useState([])
  
    const formHandler=(event)=>{
        event.preventDefault();
        var opt=value1
        setOutput(...output,opt)
        console.log(opt)     
    }
    const cktchek=(event)=>{
         var output1=(event.target.value);
         console.log(output1);
         setValue1([...value1,output1])
         console.log(value1);
    }
    
  return (
    <form onSubmit={formHandler}>
        <label>Cricket</label><input id='i1' onChange={cktchek} type="checkbox" value="cricket" />
        <label>Football</label><input onChange={cktchek} type="checkbox"  value="Football" />
        <label>Hockey</label><input onChange={cktchek} type="checkbox" value='Hockey' />
        <br />
        <button type='submit' className='button'>Submit</button>
        <ul>{output.map((item)=> (<li>{item}</li>))}</ul>
       
    </form>
  )
}
