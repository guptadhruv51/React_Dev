
import './App.css'
function welcomeMessage(name)
{
  return <h1>Hello, {name}</h1>
}
function greeting (isMorning)
{
  if(isMorning)
    return <h1>Good Morning</h1>
  return <h1> Good Evening</h1>
}
function showAlert(condition,message)
{
  if(condition)
  {
    return <div>
      {message}
    </div>
  }
  return null;
}

function App() {
  const element=<h1>Hello, World</h1>;
  const buttonLabel="Click me";
  const isLoggedIn=true;
  const now=new Date();
  const isMorning=(now.getHours())<12;

  if(isLoggedIn)
  {
    
    return (
      <div>
      
      {greeting(isMorning)}
    <h1>Welcome Back</h1>
    {welcomeMessage("Dhruv")}
    {showAlert(true,"this is important")}
    </div>
    );
  }

  else
  {
  
  return (
    
    <>
      {element}
      {6+7}
      <h2 className='hello'> Hi</h2>
      <button style={{backgroundColor:'blue',color:'white'}}>{buttonLabel}</button>

      <button  onClick={()=>alert("Button Clicked")}>Alert Me!</button>
    </>
  );
}
}

export default App
