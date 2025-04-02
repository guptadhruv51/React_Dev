import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);


  
  const incrementTwice=()=>
  {
    setCount(prevCount=>prevCount+1);
    setCount(prevCount=>prevCount+1);
  }
  // States updates are async 
  // Updater function for multiple states 
  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <h2>Counter value: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={incrementTwice}>+2</button>
      </div>
    </>
  );
}

export default App;
