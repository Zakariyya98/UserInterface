import React from "react";
import Card from './Card';
import { ExperienceContainer } from "./Experience.styled";

const Experience = () => {
    return (
        <>

        <ExperienceContainer>
        <Card 
        title="Company Name"
        date="Time at Company"
        description="Duties of my role"
        />
       

        
        <Card 
        title="Company Name"
        date="Time at Company" 
        description="Duties of my role"
        />
        

       
        <Card 
        title="Company Name"
        date="Time at Company"
        description="Duties of my role"
        />
       

        
        <Card 
        title="Company Name"
        date="Time at Company"
        description="Duties of my role"
        />
        </ExperienceContainer>

        </>
    )
  

};

export default Experience;
