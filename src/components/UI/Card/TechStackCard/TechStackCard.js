import React from "react";
import { TS_Container, TS_Title, TS_Bullets } from "./TechStackCard.styled";

const TS_Card = (props) => {
    return (
        <>
            <TS_Container>
                <TS_Title>{props.title}</TS_Title>
                <TS_Bullets>{props.bullets0}</TS_Bullets>
                <TS_Bullets>{props.bullets1}</TS_Bullets>
                <TS_Bullets>{props.bullets2}</TS_Bullets>
                <TS_Bullets>{props.bullets3}</TS_Bullets>
                <TS_Bullets>{props.bullets4}</TS_Bullets>
                <TS_Bullets>{props.bullets5}</TS_Bullets>
            </TS_Container>
        </>
    )
}

export default TS_Card;
