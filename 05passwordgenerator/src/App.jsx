import { useCallback, useState ,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setLength] = useState(8)
  const[charallowed, setCharAllowed] = useState(false)
  const[number, setNumber] = useState(false)
  const[password, setPassword] = useState('')

  const passwordRef = useRef(null);
   
  const copytoclipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }

const generatepassword = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (charallowed) {
    str += "!@#$%^&*()_+~`|}{";
  }
  if(number){
    str += "0123456789";
  }
  for(let i=1; i<length; i++){
    let char = Math.floor(Math.random()*str.length +1);
    pass += str.charAt(char);
  }
  setPassword(pass);
} , [charallowed, length, number]);

useEffect(() => {
  generatepassword()
},[length, charallowed, number]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-green-800 text-orange-500 '>
        <h1 className=' text-white text-center font-italic my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className=' w-full px-4 py-2 text-white font-italic' placeholder='Password'
          ref={passwordRef}
          readOnly />

          <button onClick={copytoclipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shringk-0'>copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div className='flex item-center gap-x-1'>
             <input type="range"
             min={8}
             max={100}
             value={length}
             className='cursor pointer'
             
              onChange={(e) => setLength(e.target.value)}
              
              name=""
               id="" />
              <label htmlFor="length">Length:{length}</label>
          </div>
          <div
          className='flex item-center gap-x-1'
          >
            <input type="checkbox"
            defaultChecked={number}
            onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="number">Numbers : {number}</label>
          </div>
          <div 
          className='flex item-center gap-x-1'
          >
            <input type="checkbox"
            defaultChecked={charallowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
             name=""
            id="" />
            <label htmlFor="character">Character:{charallowed}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
