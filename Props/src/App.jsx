
import './App.css'
import Profile from './profile';

function App() {
  
  const hobby=["Running", "Coding"]
  const handleHobbyClick=(hobby)=>
  {
    alert(`You clicked on:${ hobby}`);
  };


  return (
    <> 
      <h1>Hello</h1>
      {/* <Profile name="Dhruv" age={26} isMemeber="true"/> //String */}
      <Profile name="Dhruv" age={26} isMember={true} hobbies={hobby}
      onHobbyClick={handleHobbyClick}/> 
      <Profile name="Dhruv" age={26} isMember={true} hobbies={hobby} onHobbyClick={handleHobbyClick}/> 
    </>
  );
}

export default App;
