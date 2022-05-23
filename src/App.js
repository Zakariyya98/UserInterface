import React from 'react';
import Header from './components/UI/Header/Header';
import Main from './components/UI/AboutMe/Main';
import Footer from './components/UI/Footer/Footer';
import './index.css';
import Experience from './components/UI/Experience';
import TechnicalSkills from './components/UI/Technical';
import Contact from './components/UI/Contact';

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
  );
}

export default App;
