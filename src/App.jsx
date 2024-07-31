import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skill from './Components/Skill/Skill';

import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className='overflow-x-hidden bg-white2 text-dark '>
      <div className='relative overflow-hidden'>
        <Navbar />
        <Element name="home">
          <Hero />
        </Element>
      </div>
      <Element name="skill">
        <Skill />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name='contact'>
      <Contact />
      </Element>
    </div>
  );
}

export default App;
