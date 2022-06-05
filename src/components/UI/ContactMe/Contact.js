import React from 'react';
import CC_Card from "../Card/ContactCard/ContactCard";
import { ExperienceContainer, ExperienceLabel } from '../WorkExperience/Experience.styled';

const Contact = () => {
    return (
        <>

            <ExperienceLabel>
                Contact Me
            </ExperienceLabel>

            <ExperienceContainer>

            <CC_Card 
            title="Contact Details"
            email="Email: zak2fas49@gmail.com"
            linkedin="LinkedIn: Zakariyya Ahmed"
            github="Github: Zakariyya98" 
            />

            </ExperienceContainer>
            
        </>
)};

export default Contact;