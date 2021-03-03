import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html{
    height: 100%;

    body{
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
    }

    #root{
      background: radial-gradient(#282c34cc, #282c34);
      color: "#282c34";
      display: flex;
      justify-content: center;
      font-family: sans-serif;
      height: 100%;
      padding: 15px;
    }
  }
`
