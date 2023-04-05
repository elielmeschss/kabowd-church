import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    background-size: cover;
    background:  #FFFFFF 0% 0% no-repeat padding-box;
}
:focus{
    outline: 0;
}
`
