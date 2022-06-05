import React from "react";
import { NameHeading, Line } from "./Header.styled";
import { ButtonContainer, ContainerDiv } from "../../styles/Container.styled";
import HeaderButton from "../Button/Button.styled";

function Header() {
    return (
        <>
            <ContainerDiv>
                <NameHeading>Hi I'm Zakariyya</NameHeading>
                {/* <HeaderButton>Work</HeaderButton>
                <HeaderButton>Experience</HeaderButton>
                <HeaderButton>Contact Me</HeaderButton> */}
                <Line />
            </ContainerDiv>
        </>
)};

export default Header;