import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #cfe2ff
  }

  body {
    background-color: #fff;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
`

export default GlobalStyle
