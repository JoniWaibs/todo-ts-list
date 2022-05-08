import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 95%;
    margin: 0 auto;
    padding: 0;
    background-color:  rgba(226,226,226,1);;
  }

  /* Large screens */
  @media(min-width: 600px) {
    body {
      max-width: 45%;
    }
  }
`;
