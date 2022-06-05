import React from 'react';
import Header from './components/UI/Header/Header';
import Main from './components/UI/AboutMe/Main';
import Footer from './components/UI/Footer/Footer';
import Experience from './components/UI/WorkExperience/Experience';
import TechnicalSkills from './components/UI/TechSkills/Technical';
import Contact from './components/UI/ContactMe/Contact';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </>
)};

export default App;
