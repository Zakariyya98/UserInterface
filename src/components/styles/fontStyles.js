import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #82DBD8;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 13px;    
    }
    &::-webkit-scrollbar-track {
        background: #2F8F9D;
    }
    &::-webkit-scrollbar-thumb {
        background: white;
    }
} 
`

export default FontStyles;