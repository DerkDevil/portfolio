"use client";

import { Typewriter } from 'react-simple-typewriter';

const IdentityLabel = () => {
  return (
    <div className="min-h-[48px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[72px]">
      <span className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-accent`}>
        <Typewriter
          words={[
            "Senior Full Stack",
            "Tech Lead",
            "Cloud Computing",
            "DevOps",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
        />
      </span>
    </div>

  );
};

export default IdentityLabel;
