import React from "react";
import Card from './Card';
import { ExperienceContainer, ExperienceLabel } from "./Experience.styled";

const Experience = () => {
    return (
        <>
        <ExperienceLabel>
            My Experience
        </ExperienceLabel>

        <ExperienceContainer>

        <Card 
        title="E-Commerce Company"
        date="March 2020 - September 2021"
        description="Duties of my role"
        />

        <Card 
        title="Vertu Motors"
        date="October 2021 - Present" 
        description="Duties of my role"
        />
    
        </ExperienceContainer>
        </>
    )
  

};

export default Experience;
