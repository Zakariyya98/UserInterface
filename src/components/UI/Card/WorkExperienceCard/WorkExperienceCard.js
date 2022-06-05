import React from "react";
import { WE_Container, WE_Date, WE_Description, WE_Role, WE_Title } from "./WorkExperienceCard.styled";

const WE_Card = (props) => {
    return (
        <WE_Container>
            <WE_Title>{props.title}</WE_Title>
            <WE_Role>{props.role}</WE_Role>
            <WE_Date>{props.date}</WE_Date>
            <WE_Description>{props.description}</WE_Description>
        </WE_Container>
    )
}

export default WE_Card;