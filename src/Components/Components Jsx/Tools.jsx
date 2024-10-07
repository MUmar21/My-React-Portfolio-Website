import React from 'react';
import '../Componenets Css/Tools.css';

const skillsData = [
  { id: 1, name: 'C#', icon: './images/C.png', percentage: '75%' },
  { id: 2, name: 'Unity', icon: './images/unity.png', percentage: '70%' },
  { id: 3, name: 'Blender', icon: './images/blender.png', percentage: '60%' },
  { id: 4, name: 'Photoshop', icon: './images/photoshop.png', percentage: '99%' },
  { id: 5, name: 'Premiere Pro', icon: './images/premiere-pro.png', percentage: '70%' },
  { id: 6, name: 'Html/Css', icon: './images/hc.png', percentage: '80%' },

];

const Tools = () => {
  return (
    <div className="tools">
      <h2 className="tools-title">My <span>Skills</span></h2>
      <p className="tools-description">
      </p>
      <div className="tools-grid">
        {skillsData.map(skill => (
          <div key={skill.id} className="tools-card">
            <img src={skill.icon} alt={`${skill.name} icon`} className="tools-icon" />
            <h3>{skill.percentage}</h3>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
