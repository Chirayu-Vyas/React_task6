// Home.jsx

import React from 'react';
import './First.css';

import bg from '../Videos/snowmountain.mp4';

const First = () => {
  return (
    <section id="home" className="home">
      
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>    
        </div>
        <div className="second-bg"/>
      <div className="content">
        <div className="text">
          <h1>Learning Something New</h1>
          <h1>Everyday.</h1>
          <h4>Welcome to my Portfolio</h4>
          
        </div>
        </div>
    </section>
  );
};

export default First;
