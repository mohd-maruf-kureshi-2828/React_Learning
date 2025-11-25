import { useState } from 'react'
import './App.css'

function App() {
  const [names,setName]=useState({name:'Mohamed Maruf Kureshi', Role:"Full Stack Dev"})

  const btnClick=()=>{
    // let newnames={...names}
    // newnames.name="Arbaz"
    // newnames.Role="Frontend Dev"
    //  setName(newnames)

    // second way
    setName(prev=>({...prev,name:"arbaz",Role:"Frontend"}))
  }

  return(
    <>
    <h1>Name : <span>{names.name}</span> Role : <span>{names.Role}</span></h1>
    <button onClick={btnClick}>CLick To Change</button>
    </>
  )
}

export default App
