import React, { useState, useEffect } from 'react';

const roles = [
  { text: 'MERN Developer', color: '#FC819E' },
  { text: 'Backend Developer', color: '#90D26D' },
  { text: 'Programmer', color: '#41C9E2' },
  { text: 'Problem Solver', color: 'yellow' },
];

function ColorfulTypeWriterEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharIndex((prevCharIndex) => {
        let newIsDeleting = isDeleting;
        let newRoleIndex = roleIndex;
        let newCharIndex = prevCharIndex;

        if (!isDeleting && prevCharIndex === roles[roleIndex].text.length) {
          newIsDeleting = true;
        } else if (isDeleting && prevCharIndex === 0) {
          newIsDeleting = false;
          newRoleIndex = (roleIndex + 1) % roles.length;
        }

        newCharIndex = isDeleting ? prevCharIndex - 1 : prevCharIndex + 1;

        setIsDeleting(newIsDeleting);
        setRoleIndex(newRoleIndex);
        return newCharIndex;
      });
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [roleIndex, charIndex, isDeleting]);

  return (
    <span style={{ color: roles[roleIndex].color }}>
      {roles[roleIndex].text.substring(0, charIndex)}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default ColorfulTypeWriterEffect;


