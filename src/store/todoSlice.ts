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
            const todo = {
                id: Date.now(),
                text: action.payload.value,
                completed: false,
            };
            return { ...state, todos: [...state.todos, todo] };
        },
        removeTodo: (state, action: PayloadAction<{ id: number }>) => {
            const result = state.todos.filter((todo) => todo.id !== action.payload.id);
            return { ...state, todos: result };
        },
        toggleComplete: (state, action: PayloadAction<{ id: number }>) => {
            const result = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
            );
            return { ...state, todos: result };
        },
        updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const result = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo,
            );
            return { ...state, todos: result };
        },
    },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
