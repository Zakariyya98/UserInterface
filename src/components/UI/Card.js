import React from 'react';
import {Title, Date, Description, StyledContainer} from './Card.styled'

const Card = (props) => {
    return (
    <StyledContainer>
    <Title>{props.title}</Title>
    <Date>{props.date}</Date>
    <Description>{props.description}</Description>
    </StyledContainer>
)};


export default Card;