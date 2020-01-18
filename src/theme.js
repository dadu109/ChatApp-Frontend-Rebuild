import { createGlobalStyle } from "styled-components"

const theme = {
    color:{
        primary:'#73ABF0',
        secondary:'#F0B873',
        light:'#F9F9F9',
        dark:'#000000'
    },
    fontsize:{
        xs:'18px',
        s:'24px',
        m:'36px',
        l:'44px',
        xl:'64px'
    }
};


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

export default theme;