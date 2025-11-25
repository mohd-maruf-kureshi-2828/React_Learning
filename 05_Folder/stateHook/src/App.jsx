import React, { useState } from "react";

function HookState(){
 const [count,setCount]=useState(0)

 function increaseCount(){
  setCount(count+1)
 }

 function decreaseCount(){
  setCount(count-1)
 }


 return(
  <>
    <h1>Count {count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    <button onClick={()=>setCount(count+5)}>Increase 5 Step</button>
    <button onClick={()=>setCount(count-5)}>Decrease % Step</button>
  </>
 )
}

export default HookState