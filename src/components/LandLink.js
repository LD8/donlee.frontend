import React, { useContext } from "react";
import "./LandLink.css";
import { GlobalContext } from "../context/GlobalContext";

export const LandLink = ({ id }) => {
  const { anyLinkClicked, togglePage, links } = useContext(GlobalContext);
  const { text, children, showPage } = links.find((i) => i.text === id);

  const linkStyle =
    showPage && anyLinkClicked
      ? { top: "-40vh", color: "rgba(255, 255, 255, 0.7)" }
      : anyLinkClicked
      ? { top: "-40vh" }
      : {};

  const pageStyle =
    showPage && anyLinkClicked
      ? { transform: "translateY(10vh)", visibility: "visible" }
      : { transform: "translateY(90vh)", visibility: "hidden" };

  return (
    <>
      <div
        className="land-link"
        id={id}
        onClick={() => togglePage(id)}
        style={linkStyle}
      >
        {text}
      </div>

      <div className="page" style={pageStyle}>
        {children}
      </div>
    </>
  );
};
