import React from 'react'
import { useSpring, animated } from "react-spring";

export const TechLabel = ({ isClicked, label, index }) => {
    const labelProps = useSpring({
      opacity: isClicked ? 1 : 0,
      transform: `translateY(${isClicked ? 0 : -20}px)`,
      delay: 100 * (index + 4),
      from: { opacity: 0, transform: "translateY(-20px)" },
      config: { mass: 1, tension: 120, friction: 8 },
    });
    return <animated.li style={labelProps}>{label}</animated.li>;
  };