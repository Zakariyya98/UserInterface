import React from "react";
import { CC_Container, CC_Title, CC_Bullets } from "./ContactCard.styled";

const CC_Card = (props) => {
    return (
        <CC_Container>
            <CC_Title>{props.title}</CC_Title>
            <CC_Bullets>{props.email}</CC_Bullets>
            <CC_Bullets>{props.linkedin}</CC_Bullets>
            <CC_Bullets>{props.github}</CC_Bullets>
        </CC_Container>
    )

    
}

export default CC_Card;