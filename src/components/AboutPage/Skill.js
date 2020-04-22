import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

export const Skill = ({ skill, percentage, index }) => {
  const numberProps = useSpring({
    number: percentage,
    from: { number: 0 },
    delay: index * 100,
    config: config.molasses,
  });
  const widthProps = useSpring({
    width: `${percentage}%`,
    from: { width: `0%` },
    delay: index * 100,
    config: config.molasses,
  });
  return (
    <SSkill id="SSkill">
      <div className="skill-name">{skill}</div>
      <div className="skill-percentage-box">
        <animated.div className="skill-percentage-fill" style={widthProps} />
        <animated.div className="skill-percentage-text">
          {numberProps.number.interpolate((n) => `${n.toFixed()}%`)}
        </animated.div>
      </div>
    </SSkill>
  );
};

const SSkill = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 1vh 0;
  font-size: calc(1vmin + 8px);
  display: flex;
  --skill-name-width: calc(3vw + 50px);

  .skill-name {
    width: var(--skill-name-width);
    text-align: right;
    padding-right: 1vw;
  }
  
  .skill-percentage-box {
    display: flex;
    align-items: center;
    width: calc(100% - var(--skill-name-width));

    .skill-percentage-fill {
      width: 100%;
      height: 50%;
      border-radius: 3px;
      background-image: linear-gradient(
        90deg,
        rgba(225, 180, 0, 0.4),
        rgb(120, 190, 1)
      );
    }
    .skill-percentage-text {
      font-size: smaller;
      padding: 0 0 0 10px;
    }
  }
`;
