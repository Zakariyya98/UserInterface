import React from 'react';
import Card from './Card';
import { ExperienceContainer, ExperienceLabel } from './Experience.styled';

const Contact = () => {
    return (
        <>
        <ExperienceLabel>
            Contact Me
        </ExperienceLabel>

        <ExperienceContainer>
                <Card
                    techtitle="Contact Details"
                    bullets0="Email: zak2fas49@gmail.com"
                    bullets1="LinkedIn: Zakariyya Ahmed"
                    bullets2="Github: Zakariyya98" />
            </ExperienceContainer>
            
            </>
    )
}

export default Contact;