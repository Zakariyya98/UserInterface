import React from 'react';
import Header from './components/Header';
import Main from './components/UI/Main';
import Footer from './components/Footer';
import Card from './components/UI/Card';
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
