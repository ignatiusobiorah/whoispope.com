import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/skills.scss";

const Skills = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <div className="skills">
        <h1>SKILLS</h1>
        <div className="skills-content">
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={97} duration={2} delay={0} />
              )}
              %
            </h1>
            <h3>JAVASCRIPT</h3>
          </div>
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={98} duration={2} delay={0} />
              )}
              %
            </h1>
            <h3>REACT</h3>
          </div>
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={70} duration={2} delay={0} />
              )}
              %
            </h1>
            <h3>TYPESCRIPT</h3>
          </div>
          <div>
            <h1>
              {counterOn && (
                <CountUp start={0} end={99} duration={2} delay={0} />
              )}
              %
            </h1>
            <h3>GIT</h3>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Skills;
