import { useState } from 'react'


function App() {
  const [names, setName] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form Submited by",names)
    setName('')
  }
  

  return (
    <>
    <form onSubmit={(e)=>{
       submitHandler(e)
    }}> 
      <input type="text" 
      value={names}
      placeholder='Enter Your Name'
      onChange={(e)=>{
        setName(e.target.value)
      }}
      
      />
      <br/>
      <button>submit</button>
    </form>
    
    </>
  )
}

export default App
