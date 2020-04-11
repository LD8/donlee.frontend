import React, { useState } from "react";
import "./LandLink.css";
import "./About.css";

export const About = () => {
  const [popupStyle, setPopupStyle] = useState({ top: "-30vh" });
  const [linkPosition, setLinkPosition] = useState({});
  const [pageStyle, setPageStyle] = useState({ transform: "translateY(90vh)", visibility: "hidden" });

  const onMouseEnter = () => {
    if (pageStyle.transform === "translateY(90vh)") setPopupStyle({ top: "0" });
    setLinkPosition({
      transform: "translateY(-10px)",
      color: "rgb(225, 240, 218)",
    });
    setPageStyle({ transform: "translateY(90vh)", visibility: "hidden" });
  };
  const onMouseLeave = () => {
    setPopupStyle({ top: "-30%" });
    if (pageStyle.transform === "translateY(90vh)") {
      setLinkPosition({ transform: "translateY(0px)", color: "white" });
    }
  };

  const ShiftUpLandLinksAndShowPage = () => {
    setPopupStyle({ top: "-30vh" });
    setLinkPosition({ top: "-40vh" });
    setPageStyle({ transform: "translateY(10vh)", visibility: "visible" });
  };
  return (
    <>
      <div
        className="land-link"
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => ShiftUpLandLinksAndShowPage()}
        style={linkPosition}
      >
        About
      </div>
      <div className="popup about" style={popupStyle}>
        <ul>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
        </ul>
      </div>

      <div className="page" style={pageStyle}>
        <ul>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
          <li>about Don Lee</li>
        </ul>
      </div>
    </>
  );
};
