import React, { useContext } from "react";
import { useSpring, animated, config } from "react-spring";
import { LandContext } from "../../context/LandContext";

export const Skill = ({ pageText, skill, percentage, index }) => {
  const { links } = useContext(LandContext);
  const { showPage } = links.find((i) => i.text === pageText);

  const numberProps = useSpring({
    to: { number: showPage ? percentage : 0 },
    from: { number: 0 },
    delay: index * 100,
    config: config.molasses,
  });
  const widthProps = useSpring({
    to: { width: showPage ? `${percentage}%` : `0%` },
    from: { width: `0%` },
    delay: index * 100,
    config: config.molasses,
  });
  return (
    <div className="skill">
      <div className="skill-img" />
      <div className="skill-name">{skill}</div>
      <div className="skill-percentage-box">
        <animated.div className="skill-percentage-fill" style={widthProps} />
        <animated.div className="skill-percentage-text">
          {numberProps.number.interpolate((n) => `${n.toFixed()}%`)}
        </animated.div>
      </div>
    </div>
  );
};
