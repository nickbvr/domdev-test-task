import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
        * {
            box-sizing: border-box;
            margin: 0;
            text-decoration: none;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
                'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    border: 1px solid lightgray;
    border-radius: 10px;

    header {
        width: 100%;
        background-color: #f2f2f2;
        font-size: 10px;
        padding: 8px 16px;
        border-bottom: 1px solid lightgray;
        border-radius: 9px 9px 0 0;
    }

    main {
        width: 100%;
        padding: 16px;
    }
`;
