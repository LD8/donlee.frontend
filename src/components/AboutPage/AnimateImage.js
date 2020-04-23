import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export const AnimateImage = ({ imageSource, altText }) => {
  const dangleProps = useSpring({
    transform: "rotateZ(0deg)",
    from: { transform: "rotateZ(30deg)" },
    config: { mass: 3, tension: 150, friction: 15 },
  });

  return (
    <ImgContainer id="ImgContainer">
      <animated.img
        src={imageSource}
        alt={altText}
        style={dangleProps}
      />
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  margin: 4vh 0;
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 50%;
    height: 50%;
    max-width: 250px;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(130, 130, 130, 0.5);
    background-image: linear-gradient(
      45deg,
      rgba(197, 228, 219, 0.2),
      rgba(216, 211, 181, 0.2)
    );
    filter: contrast(1.5);
  }
`;
