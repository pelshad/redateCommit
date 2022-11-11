import {createSlice} from "@reduxjs/toolkit";

const initialState = createSlice({
    name : "todos",
    initialState,
    reducers: {
        add:(state, action) => {
            state.todos.push({test: action.payload, done:false});
        },
        remove:(state, action) => {
            state.todos.splice(action.payload, 1);
        },
        toggle:(state, action) => {
            state.todos[action.payload].done = !state.todos[action.payload].done;
        },
    },
});

export const { add, remove, toggle} = todoSlice.action;
export default todoSlice.reducers;