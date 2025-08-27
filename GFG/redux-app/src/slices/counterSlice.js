import { createSlice } from "@reduxjs/toolkit";

const initialState={
  count:0
};
// CreateSLice creates an action under the hood using the name of the reducer
const counterSlice=createSlice(
  {
    name:'counter',
    initialState,
    reducers:
    {
      increment:state=>{state.count=state.count+1 }//Mutation   action='counter/increment'
      ,
      decrement:state=>{state.count=state.count-1 }    //action='counter/decrement'
      
    }
  }
)
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;