import { FC } from 'react';
import { useAppSelector } from './hooks';
import { CreateForm, TodoList } from './components';
import { selectTodos } from './store/todoSlice';
import { AppContainer } from './styles';

const App: FC = () => {
    const todos = useAppSelector(selectTodos);

    return (
        <AppContainer>
            <header>
                <h1>Todos{todos.length ? ` (${todos.length})` : null}</h1>
            </header>
            <main>
                <CreateForm />
                <TodoList todos={todos} />
            </main>
        </AppContainer>
    );
};

export default App;
