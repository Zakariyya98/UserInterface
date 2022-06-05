import React from "react";
import TS_Card from "../Card/TechStackCard/TechStackCard";
import { ExperienceContainer, ExperienceLabel } from "../WorkExperience/Experience.styled";

const TechnicalSkills = () => {
    return (
        <>
        <ExperienceLabel>
            Technical Skills
        </ExperienceLabel>

        <ExperienceContainer>

        <TS_Card 
        title="Front-End"
        bullets0="React"
        bullets1="Angular"
        bullets2="HTML/CSS/SASS"
        bullets3="Styled-Components"
        bullets4="JavaScript"
        bullets5="TypeScript"/>

        <TS_Card 
        title="Back-End"
        bullets0="Express"
        bullets1="Node.JS"
        bullets2="MongoDB"
        bullets3="PHP"
        />

        <TS_Card 
        title="Other"
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