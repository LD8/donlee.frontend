import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Icon = ({ showPage, imageSource, altText, index, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dangleProps = useSpring({
    transform: showPage ? "rotateZ(0deg)" : "rotateZ(180deg)",
    transformOrigin: "top",
    from: { transform: "rotateZ(180deg)" },
    config: { mass: 1, tension: 210 - index * 50, friction: 5 },
  });

  const hoveredProps = useSpring({
    transform: isHovered ? "rotateZ(360deg)" : "rotateZ(0deg)",
    transformOrigin: "center center",
    from: { transform: "rotateZ(0deg)" },
    config: { mass: 1, tension: 150, friction: 10 },
  });

  return (
    <animated.div
      className="contact-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={hoveredProps}
    >
      <a href={href}>
        <animated.img src={imageSource} alt={altText} style={dangleProps} />
      </a>
    </animated.div>
  );
};
