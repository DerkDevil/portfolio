"use client";

import { Typewriter } from 'react-simple-typewriter';

const IdentityLabel = () => {
  return (
    <span className="text-5xl font-semibold text-accent
">
      <Typewriter
        words={[
          'Senior Dev Full Stack',
          'Tech Lead',
          'Cloud Computing',
          'DevOps'
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
      />
    </span>
  );
};

export default IdentityLabel;
