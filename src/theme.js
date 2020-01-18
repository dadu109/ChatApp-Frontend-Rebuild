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
        xl:'64px',
        xxl:'72px'
    },
    breakpoint:{
        smallmobile:'320px',
        mobile:'414px',
        tablet:'834px',
        desktop:'1440px'
    }
};


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

export default theme;