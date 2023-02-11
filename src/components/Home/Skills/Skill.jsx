import React from 'react';

const Skill = ({curso}) => {
    const [showInfo, setShowInfo] = React.useState(false);
  
    return (
      <div
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        style={{ display: 'inline-block', position: 'relative' }}
      >
        <img src={curso.img} alt={curso.title} style={{ width:  '40%', transition: '0.5s' }} />
        {showInfo && (
          <div style={{ position: 'absolute', left: '70%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <h2>{curso.title}</h2>
            <ul>
              {curso.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };


export default Skill;