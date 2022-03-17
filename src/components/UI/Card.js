import React from 'react';
import { Title, Date, Description, StyledContainer, Role, Bullets, TitleTech } from './Card.styled'

const Card = (props) => {
    return (
    <StyledContainer>

    <Title>{props.title}</Title>
    <Role>{props.role}</Role>
    <Date>{props.date}</Date>
    <Description>{props.description}</Description>

    <TitleTech>{props.techtitle}</TitleTech>
    <Bullets>{props.bullets0}</Bullets>
    <Bullets>{props.bullets1}</Bullets>
    <Bullets>{props.bullets2}</Bullets>
    <Bullets>{props.bullets3}</Bullets>
    <Bullets>{props.bullets4}</Bullets>
    <Bullets>{props.bullets5}</Bullets>

    </StyledContainer>
)};


export default Card;