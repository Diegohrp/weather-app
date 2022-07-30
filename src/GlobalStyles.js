import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    background-color: ${(props) => props.theme.background};
    font-family: 'Quicksand', sans-serif;
  }
  #root{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor}
  }
`;

export { GlobalStyle };
