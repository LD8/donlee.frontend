import React, { useState, useContext } from "react";
import "./LandLink.css";
import { GlobalContext } from "../context/GlobalContext";

export const PortfolioLink = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { anyLinkClicked, portfolioActivated, activatePortfolio } = useContext(
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
    activatePortfolio();
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
            ? { top: "-40vh" }
            : isHovered
            ? {
                transform: "translateY(-15px)",
                color: "rgba(255, 255, 255, 0.7)",
              }
            : {}
        }
      >
        Portfolio
      </div>

      <div
        className="page"
        style={
          portfolioActivated && anyLinkClicked
            ? { transform: "translateY(10vh)", visibility: "visible" }
            : isHovered
            ? { transform: "translateY(80vh)", visibility: "visible" }
            : { transform: "translateY(90vh)", visibility: "hidden" }
        }
      >
        {children}
      </div>
    </>
  );
};
