import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Itodo } from '../types';

interface todosState {
    todos: Itodo[];
}

const initialState: todosState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ value: string }>) => {
            state.todos = [
                ...state.todos,
                {
                    id: Date.now(),
                    text: action.payload.value,
                    completed: false,
                },
            ];
        },
        removeTodo: (state, action: PayloadAction<{ id: number }>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action: PayloadAction<{ id: number }>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
            );
        },
        updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo,
            );
        },
    },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
