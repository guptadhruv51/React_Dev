import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/todoSlice';

export const stores = configureStore({
  reducer: {
    todos: todoReducer
  }
});