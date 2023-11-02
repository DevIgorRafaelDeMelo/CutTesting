import { createGlobalStyle } from 'styled-components'
import { Themes } from './themes'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body,
  #root {
    min-height: 100vh;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  #root {
 
background: rgba(77,77,77,1)
  }

  @media (max-width: 768px) {
    #root {
  
background:  rgba(77,77,77,1) 
    }

  }
`
