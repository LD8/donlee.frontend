import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Showcase = ({ showPage, imageSource, altText }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `perspective(600px) rotateX(${isClicked ? 180 : 0}deg)`,
    // from: { opacity: 0, transform: "rotateX(0deg)" },
    config: { mass: 4, tension: 200, friction: 35 },
  });

  return (
    <>
      <div className="card" onClick={() => setIsClicked(!isClicked)}>
        <animated.img
          className="card-front"
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
          }}
          src={imageSource}
          alt={altText}
        ></animated.img>
        <animated.img
          className="card-back"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
          src={imageSource}
          alt={altText}
        ></animated.img>
      </div>
    </>
  );
};
