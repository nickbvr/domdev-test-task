import styled from 'styled-components';

export const CreateFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    input {
        width: 100%;
        padding: 7px;
        border: 1px solid lightgray;
        border-right: none;
        outline: none;
        border-radius: 10px 0 0 10px;
    }

    button {
        background-color: #0000ff;
        color: white;
        padding: 7px;
        border: none;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        transition: 0.25s;

        &:hover {
            /* color: #0000ff; */
            background-color: #0000b3;
        }
    }
`;
