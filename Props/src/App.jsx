
import './App.css'
import Profile from './profile';

function App() {
  

  return (
    <>
      <h1>Hello</h1>
      {/* <Profile name="Dhruv" age={26} isMemeber="true"/> //String */}
      <Profile name="Dhruv" age={26} isMember={true}/> 
      <Profile name="Dhruv" age={26} isMember={true}/> 
    </>
  );
}

export default App;
