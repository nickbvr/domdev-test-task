import { FC, useEffect } from 'react';
import { Todo } from '../Todo';
import { Itodo } from '../../types';
import { TodosWrapper } from './TodoList.styles';

interface TodoProps {
    todos: Itodo[];
}

const TodoList: FC<TodoProps> = ({ todos }) => {
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosWrapper>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </TodosWrapper>
    );
};

export default TodoList;
