import React from "react";
import { render } from "react-dom";
import styled, {css} from 'styled-components';

const Button = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: black;
color: white;
border: 2px solid white;

${props => props.primary && css`
background: white;
color: black

`}
`

export default Button;