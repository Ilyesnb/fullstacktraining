import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const TodoSlices = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos(state,action){
        state.todoList.push(action.payload)
    },
    removeTodo(state,action){
        state.todoList=state.todoList.filter(todo => todo.id !== action.payload)
    },
  }
});

export const {addTodos,removeTodo} = TodoSlices.actions

export default TodoSlices.reducer