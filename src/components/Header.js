import React from "react";
import { NameHeading } from "./Header.styled";
import { ButtonContainer, ContainerDiv } from "./styles/Container.styled";
import HeaderButton from "./UI/Button.styled";

function Header() {
    return (
        <ContainerDiv>
            <NameHeading>Hi I'm Zakariyya</NameHeading>
                {/* <ButtonContainer>
                    <HeaderButton>Work</HeaderButton>
                    <HeaderButton>Experience</HeaderButton>
                    <HeaderButton>Contact</HeaderButton>
                </ButtonContainer> */}
        </ContainerDiv>
    )
}

export default Header;