import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e7f6ff;
  }

  body {
    font-family: 'Inter', system-ui;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style-type: none;
  }

  .small-button {
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    padding: 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
