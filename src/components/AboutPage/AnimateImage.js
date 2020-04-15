import React from "react";
import { useSpring, animated } from "react-spring";

export const AnimateImage = ({ showPage, classes, imageSource, altText }) => {
  const dangleProps = useSpring({
    transform: showPage ? "rotateY(0deg)" : "rotateY(120deg)",
    // transformOrigin: "center top",
    from: { transform: "rotateY(90deg)" },
    config: { mass:3, tension: 150, friction: 15 },
  });

  return <animated.img className={classes} src={imageSource} alt={altText} style={dangleProps} />;
};
