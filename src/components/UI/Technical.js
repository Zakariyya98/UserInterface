import React from "react";
import Card from "./Card";
import { ExperienceContainer, ExperienceLabel } from "./Experience.styled";

const TechnicalSkills = () => {
    return (
        <>
        <ExperienceLabel>
            Technical Skills
        </ExperienceLabel>

        <ExperienceContainer>

        <Card 
        techtitle="Front-End"
        bullets0="React"
        bullets1="Angular"
        bullets2="HTML/CSS/SASS"
        bullets3="Styled-Components"
        bullets4="JavaScript"
        bullets5="TypeScript"
        />

        <Card 
        techtitle="Back-End"
        bullets0="Express"
        bullets1="Node.JS"
        bullets2="MongoDB"
        bullets3="PHP"
        />

        <Card 
        techtitle="Other"
        bullets0="Docker"
        bullets1="WordPress"
        bullets2="AWS"
        bullets3="Azure"
        bullets4="GitHub"
        />

        </ExperienceContainer>
        </>
    );

};

export default TechnicalSkills;