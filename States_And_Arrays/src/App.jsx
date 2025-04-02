
import { useState } from 'react'
import './App.css'

function App() {
  const[counter, setCounters]=useState([{id:1,value:0}]);

  const addCounters=()=>
  {
      setCounters([...counter,{id:counter.length+1,value:0}])
  };
  const IncrementCounter=(id)=>
  {
     setCounters(counter.map(counter=>counter.id===id?{...counter,value: counter.value+1}:counter));
  };
  return (
    <>
     <button onClick={addCounters}>Add counter</button>
     <ul>
      {counter.map(counter=>(
        <li key={counter.id}>
          Counter {counter.id}: {counter.value} 
          <button onClick={()=>IncrementCounter(counter.id)}>Increment</button>
        </li>
      ))}
     </ul>
    </>
  )
}

export default App
