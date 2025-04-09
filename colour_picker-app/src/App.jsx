import { useState } from 'react'

import './App.css'

function App() {
  const [backgroundColor,setbgcolor]=useState('#ffffff');
  const colors=['#ff0000','#00ff00','#0000FF','#FFFF00','#800080'];
  const handlecolorChange=(color)=>
  {
      setbgcolor(color);
  }
  return (

    <div classname='app' style={{backgroundColor}}>
      <h1>Colour Picker</h1>
      <div classname='color-palette'>
      {colors.map((color,index)=>(
        <div key={index}
        className='color-box'
        style={{backgroundColor:color}}
        onClick={()=>handlecolorChange(color)}
        >

          </div>
      ))}
      </div>
      <div className='custom-color-picker'>
        <input type='color'
        value={backgroundColor}
        onChange={(e)=>handlecolorChange(e.target.value)}></input>

      </div>
</div>


  );
}

export default App;
