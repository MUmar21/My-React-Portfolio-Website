// SkillsSection.js
import React, { useState } from 'react';
import '../Componenets Css/Skills.css';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const skills = [
    {
      id: 1,
      title: 'Unity Game Development',
      description: 'Expert in creating both 2D and 3D games with Unity.',
    },
    {
      id: 2,
      title: 'C# Programming',
      description: 'Proficient in C# coding for game logic, mechanics, and systems.',
    },
    {
      id: 3,
      title: 'Game Design',
      description: 'Innovative game design with engaging levels and experiences.',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Game Development & Design',
      description: 'Full-cycle game development from scratch or improving existing games.',
    },
    {
      id: 2,
      title: '2D & 3D Games',
      description: 'Developing both 2D and 3D games for various platforms.',
    },
    {
      id: 3,
      title: 'Single Player & Two Player Modes',
      description: 'Creating engaging single-player and multiplayer modes.',
    },
    {
      id: 4,
      title: 'Mobile & PC Games',
      description: 'Building games for mobile platforms and PC.',
    },
    {
      id: 5,
      title: 'Testing & Debugging',
      description: 'Extensive game testing and bug fixing for smooth gameplay.',
    },
    {
      id: 6,
      title: 'Graphic Design',
      description: 'Creative and impactful graphic design, delivering visually engaging assets that enhance the overall game experience.',
    },
  ];

  return (
    <section className="skills-section">
      {/* <h2 className="section-title">My Skills & Expertise</h2>
      <p className="section-description">
        Discover my expertise and services in the world of game development.
      </p>
      <div className="accordion-container">
        {skills.map((skill, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            key={skill.id}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <span>{index + 1}. {skill.title}</span>
              <span className="arrow">{activeIndex === index ? '↑' : '↓'}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}

      <div className="services-section">
        <h3 className="services-title">Services I Offer</h3>
        <p className="section-description">
        Discover my expertise and services in the world of game development.
      </p>
        <div className="services-container">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
