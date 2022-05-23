import React from "react";
import { NameHeading, Line } from "./Header.styled";
import { ButtonContainer, ContainerDiv } from "./styles/Container.styled";
import HeaderButton from "./UI/Button.styled";

function Header() {
    return (
        <ContainerDiv>
            <NameHeading>Hi I'm Zakariyya</NameHeading>
            {/* Backwards order because of the float: right */}
            <HeaderButton>Contact</HeaderButton>
            <HeaderButton>Experience</HeaderButton>
            <HeaderButton>Work</HeaderButton>
            <Line />
        </ContainerDiv>
    )
}

export default Header;