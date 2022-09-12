import React, { useEffect, useState } from 'react';
import { SkillsProps } from './Skills.types';

const Skills = ({ skills }: SkillsProps) => {
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLogin(true);
    }, 1000);
  }, [setLogin]);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {login ? (
        <button>
          Start learning
        </button>
      ) : (
        <button onClick={() => setLogin((prev) => !prev)}>Login</button>
      )}
    </>
  );
};

export default Skills;
