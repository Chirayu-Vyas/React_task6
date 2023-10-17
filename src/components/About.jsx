




import React from 'react';

import './About.css';
import profileImage from '../Videos/image.jpg'; 

const About = () => {
  return (
      <div className="about-container">
        <div className="about-content">
          <img src={profileImage} alt="Profile" />
          <div className="about-content-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate front-end developer with a keen eye for design and a love for clean code.
              I enjoy creating beautiful and functional web experiences.
            </p>
            <p>
              My skills include HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js.
              I'm always eager to learn and keep up-to-date with the latest technologies in the web development world.
            </p>
            <p>
              Feel free to <a href="#contact">contact me</a> if you'd like to collaborate or just say hello!
            </p>
          </div>
        </div>
      </div>
  );
};

export default About;
