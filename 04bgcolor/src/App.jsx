import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() => setColor("voilet")}
        className="outline-none px-3 py-1 rounded-full text-red shadow-lg"
        >Voilet</button>
        
        <button
        onClick={() => setColor("green")}
        className = "outline-none px-3 py-1 rounded-full text-green shadow-lg">Green</button>
        
        <button onClick={() => setColor("blue")}
          className = "outline-none px-3 py-1 rounded-full text-blue shadow-lg">Blue</button>
       </div>
      </div>
    </div>
  )
}

export default App
