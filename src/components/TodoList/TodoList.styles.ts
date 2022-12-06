import styled from 'styled-components';

export const TodosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
        border-radius: 10px;

        &:nth-child(odd) {
            background-color: #f2f2f2;
        }
    }
`;
