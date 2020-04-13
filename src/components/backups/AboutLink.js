import React, { useState, useContext } from "react";
import "./LandLink.css";
import { GlobalContext } from "../context/GlobalContext";

export const AboutLink = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { anyLinkClicked, aboutActivated, activateAbout } = useContext(
    GlobalContext
  );

  const onMouseEnter = () => {
    // When hovered on the link
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    // When mouse leaves the link
    setIsHovered(false);
  };

  const handleClick = () => {
    activateAbout();
  };

  return (
    <>
      <div
        className="land-link"
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => handleClick()}
        style={
          anyLinkClicked
            ? { top: "-40vh", color: "rgba(255, 255, 255, 0.7)" }
            : isHovered
            ? {
                transform:
                  "perspective(600px) translate3d(0,-15px, 20px)",
                color: "rgba(255, 255, 255, 0.8)",
              }
            : {}
        }
      >
        About
      </div>

      <div
        className="page"
        style={
          aboutActivated && anyLinkClicked
            ? { transform: "translateY(10vh)", visibility: "visible" }
            : // : isHovered
              // ? { transform: "translateY(80vh)", visibility: "visible" }
              { transform: "translateY(90vh)", visibility: "hidden" }
        }
      >
        {children}
      </div>
    </>
  );
};
