import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { TechLabel } from "./TechLabel";

export const Showcase = ({ imageSource, altText, labels }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `perspective(600px) rotateX(${isClicked ? 180 : 0}deg)`,
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
        {isClicked && (
          <div className="tech-labels">
            <ul>
              {labels
                ? labels.map((label, index) => (
                    <TechLabel
                      key={index}
                      isClicked={isClicked}
                      label={label}
                      index={index}
                    />
                  ))
                : null}
            </ul>
            <a href="mailto:don_lee@me.com">
              <TechLabel
                key={"more"}
                isClicked={isClicked}
                label={"more..."}
                index={labels ? labels.length + 8 : 8}
              />
            </a>
          </div>
        )}
      </div>
    </>
  );
};
