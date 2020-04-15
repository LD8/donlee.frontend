import React, { useContext } from "react";
import "./LandLink.css";
import { LandContext } from "../context/LandContext";
import { useSpring, animated } from "react-spring";

export const LandLink = ({ id, index }) => {
  const { anyLinkClicked, togglePage, links } = useContext(LandContext);
  const { text, children, showPage } = links.find((i) => i.text === id);

  const landLinkStyle = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    opacity: 1,
    transform: "translateY(0px)",
    delay: (index + 1) * 300,
    config: { mass: 1, tension: 200, friction: 12 },
  });

  const linkStyle =
    showPage && anyLinkClicked
      ? { top: "-40vh", color: "rgba(255, 255, 255, 0.7)" }
      : anyLinkClicked
      ? { top: "-40vh" }
      : {};

  const pageStyle =
    showPage && anyLinkClicked
      ? { transform: "translateY(9vh)", visibility: "visible" }
      : { transform: "translateY(90vh)", visibility: "hidden" };

  return (
    <>
      <animated.div style={landLinkStyle}>
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
        {children}
      </div>
    </>
  );
};
