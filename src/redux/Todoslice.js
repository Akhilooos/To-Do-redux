import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"Todos",
    initialState:[],
    reducers:{
        addTodo(state,action){
            const newTodo={
                id: Date.now(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        deleteTodo(state, action) {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
        },
        statusTodo(state,action){
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        }
    }
})

export const { addTodo, deleteTodo, statusTodo } = todoSlice.actions;

export default todoSlice.reducer;
