import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'Python',
  'Java',
  'C++',
  'Data Science',
  'Unreal',

  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="card-container">
        <div className="card">
            <p>In my skills section, you will find a solid foundation in various programming languages. While I am still on a learning journey,I possess a basic to intermediate understanding of these languages.</p>
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span className="skill-logo">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Skills;
