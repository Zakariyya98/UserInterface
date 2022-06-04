import React from 'react';
import { ContainerDiv } from '../../styles/Container.styled';
import { MyIntro, TextDiv, AboutMe, ContentDiv } from './Main.styled';

const Main = () => {
    return (
        <>
        <ContentDiv>
        <AboutMe>About me:</AboutMe>
        </ContentDiv>

        <ContentDiv>
        
            <MyIntro>
            Hi! My name is Zakariyya and I build websites for the internet. I started my journey 
            into Web Development back in 2017 where I chose to undergo a Computer Science degree
            and it was in my Final Year in 2019 where I had started to strenghten my skills in Web
            Development and learn more about HTML, CSS and JavaScript.
            </MyIntro>
        

        
            <MyIntro>
            Fast-forward to 2022, and I've worked on a range of personal projects as well as working
            in the industry for an E-Commerce Company for 18 Months and now in my current role as a
            Web Developer for an Automotive Company.
            </MyIntro>
        

       
            <MyIntro>
            In my current role as a Web Developer my primary focus is on front-end 
            development gaining professional experience with creating and maintaining
            websites. I work with a range of cutting edge technologies such as React,
            Angular, Node.JS and JavaScript/TypeScript.
            </MyIntro>
        
        </ContentDiv>
    
        </>
    )

};

export default Main;