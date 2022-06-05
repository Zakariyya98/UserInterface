import React from "react";
import Card from '../Card/Card';
import { ExperienceContainer, ExperienceLabel } from "./Experience.styled";

const Experience = () => {
    return (
        <>
        <ExperienceLabel>
            Work Experience
        </ExperienceLabel>

        <ExperienceContainer>

        <Card 
        title="Medical E-Commerce Company"
        role="Junior Web Developer"
        date="March 2020 - September 2021"
        description="Worked with a WordPress website and built bespoke systems
        which included a Mock Exam System and Online Video Courses built around
        a subscription system. I worked with PHP for the backend and used HTML 
        and CSS to create the front end."
        />

        <Card 
        title="Vertu Motors"
        role="Web Developer"
        date="October 2021 - Present" 
        description="Working with new technologies such as React, Angular and
        Typescript. Exposure to 14 sites under the Vertu Motors brand and I have 
        had an oppourtunity to work on their biggest sites creating new features
        and fixing bugs."
        />
        
        </ExperienceContainer>
        </>
    )
  

};

export default Experience;
