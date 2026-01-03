import { useState } from 'react'

import './App.css'



function App() {
    const [counter,setcounter] = useState(15);
    function Addvalue(){
      setcounter(counter+1);
      setcounter(counter+1);
      setcounter(counter+1);
    }
  
   function removevalue(){
    setcounter(counter-1);
   } 
  return (
    <>
      <h1>Learn with me {counter}</h1>
      <h2>counter value {counter}</h2>
      <button onClick={Addvalue}>Add value</button>{' '}
      <button
      onClick={removevalue}>Remove value</button>
      <p>footer: {counter}</p>
       </>
  )
}

export default App
