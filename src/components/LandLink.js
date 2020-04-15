import React, { useContext, cloneElement } from "react";
import "./LandLink.css";
import { LandContext } from "../context/LandContext";
import { useSpring, animated } from "react-spring";

export const LandLink = ({ id, index }) => {
  const { anyLinkClicked, togglePage, links } = useContext(LandContext);
  const { text, children, showPage } = links[index];

  const landLinkAppear = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    opacity: 1,
    transform: "translateY(0px)",
    delay: (index + 1) * 300,
    config: { mass: 1, tension: 200, friction: 12 },
  });

  const linkStyle =
    showPage && anyLinkClicked
      ? { top: "-43vh", color: "rgb(255, 255, 255)" }
      : anyLinkClicked
      ? { top: "-43vh", fontSize: "calc(2vmin + 12px)" }
      : {};

  const pageStyle =
    showPage && anyLinkClicked
      ? { transform: "translateY(7vh)", visibility: "visible" }
      : { transform: "translateY(90vh)", visibility: "hidden" };

  return (
    <>
      <animated.div style={landLinkAppear}>
        <div
          className="land-link"
          id={id}
          onClick={() => togglePage(id)}
          style={linkStyle}
        >
          {text}
        </div>
      </animated.div>

      <div className="page" style={pageStyle}>
        {cloneElement(children, { showPage })}
      </div>
    </>
  );
};
