import { FC, useState, ChangeEventHandler, KeyboardEventHandler } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todoSlice';
import { KEY_CODES } from '../../constants';
import { CreateFormWrapper } from './CreateForm.styles';

const CreateForm: FC = () => {
    const [value, setValue] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        value.trim() && dispatch(addTodo({ value: value.trim() }));
        setValue('');
    };

    const handleKeySubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
        e.key === KEY_CODES.enter && handleClick();
    };

    return (
        <CreateFormWrapper>
            <input
                type='text'
                placeholder='Enter todo here'
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeySubmit}
            />
            <button onClick={handleClick}>Submit</button>
        </CreateFormWrapper>
    );
};

export default CreateForm;
