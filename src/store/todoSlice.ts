import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Itodo } from '../types';

interface todosState {
    todos: Itodo[];
}

const initialState: todosState = {
    todos: JSON.parse(localStorage.getItem('todos') as string) || [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [
                ...state.todos,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false,
                },
            ];
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleComplete: (state, action: PayloadAction<{ id: number; completed: boolean }>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) todo.completed = action.payload.completed;
        },
        updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) todo.text = action.payload.text;
        },
    },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
