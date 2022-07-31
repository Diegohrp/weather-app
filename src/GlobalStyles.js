import { createGlobalStyle } from 'styled-components';
export const font = 'Quicksand, sans-serif';
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
    overflow-x: hidden;
  }
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor}
  }
  @media (min-width:700px) {
    main{
      display: grid;
      place-items: center;
      grid-template-columns: minmax(40%,500px) minmax(60%,800px);
      grid-template-rows: 400px auto;
    }
  }
`;

export { GlobalStyle };
