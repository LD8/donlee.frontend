import React, { useState, useContext } from "react";
import "./LandLink.css";
import { GlobalContext } from "../context/GlobalContext";

export const BlogLink = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { anyLinkClicked, blogActivated, activateBlog } = useContext(
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
    activateBlog();
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
        Blog
      </div>

      <div
        className="page"
        style={
          blogActivated && anyLinkClicked
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
