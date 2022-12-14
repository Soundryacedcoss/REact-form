import React, { useState } from 'react'
export default function Hobbies() {
  const [checked, setChecked] = useState([]);
  const checkList = ["Singing", "Dancing", "Cricket"];
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  // Generate string of checked items
  const checkedItems = checked.length ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";
  //it Return that item is checked or not
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <>
    <div className="checkList">
      <div className="title" style={{marginBottom:"2%"}}>Your Hobbies:</div>
      <div className="list-container" style={{marginBottom:"1%"}}>
        {checkList.map((item, index) => (
          <div style={{marginBottom:"1%"}} key={index}>
           <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p style={{marginBottom:"2%"}}>{`Hobbies are: ${checkedItems}`}</p>
    </div>
    </>
  )
}