import React, { useState, useEffect, useContext, cloneElement } from "react";
import { LandContext } from "../context/LandContext";

export const PageHandler = ({ index }) => {
  const { anyLinkClicked, links } = useContext(LandContext);
  const { children, showPage } = links[index];
  const [pageStyle, setPageStyle] = useState({
    transform: "translateY(90vh)",
    visibility: "hidden",
  });

  useEffect(() => {
    showPage && anyLinkClicked
      ? setPageStyle({
          transform: "translateY(7vh)",
          transition: "all .5s ease",
          visibility: "visible",
        })
      : setPageStyle({
          transform: "translateY(90vh)",
          transition: "all .5s ease",
          visibility: "hidden",
        });
  }, [showPage, anyLinkClicked]);

  return (
    <div className="page" style={pageStyle}>
      {cloneElement(children, { showPage })}
    </div>
  );
};
