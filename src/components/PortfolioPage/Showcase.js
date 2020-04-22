import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { TechLabels } from "./TechLabels";

export const Showcase = ({ imageSource, altText, labels }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `perspective(600px) rotateX(${isClicked ? 180 : 0}deg)`,
    config: { mass: 4, tension: 200, friction: 35 },
  });

  return (
    <SCard className="card" onClick={() => setIsClicked(!isClicked)}>
      <animated.img
        className="card-front"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
        src={imageSource}
        alt={altText}
      />
      <animated.img
        className="card-back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
        src={imageSource}
        alt={altText}
      />
      {isClicked && <TechLabels labels={labels} isClicked={isClicked} />}
    </SCard>
  );
};
const SCard = styled.div`
  position: relative;
  width: 40%;
  margin: calc(1vmin + 10px);
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    border: 2px solid rgba(26, 70, 3, 0.2);
    border-radius: 6px;
    box-shadow: 0 5px 15px rgba(128, 128, 128, 0.5);
  }

  .card-back {
    position: absolute;
    left: 0;
    filter: brightness(30%);
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;
