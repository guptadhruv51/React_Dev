import { useDispatch,useSelector } from "react-redux"
import { decrement, increment } from "../../slices/counterSlice";
export const Counter=()=>
{

  const dispatch=useDispatch();

  const count=useSelector(state=>state.counter.count)
  const onUpclick=()=>
  {
    dispatch(increment());

  }

  const onDownclick=()=>
    {
      dispatch(decrement());
  
    }
  return(
  <>
  <button onClick={onUpclick}>Up</button>
  <span>{count}</span>
  <button onClick={onDownclick}>Down</button>
  </>

  )
}