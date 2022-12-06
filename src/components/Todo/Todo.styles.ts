import styled from 'styled-components';

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    div:first-child {
        display: flex;
        flex-direction: row;

        input {
            margin-right: 10px;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: row;
        gap: 5px;

        svg {
            cursor: pointer;
            width: 25px;
            height: 25px;
            transition: 0.25s;

            &:hover {
                color: gray;
            }
        }
    }
`;

export const EditTodoWrapper = styled.div`
    width: 100%;

    input {
        width: 100%;
        padding: 4px 4px 3.5px 4px;
        border-right: none;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 4px;
    }
`;
