import React, { useState } from "react";

export default function FormTheme() {
  const [button, setButton] = useState("Dark");
  const[stylebutton,setStylebutton]=useState();
  const[isClick,setIsClick]=useState(true)
  const [formarea, setFormarea] = useState();
  const formHandler = (event) => {
    event.preventDefault();
    if(isClick){
        setFormarea({ backgroundColor: "black" });
        setStylebutton({backgroundColor:"white"});
        setButton("Light")
        setIsClick(false)
    }else{
        setFormarea({ backgroundColor: "white" });
        setStylebutton({backgroundColor:"black",color:"white"});
        setButton("Dark")
        setIsClick(true)
    }
    
  };
  return (
    <div className="changetheme">
      <form onSubmit={formHandler} style={formarea}>
        <input type="number" /> <br />
        <button className="themebutton" type="submit" value={button} style={stylebutton} >
          {button}
        </button>
      </form>
    </div>
  );
}
