import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { useEffect} from 'react'

function App() {
 const [mousePosition,setMousePosition]=useState({x:0,y:0});
  useEffect(()=>{
    const handleMouseMove=(event)=>{
      setMousePosition({x:event.clientX,y:event.clientY})
    };
    window.addEventListener('mousemove',handleMouseMove);
  },[])

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X:{mousePosition.x}  Y:{mousePosition.y}</p>
        </div>
  )
}

export default App
