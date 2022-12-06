import { ChangeEventHandler, FC, KeyboardEventHandler, useRef, useState } from 'react';
import { useAppDispatch, useClickOutside } from '../../hooks';
import { MdEditNote, MdDelete } from 'react-icons/md';
import { removeTodo, toggleComplete, updateTodo } from '../../store/todoSlice';
import { Itodo } from '../../types';
import { KEY_CODES } from '../../constants';
import { EditTodoWrapper, TodoContainer } from './Todo.styles';

const Todo: FC<Itodo> = ({ id, text, completed }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [value, setValue] = useState<string>(text);

    const ref = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    useClickOutside(ref, () => {
        setValue(text);
        setEditMode(!editMode);
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleUpdate = () => {
        dispatch(updateTodo({ id, text: value }));
        setEditMode(!editMode);
    };

    const handleToggle: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(toggleComplete({ id, completed: e.target.checked }));
    };

    const handleRemove = () => {
        dispatch(removeTodo(id));
    };

    const handleKeySubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === KEY_CODES.enter) {
            handleUpdate();
            setEditMode(!editMode);
        }
    };

    return (
        <TodoContainer>
            {!editMode ? (
                <>
                    <div>
                        <input type='checkbox' checked={completed} onChange={handleToggle} />
                        <p>{text}</p>
                    </div>
                    <div>
                        <MdEditNote onClick={handleUpdate} />
                        <MdDelete onClick={handleRemove} />
                    </div>
                </>
            ) : (
                <EditTodoWrapper ref={ref}>
                    <input
                        autoFocus
                        type='text'
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeySubmit}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </EditTodoWrapper>
            )}
        </TodoContainer>
    );
};

export default Todo;
