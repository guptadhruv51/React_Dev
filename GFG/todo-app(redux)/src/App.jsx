import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux';
import { addTodo,deleteTodo } from './slices/todoSlice';
import {v4 as uuid} from 'uuid';


function App() {
  const [inputText,setinputText]=useState('');
  const dispatch=useDispatch();
  // console.log(state);
  const todos = useSelector(state => state.todos.todos);
  console.log(todos);
  const onAddClick=()=>
  {
      dispatch(addTodo({
        id:uuid(),
        todo:inputText
      }))
      setinputText('');
  }

  const onDeleteClick=(id)=>
  {
      dispatch(deleteTodo({
        id:id
      }));
  }
  return (
    <div className='App bg-slate-200 w-screen h-screen'>
      <h1 className='text-purple-950 pt-4'>Todo App</h1>
      <div>
        <input value={inputText} onChange={(e)=>setinputText(e.target.value)} placeholder="Enter a task" type="text" />
        <button onClick={onAddClick}>Add</button>
      </div>
      {
      todos?.length>0 && todos.map(
        todo=>
        (
          <div> 
          <span>{todo.todo}</span>
          <button onClick={()=>onDeleteClick(todo.id)}>Delete</button>
          </div>
        )
      )
    }
    </div>
    
  )
}

export default App;
